import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

//import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../../theme";
const Head = ({ title, subtittle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Typography
        variant="h3"
        fontWeight="bold"
        style={{
          color: `${colors.grey[400]}`,
          // paddingLeft: "15px",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        fontWeight="bold"
        style={{
          color: `${colors.greenAccent[400]}`,
          // paddingLeft: "15px",
        }}
      >
        {subtittle}
      </Typography>
    </Box>
  );
};

export default Head;
