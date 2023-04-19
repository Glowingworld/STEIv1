import Sdebar from "@/components/userSide";
import Head from "@/components/ header";
import ButtonAppBar from "@/components/navbar";
import { Sidebar, useProSidebar } from "react-pro-sidebar";
import { useState } from "react";
import { Box } from "@mui/material";
import AuthRoute from "@/components/authRoute";
const Dashboard = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const [selected, setSelected] = useState("");
  return (
    <AuthRoute>
      <div
        style={{ backgroundColor: "#f6f6f6", height: "100vh", display: "flex" }}
      >
        <Sdebar />
        <div style={{ marginLeft: "auto", flex: 1 }}>
          <ButtonAppBar />
          <Head title="Dashboard" subtittle="voila dashboard" />
        </div>
      </div>
    </AuthRoute>
  );
};

export default Dashboard;
