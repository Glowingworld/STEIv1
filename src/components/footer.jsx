import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "@/styles/components.module.scss";
//import styles from "@/styles/Home.module.css";
export default function Footer() {
  return (
    <Box className={styles.footer}>
      <Box
        display="flex"
        justifyContent="space-between"
        className={styles.footerContents}
      >
        <Box display="flex">
          <Typography>(c) 2023 STEI, All right reserved </Typography>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <Box>
            <Typography>.</Typography>
          </Box>
          <Box>
            <Typography>.</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
