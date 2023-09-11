import AdminSidebar from "@/components/adminSidebar";
import Head from "@/components/common/dashboard/ header";
import ButtonAppBar from "@/components/common/navbar";
import { Sidebar, useProSidebar } from "react-pro-sidebar";
import { useState } from "react";
import { Box, Grid } from "@mui/material";
import PieCharts from "@/components/pieCharts";
import BarChart from "@/components/barCharts";
const AdminDashboard = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const [selected, setSelected] = useState("");
  return (
    <div
      style={{ backgroundColor: "#f6f6f6", height: "100vh", display: "flex" }}
    >
      <AdminSidebar />
      <div style={{ marginLeft: "auto", flex: 1, paddingTop: "10px" }}>
        {/* <ButtonAppBar /> */}
        <Head title="Dashboard" subtittle="voila dashboard" />
        <Box>
          <Grid container spacing={1}>
            <Grid iteme xs={12} md={8}>
              <BarChart />
            </Grid>
            <Grid iteme xs={12} md={4}>
              <PieCharts />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default AdminDashboard;
