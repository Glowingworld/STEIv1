import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockPieData } from "../../Data/mockdata";
const data = mockPieData;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const pieCharts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      height="50vh"
      justifyContent="center"
      sx={{
        backgroundColor: colors.primary[600],
        boxShadow: `2px 2px ${colors.primary[300]}`,
        borderRadius: "4px",
      }}
    >
      <PieChart width={800} height={700}>
        <Pie
          data={data}
          cx={360}
          cy={240}
          innerRadius={120}
          label="label"
          labelLine="label"
          outerRadius={180}
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
export default pieCharts;
