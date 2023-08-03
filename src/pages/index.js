import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { useState } from "react";
import ButtonAppBar from "@/components/navbar";
import Footer from "@/components/footer";
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
import { Icon24Hours, Icon3dRotate } from "@tabler/icons-react";
import { Card } from "@mantine/core";
import { FeaturesCards } from "@/components/features";
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
      {/* <Box className={styles.testColor}></Box> */}
      <Box className={styles.secondSection}>
        <Box className={styles.secondSectionContents}>
          <Box style={{ paddingBottom: "" }}>
            <Box
              display="flex"
              justifyContent="center"
              className={styles.features}
            >
              <Typography
                style={{
                  backgroundolCor: "#f6f6f6",
                  paddingTop: "5%",
                  paddingBottom: "4%",
                  fontWeight: "300",
                  fontSize: "1.75rem",
                }}
              >
                Featured
              </Typography>
            </Box>
            <Box paddingBottom="10px">
              <Grid container spacing={4} rowSpacing={6}>
                <Grid item xs={12} md={6}>
                  <CarouselCard />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CarouselCard />
                </Grid>
              </Grid>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              style={{ paddingTop: "5%" }}
            >
              <button className={styles.btn}>
                <Link href="/Property">Show All properties</Link>
              </button>
            </Box>
          </Box>
          <Box>
            <Box
              display="flex"
              justifyContent="start"
              className={styles.features}
            >
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
                  <CardWithIcon
                    color="#d8e2dc"
                    icon={<Icon3dRotate />}
                    title="Fast and secure"
                    desc="Find your perfect place and book it within minutes through our secure platform."
                  />
                </Grid>
                <Grid xs={12} item md={3}>
                  <CardWithIcon
                    color="#f2e0ce"
                    title="Visited For You"
                    icon={<DoorbellIcon />}
                    desc="We have visited nearly 1800 rooms for you! When a viewing has been carried out you will see it indicated on the listing."
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <CardWithIcon
                    color="#ffcad4"
                    title="All Included"
                    icon={<PowerIcon />}
                    desc="All Bills, Linen, Kitchen and Laundry facilities are included in the rent."
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <CardWithIcon
                    color="#9dc9f2"
                    icon={<TrainIcon />}
                    title="Fair and Fixed Rent"
                    desc="Affordable rooms only and the rent can't be increased during your stay."
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="start"
            className={styles.features}
          >
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
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FeaturesCards />
              </Grid>
            </Grid>
          </Box>
          <Box
            display="flex"
            justifyContent="start"
            className={styles.features}
          >
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

          <Box className={styles.secondSectionInsideContents}>
            <Box display="flex" justifyContent="center" paddingTop="5%">
              <Typography className={styles.fontthree} variant="h4">
                Have some House for sell/rent?
              </Typography>
            </Box>
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
          <div style={{ backgroundColor: "brown" }}>
            <div
              id="particles-js"
              color="#ffffff"
              particleopacity="0.7"
              linescolor="#ffffff"
              particlesnumber="100"
              shapetype="circle"
              particlesize="5"
              lineswidth="2"
              linelinked="true"
              lineopacity="0.4"
              linesdistance="150"
              movespeed="6"
              hovereffect="true"
              hovermode="grab"
              clickeffect="true"
              clickmode="push"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <canvas
                className="particles-js-canvas-el"
                style={{
                  width: "1044",
                  height: "1036",
                  style: "width: 100%; height: 100%;",
                }}
              ></canvas>
            </div>
          </div>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
