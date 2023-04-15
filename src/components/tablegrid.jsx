import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../Data/mockdata";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Head from "./ header";

const tableGrid = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    // { field: "id", headerName: "ID" },
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
    <Box>
      <Box
        m="40px 0 0 0"
        height="92vh"
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
  );
};

export default tableGrid;
