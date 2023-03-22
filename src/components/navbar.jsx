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

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "white" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          paddingLeft: "10%",
          paddingRight: "10%",
          height: "20%",
        }}
      >
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
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", color: "darkblue" } }}
          >
            STEI
          </Typography>
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
            <Link href="/">Home</Link>
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
            Contact
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
              <a>Login</a>
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
              <a>Register</a>
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
