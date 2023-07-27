"use client"; // this is a client component 👈🏽
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import styles from "@/styles/components.module.scss";
import {
  CircularProgress,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  Grid,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Padding } from "@mui/icons-material";
import { useState } from "react";

const theme = createTheme();

export default function searchForm() {
  const [City, setCity] = useState("");
  const [Type, setType] = useState("");
  const [Status, setStatus] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let fname = data.get("fname");
    let lname = data.get("lname");
    let college = data.get("college");
    let position = data.get("position");
    let year = new Date();
    year = year.getFullYear();
    setCity("");
    setStatus("");
    setType("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className={styles.searchform} component="main">
        {/* <CssBaseline /> */}
        <Box>
          <Typography
            component="h1"
            variant="h5"
            sx={{ color: "black", paddingTop: "3%", paddingBottom: "5%" }}
          >
            Find your Home
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <FormControl sx={{ minWidth: "100%" }}>
                  <InputLabel id="city">CITY</InputLabel>
                  <Select
                    fullWidth
                    labelId="city"
                    id="slage"
                    value={City}
                    label="City"
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <MenuItem value={10}>Dar-es-Salaam</MenuItem>
                    <MenuItem value={20}>Arusha</MenuItem>
                    <MenuItem value={30}>Mwanza</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl sx={{ minWidth: "100%" }}>
                  <InputLabel id="stat">STATUS</InputLabel>
                  <Select
                    fullWidth
                    labelId="stat"
                    id="sltype"
                    value={Status}
                    label="Status"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <MenuItem value={"appartment"}>Appartment</MenuItem>
                    <MenuItem value={"single room"}>Single room</MenuItem>
                    <MenuItem value={"Full house"}>Full house</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={12} item md={4}>
                <FormControl sx={{ minWidth: "100%" }}>
                  {" "}
                  <InputLabel id="type">TYPE</InputLabel>
                  <Select
                    fullWidth
                    labelId="type"
                    id="sltype"
                    value={Type}
                    label="Type"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <MenuItem value={"rent"}>Rent</MenuItem>
                    <MenuItem value={"sell"}>Sell</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid xs={12} item md={4}>
                <FormControl sx={{ minWidth: "100%" }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, pt: 1, pb: 1, background: "#0000ff" }}
                  >
                    Search
                  </Button>
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>With label + helper text</FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Without label</FormHelperText>
          </FormControl> */}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
