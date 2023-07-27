import Sdebar from "@/components/userSide";
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
const Dashboard = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const [selected, setSelected] = useState("");
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    requestprops();
  }, []);

  async function requestprops() {
    let token = window.localStorage.getItem("token");

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
        style={{ backgroundColor: "#f6f6f6", height: "100vh", display: "flex" }}
      >
        <Sdebar />
        <div style={{ marginLeft: "auto", flex: 1 }}>
          <ButtonAppBar />
          <Box
            paddingBottom="3%"
            paddingTop="3%"
            paddingLeft="3%"
            paddingRight="3%"
          >
            <Head title="Dashboard" subtittle="voila dashboard" />
          </Box>

          <Box paddingLeft="4%" paddingRight="4%">
            <Grid container spacing={1} rowSpacing={2} paddingBottom="2%">
              <Grid
                item
                xs={12}
                md={8}
                style={{
                  backgroundColor: "white",
                }}
              >
                <BarChart />
              </Grid>

              <Grid item xs={12} md={4} style={{ paddingLeft: "5%" }}>
                <Box>
                  <PieCharts />
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={1} paddingTop="10px">
              <Grid
                item
                xs={12}
                md={8}
                style={{
                  backgroundColor: "white",
                }}
              >
                <Box
                  style={{
                    paddingLeft: "5%",
                    paddingTop: "1%",
                    paddingBottom: "1%",
                  }}
                >
                  <Typography variant="h6">Our Property</Typography>
                </Box>
                <Box
                  paddingBottom="1%"
                  paddingLeft="2%"
                  paddingRight="2%"
                  paddingTop="2%"
                >
                  <Grid container>
                    {properties.map((prop, index) => {
                      return (
                        <Grid xs={4} key={index}>
                          <NCard title={prop.Title} price={prop.Price} />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs={12} md={4} style={{ paddingLeft: "5%" }}>
                <Box>
                  <PieCharts />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </AuthRoute>
  );
};

export default Dashboard;
