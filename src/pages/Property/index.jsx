import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { useEffect, useState } from "react";
import { Skeleton } from "@mantine/core";
//import Card from "@/components/houseCard";
import Footer from "@/components/Footer/footer";
let skel = [1, 1, 1, 2, 1, 2, 1, 2, 12, 1, 2, 2, 1, 2, 2, 1, 2, 12, 2, 2];
import {
  Button,
  Grid,
  Typography,
  Box,
  TextField,
  Container,
  cardActionAreaClasses,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import SearchForm from "@/components/homeSearchForm";
import Card from "@/components/houseCard";
import CarouselCard from "@/components/manCard";
import ButtonAppBar from "@/components/common/navbar";

const Properties = () => {
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [range, setRange] = useState("");
  const [status, setStatus] = useState("");
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
        <Box paddingTop="3%" paddingBottom="1%" color="black">
          {/* <Typography variant="h4">Search</Typography> */}
        </Box>
        <Container className={styles.properySearch}>
          <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={4}>
                    <FormControl sx={{ mt: 2, minWidth: "100%" }}>
                      <InputLabel id="city">CITY</InputLabel>
                      <Select
                        required
                        labelId="city"
                        id="city"
                        value={city}
                        label="CITY"
                        onChange={(e) => setCity(e.target.value)}
                      >
                        <MenuItem value={"DSM"}>Dar-e-Salaam</MenuItem>
                        <MenuItem value={"AR"}>Arusha</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <FormControl sx={{ mt: 2, minWidth: "100%" }}>
                      <InputLabel id="status">PURPOSE</InputLabel>
                      <Select
                        required
                        labelId="status"
                        id="status"
                        value={status}
                        label="PURPOSE"
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                      >
                        <MenuItem value={"Rent"}>Rent</MenuItem>
                        <MenuItem value={"Sell"}>Sell</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    {status == "Rent" ? (
                      <FormControl sx={{ mt: 2, minWidth: "100%" }}>
                        <InputLabel id="range">PRICE RANGE</InputLabel>
                        <Select
                          required
                          labelId="range"
                          id="range"
                          value={range}
                          label="PRICE RANGE"
                          onChange={(e) => {
                            setRange(e.target.value);
                          }}
                        >
                          <MenuItem value={"40k"}>40K</MenuItem>
                          <MenuItem value={"100k"}>100K - 150K</MenuItem>
                        </Select>
                      </FormControl>
                    ) : (
                      <FormControl sx={{ mt: 2, minWidth: "100%" }}>
                        <InputLabel id="price">PRICE</InputLabel>
                        <Select
                          required
                          labelId="price"
                          id="price"
                          value={price}
                          label="PRICE"
                          onChange={(e) => {
                            setPrice(e.target.value);
                          }}
                        >
                          <MenuItem value={"50M"}>50M - 100M</MenuItem>
                          <MenuItem value={"20M"}>100M - 300M</MenuItem>
                          <MenuItem value={"20M"}>300M - 700M</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  </Grid>

                  <Grid item xs={12} md={4}></Grid>
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
            <Box
              // style={{ height: "90vh" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Grid container spacing={2}>
                {skel.map((el, index) => {
                  return (
                    <Grid item xs={12} md={3} key={index}>
                      <Skeleton height={250} animate={true} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          ) : (
            <Grid container spacing={1} rowSpacing={6}>
              {properties.map((c) => {
                return (
                  <Grid item xs={12} md={3} lg={3} key={c._id}>
                    <CarouselCard
                      id={c._id}
                      stage={loading}
                      title={c.Title}
                      location={c.City}
                      street={c.Street}
                      price={c.Price}
                      imageUrl={c.imageUrls}
                      Description={c.Description}
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
