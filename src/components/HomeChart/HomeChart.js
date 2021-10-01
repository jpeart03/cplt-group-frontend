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
      count: 120,
    },
    {
      day: "Tue",
      count: 98,
    },
    {
      day: "Wed",
      count: 86,
    },
    {
      day: "Thu",
      count: 99,
    },
    {
      day: "Fri",
      count: 85,
    },
    {
      day: "Sat",
      count: 65,
    },
    {
      day: "Sun",
      count: 150,
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

export default HomeChart;
