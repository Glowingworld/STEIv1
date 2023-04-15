import AdminSidebar from "@/components/adminSidebar";
import Head from "@/components/ header";
import ButtonAppBar from "@/components/navbar";
import { Sidebar, useProSidebar } from "react-pro-sidebar";
import { useState } from "react";
import { Box } from "@mui/material";
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
      </div>
    </div>
  );
};

export default AdminDashboard;
