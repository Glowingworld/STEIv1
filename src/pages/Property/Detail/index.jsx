import ButtonAppBar from "@/components/common/navbar";
import {
  Box,
  cardActionAreaClasses,
  Grid,
  Typography,
  MenuItem,
  Paper,
  Card,
} from "@mui/material";
import {
  Container,
  Image,
  Textarea,
  Modal,
  LoadingOverlay,
  Button,
} from "@mantine/core";

import styles from "@/styles/Home.module.scss";
import Footer from "@/components/Footer/footer";
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
import { UserInfoActio } from "@/components/AgentCard/ index";
import { Checkoutpage } from "@/components/checkoutCards/card";
import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
//import Chat from "@/components/AgentCard/chat";

import Router from "next/router";
//import Image from "next/image";
import { useRouter } from "next/router";
import { IconMessage2, IconMessageBolt, IconSend } from "@tabler/icons-react";

const Detail = () => {
  const [opened, { close, toggle }] = useDisclosure();
  const [loading, setLoading] = useState(false);
  const card = [1, 2, 3];
  const [house, setHouse] = useState({});
  const [creator, setCreator] = useState({});
  const [imageurls, setImageArray] = useState([]);
  const [duration, setDuration] = useState();
  const car = [{}];
  const router = useRouter();
  let queryData = router.query;
  let id = queryData.id;
  console.log(` id - ${id}`);

  useEffect(() => {
    fetchSingleHouse();
  }, [id]);

  function handleTriggerModal(data) {
    console.log(`i am ${data}`);
  }

  function sendRequest() {}

  async function fetchSingleHouse() {
    try {
      setLoading(true);
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/singleProperty/${id}`,
        {
          method: "GET",
        }
      );

      res = await res.json();
      setHouse(res.post);
      console.log(res.post);
      console.log(res.post.Creator);
      setCreator(res.post.Creator);
      setImageArray([...res.post.imageUrls]);
      console.log(res.post.Creator);
      setLoading(false);

      //console.log(res.properties);
    } catch (error) {
      console.log(error);
    }
  }

  let images = [];

  if (imageurls !== undefined) {
    imageurls.map((image) => {
      images.push(`${process.env.NEXT_PUBLIC_URL}/images/${image}`);
    });
  }

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
          <Container size="xl">
            <Grid container spacing={1}>
              <Grid item xs={12} md={9}>
                <Box>
                  <Typography variant="h4">{house.Title}</Typography>
                </Box>
                <Box sx={{ color: " rgba(0, 0, 0, 0.5)" }}>
                  <MenuItem>
                    <PlaceIcon />
                    <Typography variant="h6">{house.City}</Typography>
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
                    {house.Price} Tsh
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
              {loading ? (
                <Skeleton height={500} radius="md" animate={true} />
              ) : (
                <Image src={images[0]} height={500} radius="md" />
              )}

              <Grid container spacing={1}>
                <Grid item md={6}>
                  {loading ? (
                    <Skeleton height={240} radius="md" animate={true} />
                  ) : (
                    <Image src={images[1]} height={240} radius="md" />
                  )}
                </Grid>
                <Grid item md={6}>
                  {loading ? (
                    <Skeleton height={240} radius="md" animate={true} />
                  ) : (
                    <Image src={images[2]} height={240} radius="md" />
                  )}
                </Grid>
                <Grid item md={6}>
                  {loading ? (
                    <Skeleton height={240} radius="md" animate={true} />
                  ) : (
                    <Image src={images[3]} height={240} radius="md" />
                  )}
                </Grid>
                <Grid item md={6}>
                  {loading ? (
                    <Skeleton height={240} radius="md" animate={true} />
                  ) : (
                    <Image src={images[4]} height={240} radius="md" />
                  )}
                </Grid>
              </Grid>
            </SimpleGrid>
          </Container>
        </section>
        <Container size="xl">
          <Box className={styles.propert} style={{ paddingTop: "3%" }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <Group pb="lg">
                  <Typography variant="h5">
                    Contact the <span style={{ color: "grey" }}>Agent</span>{" "}
                  </Typography>
                </Group>
                <Modal
                  radius="lg"
                  opened={opened}
                  onClose={close}
                  title={`Chat with ${
                    creator == null ? "Agent" : creator.First_name
                  }`}
                  centered
                  right={0}
                  size="md"
                >
                  <LoadingOverlay />
                  <Group p="sm" position="left">
                    <Skeleton
                      width={200}
                      height={50}
                      radius="md"
                      animate={true}
                    />
                  </Group>
                  <Group p="sm" position="right">
                    <Skeleton
                      width={150}
                      height={60}
                      radius="md"
                      animate={true}
                    />
                  </Group>
                  <Group p="sm" position="right">
                    <Skeleton
                      width={150}
                      height={70}
                      radius="md"
                      animate={true}
                    />
                  </Group>

                  <Textarea placeholder="Write your message here" size="sm" />
                </Modal>

                <UserInfoActio
                  name={creator == null ? null : creator.First_name}
                  job="Steir"
                  email={creator == null ? null : creator.Email}
                  avatar="/marenga.jpg"
                  triggerModal={toggle}
                />

                <Checkoutpage price={house.Price} />
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
                  <Typography>{house.Description}</Typography>
                </Box>
                <Box style={{ paddingBottom: "3%", paddingLeft: "3%" }}>
                  {card.map((c, index) => {
                    return (
                      <Grid
                        key={index}
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
                      {house.Umeme ? (
                        <MenuItem>
                          <PlaceIcon />
                          Electricity
                        </MenuItem>
                      ) : null}
                    </Grid>
                    <Grid item xs={12} md={4}>
                      {house.Fence ? (
                        <MenuItem>
                          <PlaceIcon />
                          Fence
                        </MenuItem>
                      ) : null}
                    </Grid>
                    <Grid item xs={12} md={4}>
                      {house.water ? (
                        <MenuItem>
                          <PlaceIcon />
                          Water
                        </MenuItem>
                      ) : null}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Detail;
