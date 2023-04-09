import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { useEffect, useState } from "react";
//import Card from "@/components/houseCard";
import Footer from "@/components/footer";
import {
  Button,
  Grid,
  Typography,
  Box,
  TextField,
  Container,
  cardActionAreaClasses,
} from "@mui/material";
import SearchForm from "@/components/homeSearchForm";
import Card from "@/components/houseCard";
import ButtonAppBar from "@/components/navbar";

const Properties = () => {
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  function handleClick() {
    console.log("here here");
  }

  function handleSubmit() {}

  useEffect(() => {
    requestProperty();
  }, []);

  async function requestProperty() {
    setLoading(true);
    try {
      let res = await fetch("http://localhost:8045/allPropeties", {
        method: "GET",
      });
      setTimeout(() => {
        setLoading(false);
      }, 1000);

      res = await res.json();
      setProperties(res.properties);

      console.log(res.properties);
    } catch (error) {
      console.log(error);
    }
  }
  const card = [1, 2, 2, 3];

  return (
    <Box>
      <ButtonAppBar />
      {/* <Box className={styles.testColor}></Box> */}
      <Box className={styles.property}>
        <Box paddingTop="7%" paddingBottom="5%" color="black">
          <Typography variant="h4">Search</Typography>
        </Box>
        <Container className={styles.properySearch}>
          <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="fname"
                      label="City"
                      name="fname"
                      autoComplete="name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="fname"
                      label="Rent"
                      name="fname"
                      autoComplete="name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="fname"
                      label="City"
                      name="fname"
                      autoComplete="name"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="fname"
                      label="City"
                      name="fname"
                      autoComplete="name"
                      autoFocus
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box paddingTop="3.5%">
                  <button
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      borderRadius: "4px",
                    }}
                    className={styles.btnSearch}
                  >
                    Search
                  </button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>

        <Box className={styles.allProperties}>
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h4"> Fetching feeds.....</Typography>
            </Box>
          ) : (
            <Grid container spacing={1} rowSpacing={6}>
              {properties.map((c) => {
                return (
                  <Grid item>
                    <Card
                      id={c._id}
                      stage={loading}
                      title={c.Title}
                      location={c.City}
                      street={c.Street}
                      price={c.Price}
                    />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Properties;
