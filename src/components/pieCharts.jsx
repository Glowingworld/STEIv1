import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockPieData } from "../Data/mockdata";
const data = mockPieData;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieCharts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      height="440px"
      justifyContent="center"
      sx={{
        backgroundColor: "white",
        boxShadow: `2px 2px white`,
        borderRadius: "4px",
      }}
    >
      <PieChart width={500} height={500}>
        <Pie
          data={data}
          cx={250}
          cy={240}
          innerRadius={100}
          label="label"
          labelLine="label"
          outerRadius={160}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={entry.id} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </Box>
  );
};
export default PieCharts;
