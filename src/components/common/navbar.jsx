import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import styles from "@/styles/components.module.scss";

import { logout } from "@/Features/auth/authetication";
import { Logout } from "@mui/icons-material";
import { UnstyledButton, Badge, Group } from "@mantine/core";
import ButtonMenu from "../Buttons/dropdownMenubtn";

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { data: session, status } = useSession();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const user = session?.user;
  let userData = user?.user;

  let fname = userData?.First_name;
  let lastname = userData?.Last_name;
  console.log(user);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Group
      sx={{ flexGrow: 1, backgroundColor: "white" }}
      className={styles.navbar}
    >
      <AppBar className={styles.appbar}>
        <Toolbar>
          <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              paddingLeft: "10px",
              color: " rgba(0, 0, 0, 0.5)",
            }}
          >
            <Link href="/">STEI</Link>
          </Typography>
          <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                paddingLeft: "10px",
                color: " rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <Link href="/Property">Property</Link>
          </Typography>
          <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                paddingLeft: "10px",
                color: " rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <Link href="/AboutUs"> AboutUs</Link>
          </Typography>
          <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                paddingLeft: "10px",
                color: " rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <Link href="/Dashboard">
              {status == "authenticated" ? "Dashboard" : null}
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex", color: " rgba(0, 0, 0, 0.5)" },
            }}
          >
            {status == "authenticated" ? (
              <ButtonMenu link="#" title={`${fname} ${lastname}`} />
            ) : (
              <Typography
                variant="h7"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  padding: "4px",
                  color: " rgba(0, 0, 0, 0.5)",
                }}
              >
                <Link href="/Auth/Login">Login</Link>
              </Typography>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Group>
  );
}
