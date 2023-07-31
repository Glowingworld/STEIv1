// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import styles from "@/styles/components.module.scss";
// //import styles from "@/styles/Home.module.css";
// export default function ButtonAppBar() {
//   return (
//     <Box className={styles.navbar}>
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         className={styles.footerContents}
//       >
//         <Box display="flex">
//           <Typography>STEI </Typography>
//           <Typography>Property </Typography>
//           <Typography>About us </Typography>
//           <Typography>Contacts</Typography>
//         </Box>
//         <Box display="flex" justifyContent="space-evenly">
//           <Box>
//             <Typography>Login</Typography>
//           </Box>
//           <Box>
//             <Typography>Register</Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import styles from "@/styles/components.module.scss";
import { useSelector } from "react-redux";
import { logout } from "@/Features/auth/authetication";
import { Logout } from "@mui/icons-material";
import { useDispatch } from "react-redux";
export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { loading, error, userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
    <Box
      sx={{ flexGrow: 1, backgroundColor: "white" }}
      className={styles.navbar}
    >
      <AppBar position="static" className={styles.appbar}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="white"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

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
            {userInfo ? <Link href="/userDashboard">Dashboard</Link> : null}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex", color: " rgba(0, 0, 0, 0.5)" },
            }}
          >
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
              {userInfo ? (
                ` ${userInfo.user.Email}`
              ) : (
                <Link href="/Auth/Login">Login</Link>
              )}
            </Typography>

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
              {userInfo ? (
                <Link
                  href="/Auth/Register"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Logout
                </Link>
              ) : (
                <Link href="/Auth/Register">Register</Link>
              )}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
