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

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Padding } from "@mui/icons-material";

const theme = createTheme();

export default function searchForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let fname = data.get("fname");
    let lname = data.get("lname");
    let college = data.get("college");
    let position = data.get("position");
    let year = new Date();
    year = year.getFullYear();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className={styles.searchform} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{ color: "black", paddingTop: "3%" }}
          >
            Search Properties
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="fname"
              label="City"
              name="fname"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              id="lname"
              label="Type"
              name="lname"
              autoComplete="lname"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              id="pos"
              label="Status"
              name="position"
              autoComplete="pos"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, pt: 1, pb: 1, background: "#0000ff" }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
