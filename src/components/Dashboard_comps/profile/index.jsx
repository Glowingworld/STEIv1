import Sdebar from "@/components/userSide";
import Head from "@/components/common/dashboard/ header";
import ButtonAppBar from "@/components/common/navbar";
import { Sidebar, useProSidebar } from "react-pro-sidebar";
import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import PieCharts from "@/components/charts/pieCharts";
import BarChart from "@/components/charts/barCharts";
import CarouselCard from "@/components/manCard";
import Dashboard from "../../../pages/Dashboard";
import { Pagination } from "@mantine/core";
import { Skeleton } from "@mantine/core";
const Profile = (props) => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  let skel = [1, 1, 3, 3, 3, 3, 3, 3, 22, 3];
  const [selected, setSelected] = useState("");
  let properties = props.properties;
  return (
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
              {
                // loading || !userInfo ? (
                //   <Box
                //     // style={{ height: "90vh" }}
                //     display="flex"
                //     justifyContent="center"
                //     alignItems="center"
                //   >
                //     <Grid container spacing={2}>
                //       {skel.map((el, index) => {
                //         return (
                //           <Grid item xs={12} md={3} key={index}>
                //             <Skeleton height={250} animate={true} />
                //           </Grid>
                //         );
                //       })}
                //     </Grid>
                //   </Box>
                // ) : !userInfo ? (
                //       })}
                //     </Grid>
                //   </Box>
                // ) : !userInfo ? (

                properties !== undefined
                  ? properties.map((c, index) => {
                      return (
                        <Grid xs={4} key={index}>
                          <CarouselCard
                            id={c._id}
                            stage={loading}
                            title={c.Title}
                            location={c.City}
                            street={c.Street}
                            price={c.Price}
                          />
                        </Grid>
                      );
                    })
                  : null
              }
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
  );
};

export default Profile;
