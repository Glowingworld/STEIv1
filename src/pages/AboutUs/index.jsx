import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { useState } from "react";
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
import ButtonAppBar from "@/components/common/navbar";

const Properties = () => {
  function handleSubmit() {}
  const card = [1, 2];
  return (
    <Box>
      <ButtonAppBar />
      <Box className={styles.testColor}></Box>
      <Box className={styles.property}>
        <Box paddingTop="7%" paddingBottom="5%" color="black">
          <Typography variant="h4">About Us</Typography>
        </Box>

        <Box className={styles.allProperties}>
          <Grid container spacing={1} rowSpacing={3}></Grid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Properties;
