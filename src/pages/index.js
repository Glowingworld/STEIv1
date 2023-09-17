import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { useState } from "react";
import ButtonAppBar from "@/components/common/navbar";
import Footer from "@/components/Footer/footer";
import { Button, Grid, Typography, Box } from "@mui/material";
import SearchForm from "@/components/homeSearchForm";
//import Card from "@/components/houseCard";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import CarouselCard from "@/components/manCard";
import CardWithIcon from "@/components/iconwithCard";
import KeyIcon from "@mui/icons-material/Key";
import DoorbellIcon from "@mui/icons-material/Doorbell";
import AccessibleIcon from "@mui/icons-material/Accessible";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TrainIcon from "@mui/icons-material/Train";
import PowerIcon from "@mui/icons-material/Power";
import { Train } from "@mui/icons-material";
import {
  Icon24Hours,
  Icon3dRotate,
  IconArrowAutofitRight,
  IconArrowRight,
  IconBrandLine,
  IconLine,
  IconLineDashed,
  IconLineDotted,
  IconLineHeight,
} from "@tabler/icons-react";
import { Card, Container, Group, Text, UnstyledButton } from "@mantine/core";
import { FeaturesCards } from "@/components/features";
import { Fade } from "react-reveal";
const inter = Inter({ subsets: ["latin"] });
const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Box className={styles.main}>
      <ButtonAppBar />
      <Box className={styles.firstsection}>
        <Box className={styles.insideFirstSection}>
          <Grid container spacing={1} rowSpacing={6}>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                paddingTop: "8%",
              }}
            >
              <Box>
                <img src="/wordmark.svg" className={styles.logo} />
              </Box>
              <Box className={styles.fontOne}>
                Hey <span>&#128075;</span>
                <TypewriterComponent
                  options={{
                    strings: ["'How about staying with us!'"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
          </Grid>
        </Box>
      </Box>
      <Box className={styles.formPosition}>
        <SearchForm />
      </Box>

      <Container size="xl">
        <Group
          position="left"
          style={{
            paddingTop: "20%",
          }}
        >
          <Text pt="md">POPULAR</Text>
        </Group>
        <Group pb="lg" position="apart">
          <Text fz={24} fw={500} py="md">
            Our Popular Residence
          </Text>

          <Link href="/Property">
            <UnstyledButton className={styles.btn}>
              <Group>
                <Text>Explore more</Text>
                <IconArrowRight />
              </Group>
            </UnstyledButton>
          </Link>
        </Group>

        <Box paddingBottom="10px">
          <Grid container spacing={4} rowSpacing={6}>
            <Grid item xs={12} md={4}>
              <CarouselCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <CarouselCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <CarouselCard />
            </Grid>
          </Grid>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          style={{ paddingTop: "5%" }}
        ></Box>
      </Container>
      <Box className={styles.features}>
        <Container size="xl">
          <Box display="flex" justifyContent="start">
            <Typography
              style={{
                backgroundolCor: "#f6f6f6",
                paddingTop: "10%",
                paddingBottom: "4%",
                fontWeight: "300",
              }}
              variant="h4"
            >
              <span style={{ color: "#f4a261" }}>WHY</span> STAYING WITH US ?
            </Typography>
          </Box>

          <Box style={{ paddingBottom: "5%" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <Fade left duration={2000}>
                  <CardWithIcon
                    color="#d8e2dc"
                    icon={<Icon3dRotate />}
                    title="Fast and secure"
                    desc="Find your perfect place and book it within minutes through our secure platform."
                  />
                </Fade>
              </Grid>
              <Grid xs={12} item md={3}>
                <Fade left duration={1500}>
                  <CardWithIcon
                    color="#f2e0ce"
                    title="Visited For You"
                    icon={<DoorbellIcon />}
                    desc="We have visited nearly 1800 rooms for you! When a viewing has been carried out you will see it indicated on the listing."
                  />
                </Fade>
              </Grid>
              <Grid item xs={12} md={3}>
                <Fade left duration={1000}>
                  <CardWithIcon
                    color="#ffcad4"
                    title="All Included"
                    icon={<PowerIcon />}
                    desc="All Bills, Linen, Kitchen and Laundry facilities are included in the rent."
                  />
                </Fade>
              </Grid>
              <Grid item xs={12} md={3}>
                <Fade left duration={500}>
                  <CardWithIcon
                    color="#9dc9f2"
                    icon={<TrainIcon />}
                    title="Fair and Fixed Rent"
                    desc="Affordable rooms only and the rent can't be increased during your stay."
                  />
                </Fade>{" "}
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Box display="flex" justifyContent="start">
              <Typography
                style={{
                  backgroundolCor: "#f6f6f6",
                  paddingTop: "10%",
                  paddingBottom: "3%",
                  fontWeight: "300",
                }}
                variant="h4"
              >
                <span style={{ color: "#f4a261" }}>HOW</span> IT WORKS?
              </Typography>
            </Box>
            <Group position="center">
              <Grid container spacing={2}>
                <Fade left duration={2000}>
                  <Grid item xs={12}>
                    <FeaturesCards />
                  </Grid>
                </Fade>
              </Grid>
            </Group>
          </Box>
          <Box display="flex" justifyContent="start">
            <Typography
              style={{
                backgroundolCor: "#f6f6f6",
                paddingTop: "10%",
                paddingBottom: "4%",
                fontWeight: "300",
              }}
              variant="h5"
            >
              <span style={{ color: "#f4a261" }}> WHERE</span> OUR GUESTS WORK?
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container
        style={{ backgroundColor: "", borderRadius: "8px" }}
        mb="xl"
        pb="xl"
        size="xl"
      >
        <Box>
          <Group position="center" pt="lg">
            <Typography className={styles.fontthree} variant="h4">
              Have some houses to post?
            </Typography>
          </Group>
          <Box display="flex" justifyContent="center" paddingTop="2%">
            <Typography className={styles.fontfour}>
              Upload your house here
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            paddingTop="5%"
            paddingBottom="5%"
          >
            <button
              className={styles.btn}
              style={{ backgroundColor: "black", color: "white" }}
            >
              <Link href="/Property/Submit">Submit your own property</Link>
            </button>
          </Box>
        </Box>
        <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
          <span className="opacity-0">
            <svg
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                fill="#3056D3"
                stroke="#3056D3"
                strokeWidth="0.4"
              />
            </svg>
          </span>
        </div>
      </Container>

      <div>
        <Footer />
      </div>
    </Box>
  );
};

export default Home;
