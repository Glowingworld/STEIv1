import { Box, useTheme } from "@mui/material";
import { mockBarData } from "../../Data/mockdata";
import Header from "./ header";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { tokens } from "../theme";

const data = mockBarData;
//   {
//     name: "Page A",
//     uv: 4,
//     pv: 2,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

const barChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveContainer width="90%" height="75%">
      <BarChart
        width={600}
        height={100}
        data={data}
        margin={{
          top: 0,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 0" />
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="hot dog" stackId="a" fill="hsl(87, 70%, 50%)" />
        <Bar dataKey="burger" stackId="a" fill="hsl(141, 70%, 50%)" />
        <Bar dataKey="kebab" stackId="a" fill="hsl(224, 70%, 50%)" />
        <Bar dataKey="donut" stackId="a" fill="hsl(274, 70%, 50%)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default barChart;
