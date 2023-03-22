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
import ButtonAppBar from "@/components/navbar";

const AboutUs = () => {
  return (
    <Box>
      <ButtonAppBar />
      <Box className={styles.testColor}></Box>

      <Footer />
    </Box>
  );
};

export default AboutUs;
