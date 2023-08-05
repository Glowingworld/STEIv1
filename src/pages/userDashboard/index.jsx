//import Sdebar from "@/components/userSide";

// import { Link } from "react-router-dom";
import { Menu, MenuItem, ProSidebarProvider } from "react-pro-sidebar";
import { IconButton, useTheme } from "@mui/material";
import Link from "next/link";
//import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import RoofingIcon from "@mui/icons-material/Roofing";
import VisibilityIcon from "@mui/icons-material/Visibility";

//////////
import Head from "@/components/ header";
import ButtonAppBar from "@/components/navbar";
import { Sidebar, useProSidebar } from "react-pro-sidebar";
import userContext from "@/components/context";
import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import PieCharts from "@/components/pieCharts";
import BarChart from "@/components/barCharts";
import AuthRoute from "@/components/authRoute";
import styles from "@/styles/Home.module.scss";
import NCard from "@/components/dashCard";
import CarouselCard from "@/components/manCard";
import Submit from "../../components/Submit";
import Profile from "../../components/profile";

const Item = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  isCollapsed,
  components,
  setComponent,
}) => {
  return (
    <MenuItem
      active={true}
      style={{
        color: "#426583",
      }}
      onClick={() => {
        setComponent(components);
        setSelected(selected);
        console.log(selected);
      }}
      icon={icon}
    >
      <Link href={to}> {title}</Link>
    </MenuItem>
  );
};

function componentsRender(page, prop) {
  switch (page) {
    case 1:
      return <Profile />;
      break;

    case 2:
      return <Submit />;
      break;

    default:
      return <Profile properties={prop} />;
      break;
  }
}
const Dashboard = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [components, setComponent] = useState(null);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    requestprops();
  }, []);

  async function requestprops() {
    let token;

    if (window !== undefined) {
      token = localStorage.getItem("userToken");
      console.log(`token is here ${token}`);
    }

    let res = await fetch("http://localhost:8045/userProps", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bear ${token}`,
      },
    });

    let responses = await res.json();

    setProperties(responses.houses);
  }

  return (
    <AuthRoute>
      <div
        style={{ backgroundColor: "#f6f6f6", height: "100%", display: "flex" }}
      >
        <Box
          height="100%"
          sx={{
            "& .pro-sidebar-inner": {
              background: `${colors.primary[400]} !important`,
            },
            "& .pro-icon-wrapper": {
              backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
              padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
              color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
              color: "#6870fa !important",
            },
          }}
        >
          <Sidebar
            defaultCollapsed={isCollapsed}
            always
            backgroundColor="#0b2a49"
          >
            <Menu iconShape="square">
              {/* LOGO AND MENU ICON */}
              <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: "10px 0 20px 0",
                  color: colors.grey[100],
                }}
              >
                {!isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                  >
                    <IconButton
                      color="white"
                      onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
                )}
              </MenuItem>

              {!isCollapsed && (
                <Box mb="25px">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      alt="profile"
                      width="100px"
                      height="100px"
                      src="/favicon.ico"
                      style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{ m: "10px 0 0 0", color: "#0098e4" }}
                    >
                      {/* {user.First_name} */}
                    </Typography>
                    <Typography variant="h6" color="white">
                      Operational Manager
                    </Typography>
                  </Box>
                </Box>
              )}

              <Box height="190vh" paddingLeft={isCollapsed ? undefined : "10%"}>
                <Item
                  title="Dashboard"
                  to="/userDashboard"
                  icon={<HomeOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  components={1}
                  setComponent={setComponent}
                />

                {/* <Typography variant="h6" color="grey" sx={{ m: "15px 0 5px 20px" }}>
              Data
            </Typography> */}
                <Item
                  title="Add Properties"
                  to="#"
                  icon={<RoofingIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  isCollapsed={isCollapsed}
                  components={2}
                  setComponent={setComponent}
                />
                {/* <Item
              title="View Properties"
              to="/userDashboard/property"
              icon={<VisibilityIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

                <Item
                  title="Profile "
                  to="#"
                  icon={<PersonOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  setComponent={setComponent}
                />
                <Item
                  title="Calendar"
                  to="#"
                  icon={<CalendarTodayOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  setComponent={setComponent}
                />

                <Typography
                  variant="h6"
                  color={colors.grey[400]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Charts
                </Typography>
                <Item
                  title="Bar Chart"
                  to="#"
                  icon={<BarChartOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  setComponent={setComponent}
                />
                <Item
                  title="Pie Chart"
                  to="#"
                  icon={<PieChartOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  setComponent={setComponent}
                />
                <Item
                  title="Line Chart"
                  to="#"
                  icon={<TimelineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  setComponent={setComponent}
                />
              </Box>
            </Menu>
          </Sidebar>
        </Box>
        <div style={{ marginLeft: "auto", flex: 1 }}>
          <ButtonAppBar />
          <Box
            paddingBottom="1%"
            paddingTop="1%"
            paddingLeft="3%"
            paddingRight="3%"
          >
            <Head title={selected} />
          </Box>
          <Box>{componentsRender(components, properties)}</Box>
        </div>
      </div>
    </AuthRoute>
  );
};

export default Dashboard;
