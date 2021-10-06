import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useState, useEffect } from 'react'
import { fetchMessagesByDay } from "../../api/messagesByDayCalls.js";
import { useAuth } from "../../contexts/AuthContext.js"

const MessagesByDayChart = () => {
  const [messagesByDayData, setMessagesByDayData] = useState();
  const { authToken } = useAuth();
  
  useEffect( () => {
    const getRecords = async ( authToken ) => {
      let dataArray = await fetchMessagesByDay(authToken)

      setMessagesByDayData(dataArray)
    }
    if(authToken){
      getRecords(authToken)
    }

  }, [authToken])

  // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
  // const data = messagesByDayData.map( (idx) => console.log("MAP", idx))
  // console.log("MBDD", messagesByDayData['20210928'])

  const renderLineChart = (
    <LineChart width={600} height={300} data={messagesByDayData}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );



  return (
    <div>
      <h1>THIS IS WHERE THE CHART GOES</h1>
      {renderLineChart}
    </div>
  )
}

export default MessagesByDayChart;