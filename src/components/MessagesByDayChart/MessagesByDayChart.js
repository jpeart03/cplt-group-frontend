import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import { fetchMessagesByDay } from "../../api/messagesByDayCalls.js";
import { useAuth } from "../../contexts/AuthContext.js";

const MessagesByDayChart = () => {
  const [messagesByDayData, setMessagesByDayData] = useState();
  const { authToken } = useAuth();

  useEffect(() => {
    const getRecords = async (authToken) => {
      let dataArray = await fetchMessagesByDay(authToken);

      setMessagesByDayData(dataArray);
    };
    if (authToken) {
      getRecords(authToken);
    }
  }, [authToken]);

  if (messagesByDayData) {
    // console.log("start MBDD", messagesByDayData)

    messagesByDayData.sort(function (a, b) {
      var keyA = a.name,
        keyB = b.name;
      // console.log("keyA", keyA, "keyB", keyB)
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });

    // console.log("end MBDD", messagesByDayData)
  }

  return (
    <div>
      <h3>Messages by day</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={messagesByDayData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="value" stroke="#0d6efd" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MessagesByDayChart;
