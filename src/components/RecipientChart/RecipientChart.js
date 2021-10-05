import { useState, useEffect } from 'react'
import { useAuth } from "../../contexts/AuthContext.js";
import { fetchRecipientsByUser } from "../../api/recipientCalls";
import { fetchMessagesByUser } from "../../api/messageCalls";
import { UserMessages } from "../../components/Messages/AllMessagesList.js"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip, } from "recharts";

const RecipientChart = () => {
  const [messageArray, setMessageArray] = useState();
  const [recipients, setRecipients] = useState();
  const { authToken } = useAuth();

  useEffect( () => {
    const getUserMessages = async ( authToken ) => {
      let userMessages = await fetchMessagesByUser(authToken)
      setMessageArray(userMessages)
    }
    if(authToken){
      getUserMessages(authToken)
    }

    const getUserRecipients = async () => {
      let userRecipients = await fetchRecipientsByUser(authToken);
      setRecipients(userRecipients);
      
    }
    if (authToken) {
      getUserRecipients();
    }

  }, [authToken]);



  const Messages = () => {
    if (messageArray){
      console.log('messageArray', messageArray)
      return messageArray.map((message, recipient) => {
      })
        }
    else return null
  }





  const data = [
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
        data={data}
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
