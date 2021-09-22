import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const HomeChart = () => {
  const data = [
    {
      day: "Monday",
      pos: 120,
      neg: 110,
    },
    {
      day: "Tuesday",
      pos: 98,
      neg: 90,
    },
    {
      day: "Wednesday",
      pos: 86,
      neg: 70,
    },
    {
      day: "Thursday",
      pos: 99,
      neg: 70,
    },
    {
      day: "Friday",
      pos: 85,
      neg: 50,
    },
    {
      day: "Saturday",
      pos: 65,
      neg: 40,
    },
    {
      day: "Sunday",
      pos: 150,
      neg: 70,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={320}>
      <RadarChart outerRadius={90} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="day" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Positive"
          dataKey="pos"
          stroke="#0d6efd"
          fill="#0d6efd"
          fillOpacity={0.6}
        />
        <Radar
          name="Negative"
          dataKey="neg"
          stroke="#20c997"
          fill="#20c997"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default HomeChart;
