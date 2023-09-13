import Sidebar from "@/components/userSide";
import TableGrid from "@/components/tablegrid";
import { Box, Button, Grid, Typography } from "@mui/material";
import ButtonAppBar from "@/components/common/navbar";
import Head from "@/components/common/dashboard/ header";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.scss";

const MyProp = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    requestprops();
  }, []);

  async function requestprops() {
    let token = window.localStorage.getItem("token");
    console.log("hey");

    let res = await fetch("http://localhost:8045/userProps", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bear ${token}`,
      },
    });

    let responses = await res.json();
    console.log(responses.houses);
    setProperties(responses.houses);
  }

  return (
    <Box style={{ display: "flex" }}>
      <Box style={{ flex: 1, marginLeft: "auto" }}>
        <ButtonAppBar />
        <Head title="MY PROPERTIES" subtittle="Voila props" />
        {/* <TableGrid /> */}
        <Box className={styles.userDashoardContainer} color="white">
          <Box style={{ paddingTop: "2%", paddingBottom: "2%" }}>
            {properties.map((c, index) => {
              return (
                <div
                  style={{
                    paddingTop: "1%",
                    marginLeft: "5%",
                    marginRight: "5%",
                    backgroundColor: "white",
                  }}
                  key={index}
                >
                  <Grid container spacing={1} margin={2}>
                    <Grid item xs={12} md={6}>
                      <div></div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box color="black">
                        <Box>
                          <Typography variant="h6">
                            {`${c.City} - ${c.Street}`}
                          </Typography>
                        </Box>

                        <Box>{c.Title}</Box>

                        <Box>{c.Parking}</Box>
                        <Box>
                          <Button
                            style={{
                              backgroundColor: "green",
                              color: "white",
                              padding: "1%",
                            }}
                          >
                            Manage
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                    {/* <Grid item xs={12} md={3}>
                      <Box
                        display="flex"
                        justifyContent="center"
                        style={{
                          paddingTop: "5%",
                          paddingBottom: "5%",
                          backgroundColor: " #060f36",
                          height: "80px",
                        }}
                      >
                        <Button
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            padding: "4%",
                          }}
                        >
                          Manage
                        </Button>
                      </Box>
                    </Grid> */}
                  </Grid>
                </div>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyProp;
