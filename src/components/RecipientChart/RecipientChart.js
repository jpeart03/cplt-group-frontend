import { useState, useEffect } from 'react'
import { useAuth } from "../../contexts/AuthContext.js";
import { fetchRecipientsByUser } from "../../api/recipientCalls";
import { fetchMessagesByUser } from "../../api/messageCalls";
import { UserMessages } from "../../components/Messages/AllMessagesList.js"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip, } from "recharts";

const RecipientChart = () => {
  const [messageArray, setMessageArray] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [dataSet, setDataSet] = useState([]);

  const { authToken } = useAuth();

  useEffect( () => {
    const getUserMessages = async () => {
      let userMessages = await fetchMessagesByUser(authToken)
      userMessages.map((message) => {
        setMessageArray(...userMessages)
      })
      setMessageArray(userMessages)
    }
    if (authToken) {
      if (messageArray.length == 0) {
        getUserMessages()
      }
    }
  }, []);

  useEffect( () => {
    const getUserRecipients = async () => {
      let userRecipients = await fetchRecipientsByUser(authToken)
      setRecipients(userRecipients)
    }
    if (authToken) {
      if (recipients.length == 0) {
        getUserRecipients()
      }
    }
  }, []);

  useEffect( () => {
    const getData = async () => {
      const finalData = await buildDataArray()
      setDataSet(finalData)
    }
    if (authToken) {
      if (dataSet.length == 0) {
        getData()
      }
    }
  }, [dataSet]);


  const buildDataArray = () => {
    const dataArray = []

    const getRecipientName = (recipientArray) => {
      let userArray = []
      for (var u = 0; u <= recipientArray.length - 1; u++) {
        userArray.push([recipientArray[u].id, recipientArray[u].first_name])
      }
      return userArray
    }
  
    const getRecipientMsgCount = (messages) => {
      let userMsgCount = []
      for (var u = 0; u <= messages.length - 1; u++) {
        if (messages[u].recipient in userMsgCount) {
          userMsgCount[messages[u].recipient] += 1 
        } else {
          userMsgCount[messages[u].recipient] = 1
        }
      }
      return userMsgCount;
    }

    const getCountByName = () => {
      const idMsgCount = getRecipientMsgCount(messageArray)
      const messagedRecipients = getRecipientName(recipients)

      for (var u = 0; u <= messagedRecipients.length - 1; u++) {
        dataArray.push({recipient: messagedRecipients[u][1], count: idMsgCount[messagedRecipients[u][0]] })
      }
      return dataArray
    }
    const userDataArray = getCountByName()
    return userDataArray
  }

  const dataTest = [
    {
      recipient: "Bob",
      count: 12,
    },
    {
      recipient: "Dave",
      count: 9,
    },
    {
      recipient: "Alice",
      count: 6,
    },
    {
      recipient: "Doug",
      count: 3,
    },
    {
      recipient: "Liz",
      count: 5,
    },
    {
      recipient: "Sally",
      count: 1,
    },
    {
      recipient: "Matt",
      count: 15,
    },
  ];

  return (
    <ResponsiveContainer height={500} width="100%">
      <RadarChart
        outerRadius="80%"
        data={dataSet}
        margin={{ top: 0, right: 10, bottom: 0, left: 10 }}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="recipient" />
        <Radar
          name="Message Count"
          dataKey="count"
          stroke="#0d6efd"
          fill="#0d6efd"
          fillOpacity={0.6}
        />
        <Legend />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RecipientChart;
