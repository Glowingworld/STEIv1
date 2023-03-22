import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { useState } from "react";
import ButtonAppBar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button, Grid, Typography, Box } from "@mui/material";
import SearchForm from "@/components/homeSearchForm";
import Card from "@/components/houseCard";

const inter = Inter({ subsets: ["latin"] });
const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Box className={styles.main}>
      <ButtonAppBar />
      <Box className={styles.firstsection}>
        <Box className={styles.insideFirstSection}>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                paddingTop: "10%",
              }}
            >
              <Box>
                {/* <Typography className={styles.fontOne} variant="h2">
                  STEI
                </Typography> */}
                <img src="/wordmark.svg" width="50%" />
              </Box>
              <Box>
                <Typography className={styles.fonttwo} variant="h4">
                  <i>" How about staying with us "</i>
                </Typography>
              </Box>
              <Box style={{ paddingTop: "5%" }}>
                <button className={styles.btn} style={{ borderRadius: "2px" }}>
                  Show properties
                </button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <SearchForm />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className={styles.testColor}></Box>
      <Box className={styles.secondSection}>
        <Box className={styles.secondSectionContents}>
          <Box style={{ paddingBottom: "6%" }}>
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
                Featured Properties
              </Typography>
            </Box>

            <Grid container spacing={1} rowSpacing={2}>
              <Grid item>
                <Card />
              </Grid>
              <Grid item>
                <Card />
              </Grid>
              <Grid item>
                <Card />
              </Grid>
              <Grid item>
                <Card />
              </Grid>
            </Grid>
            <Box
              display="flex"
              justifyContent="center"
              style={{ paddingTop: "3%" }}
            >
              <button className={styles.btn}>Show All properties</button>
            </Box>
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
                Submit your own property
              </button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
