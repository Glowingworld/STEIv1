import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import TableGrid from "@/components/tablegrid";
import ButtonAppBar from "@/components/navbar";
import AdminSidebar from "@/components/adminSidebar";
import Head from "@/components/ header";
import { mockDataTeam } from "@/Data/mockdata";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "@/theme";
import { useTheme } from "@mui/material";

const Users = () => {
  const [users, setUsers] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    requestUsers();
  }, []);

  async function requestUsers() {
    try {
      let res = await fetch("http://localhost:8045/users", {
        method: "GET",
        headers: {},
      });

      res = await res.json();
      console.log(res.user);
      setUsers(res.user);
    } catch (error) {
      console.log(error);
    }
  }

  const columns = [
    { field: "_id", headerName: "ID" },
    {
      field: "First_Name",
      headerName: "FIRST NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Last_Name",
      headerName: "LAST NAME",
      type: "String",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "Phone",
      headerName: "PHONE",
      flex: 1,
    },
    {
      field: "Email",
      headerName: "EMAIL",
      flex: 1,
    },

    {
      headerName: "ACTIONS",
      flex: 1,
    },
  ];

  return (
    <Box display="flex">
      <AdminSidebar />
      <Box style={{ marginLeft: "auto", flex: 1, paddingTop: "20px" }}>
        <Head title="USERS" subtittle="voila users" />
        <Box
          m="40px 0 0 0"
          height="90vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
              color: colors.greenAccent[200],
            },

            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[400],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[300],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[400],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
        </Box>
      </Box>
    </Box>
  );
};

export default Users;
