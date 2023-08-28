import ButtonAppBar from "@/components/navbar";
import {
  Box,
  cardActionAreaClasses,
  Grid,
  Typography,
  MenuItem,
  Paper,
  Card,
} from "@mui/material";
import { useState } from "preact/hooks";
import styles from "@/styles/Home.module.scss";
import Footer from "@/components/footer";
import ImageCard from "@/components/imageCard";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { style } from "@mui/system";
import WifiIcon from "@mui/icons-material/Wifi";
import KeyIcon from "@mui/icons-material/Key";
import DoorbellIcon from "@mui/icons-material/Doorbell";
import AccessibleIcon from "@mui/icons-material/Accessible";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TrainIcon from "@mui/icons-material/Train";
import PowerIcon from "@mui/icons-material/Power";
import { Group } from "@mantine/core";
import { SimpleGrid, Skeleton } from "@mantine/core";
import { UserInfoActio } from "@/components/property/user/ index";
import { Checkoutpage } from "@/components/property/checkoutCards/card";

const Detail = () => {
  //const [loading, setLoading] = useState(false);
  const card = [1, 2, 3];
  const car = [{}];

  return (
    <Box style={{ paddingBottom: "0%" }}>
      <ButtonAppBar />
      <Box className={styles.detail}>
        <section
          style={{
            paddingTop: "5%",
            borderBottom: " 2px solid #e4e4e4",
          }}
        >
          <Box className={styles.propert}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={9}>
                <Box>
                  <Typography variant="h4">
                    Nyumba nzuri ya kupanga kwa familia
                  </Typography>
                </Box>
                <Box sx={{ color: " rgba(0, 0, 0, 0.5)" }}>
                  <MenuItem>
                    <PlaceIcon />
                    <Typography variant="h6">Arusha</Typography>
                  </MenuItem>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box paddingTop="3.5%">
                  <button
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      borderRadius: "4px",
                    }}
                    className={styles.btn}
                  >
                    3000000
                  </button>
                </Box>
              </Grid>
            </Grid>

            <SimpleGrid
              pt="lg"
              pb="md"
              cols={2}
              spacing="md"
              breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            >
              <Skeleton height={500} radius="md" animate={true} />
              <Grid container spacing={1}>
                <Grid item md={6}>
                  <Skeleton height={240} radius="md" animate={true} />
                </Grid>
                <Grid item md={6}>
                  <Skeleton height={240} radius="md" animate={true} />
                </Grid>
                <Grid item md={6}>
                  <Skeleton height={240} radius="md" animate={true} />
                </Grid>
                <Grid item md={6}>
                  <Skeleton height={240} radius="md" animate={true} />
                </Grid>
              </Grid>
            </SimpleGrid>
          </Box>
        </section>
        <section className={styles.secondDetail}>
          <Box className={styles.propert} style={{ paddingTop: "3%" }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <Group pb="lg">
                  <Typography variant="h5">
                    Contact the <span style={{ color: "grey" }}>Agent</span>{" "}
                  </Typography>
                </Group>

                <UserInfoActio
                  name="Julius marenga"
                  job="Steir"
                  email="marengajulius@gmail.com"
                  avatar="/marenga.jpg"
                />

                <Checkoutpage />
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{
                  paddingBottom: "5%",
                  borderBottom: "1px solid #dee2e6",
                }}
              >
                <Box style={{ paddingBottom: "3%", paddingLeft: "3%" }}>
                  <Typography variant="h5">Description</Typography>
                </Box>
                <Box
                  style={{
                    paddingBottom: "3%",
                    paddingLeft: "3%",
                    color: " rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis amet velit impedit autem pariatur magnam enim earum,
                    ipsam laudantium aperiam, dolor facere repellat consequuntur
                    fugiat labore est ipsum similique obcaecati?
                  </Typography>
                </Box>
                <Box style={{ paddingBottom: "3%", paddingLeft: "3%" }}>
                  {card.map((c) => {
                    return (
                      <Grid
                        container
                        spacing={1}
                        style={{
                          paddingBottom: "4%",
                        }}
                      >
                        <Grid item xs={12} md={6}>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            style={{
                              paddingBottom: "5%",
                              borderBottom: "1px solid #dee2e6",
                            }}
                          >
                            <Box>
                              <Typography>
                                <b>Category:</b>
                              </Typography>
                            </Box>
                            <Box>
                              <Typography>1</Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            style={{
                              paddingLeft: "2%",
                              paddingBottom: "5%",
                              borderBottom: "1px solid #dee2e6",
                            }}
                          >
                            <Box>
                              <Typography>
                                <b>Bathrooms:</b>
                              </Typography>
                            </Box>
                            <Box>
                              <Typography>1</Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Box>

                <Box
                  style={{
                    paddingBottom: "3%",
                    paddingLeft: "3%",
                  }}
                >
                  <Box style={{ paddingBottom: "5%" }}>
                    <Typography variant="h5">Features</Typography>
                  </Box>

                  <Box sx={{ color: " rgba(0, 0, 0, 0.5)" }}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={3}>
                        <Box>
                          <MenuItem>
                            <WifiIcon />
                            Wifi
                          </MenuItem>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Box>
                          <MenuItem>
                            <DoorbellIcon />
                            Door Bell
                          </MenuItem>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Box>
                          <MenuItem>
                            <LocalPhoneIcon />
                            Phone
                          </MenuItem>
                        </Box>
                      </Grid>
                      {/* <Grid item xs={12} md={3}>
                        <Box>
                          <MenuItem>
                            <TrainIcon />
                            Train
                          </MenuItem>
                        </Box>
                      </Grid> */}
                      <Grid item xs={12} md={3}>
                        <Box>
                          <MenuItem>
                            <PowerIcon />
                            230v power
                          </MenuItem>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Box>
                          <MenuItem>
                            <RestaurantIcon />
                            Nearby
                          </MenuItem>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Box>
                          <MenuItem>
                            <KeyIcon />
                            Secured Key
                          </MenuItem>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Box>
                          <MenuItem>
                            <PlaceIcon />
                            Menu icon
                          </MenuItem>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Box>
                          <MenuItem>
                            <AccessibleIcon />
                            Accessible
                          </MenuItem>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box></Box>
                </Box>

                <Box style={{ paddingBottom: "3%", paddingLeft: "3%" }}>
                  <Box style={{ paddingBottom: "5%" }}>
                    <Typography variant="h5">Features</Typography>
                  </Box>
                  <Grid
                    container
                    spacing={1}
                    sx={{ color: " rgba(0, 0, 0, 0.5)" }}
                  >
                    <Grid item xs={12} md={4}>
                      <MenuItem>
                        <PlaceIcon />
                        Electricity
                      </MenuItem>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <MenuItem>
                        <PlaceIcon />
                        Fence
                      </MenuItem>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <MenuItem>
                        <PlaceIcon />
                        Water
                      </MenuItem>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </section>
      </Box>

      <Footer />
    </Box>
  );
};

export default Detail;
