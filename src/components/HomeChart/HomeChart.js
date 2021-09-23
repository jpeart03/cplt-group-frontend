import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const HomeChart = () => {
  const data = [
    {
      day: "Mon",
      pos: 120,
      neg: 110,
    },
    {
      day: "Tue",
      pos: 98,
      neg: 90,
    },
    {
      day: "Wed",
      pos: 86,
      neg: 70,
    },
    {
      day: "Thu",
      pos: 99,
      neg: 70,
    },
    {
      day: "Fri",
      pos: 85,
      neg: 50,
    },
    {
      day: "Sat",
      pos: 65,
      neg: 40,
    },
    {
      day: "Sun",
      pos: 150,
      neg: 70,
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
        <PolarAngleAxis dataKey="day" />
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
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default HomeChart;
