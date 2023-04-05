import ButtonAppBar from "@/components/navbar";
import Footer from "@/components/footer";
import FileUploader from "@/components/fileUploader";
import {
  Box,
  Typography,
  Container,
  TextField,
  Checkbox,
  Button,
  Grid,
  FormControl,
  MenuItem,
  FormHelperText,
  InputLabel,
  Select,
  TextareaAutosize,
} from "@mui/material";
import styles from "@/styles/Home.module.scss";
import { useState, useEffect } from "react";
import getRegionsLocations from "@/components/hooks";
import getWardLocations from "@/components/streethook";

const Submit = () => {
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [districts] = getRegionsLocations(city);
  const [street, setStreet] = useState("");
  const [streets] = getWardLocations(district);
  console.log(districts);
  function handleSubmit() {}

  return (
    <Box className={styles.submit} paddingBottom="10%">
      <ButtonAppBar />
      <Box className={styles.submit}>
        <Box className={styles.propert}>
          <Box>
            <Container
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <Box paddingTop="7%" paddingBottom="5%" color="black">
                <Typography variant="h6">Details</Typography>
              </Box>
              <Box component="form" onSubmit={handleSubmit} paddingTop="2%">
                <Box paddingTop="2%" sx={{ color: " rgba(0, 0, 0, 0.5)" }}>
                  <Typography variant="h5">Basic Information</Typography>
                </Box>
                <Box paddingBottom="3%">
                  <hr color="#dee2e6"></hr>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl sx={{ mt: 2, minWidth: "100%" }}>
                      <InputLabel id="city">CITY</InputLabel>
                      <Select
                        fullWidth
                        labelId="city"
                        id="slage"
                        value={city}
                        label="City"
                        onChange={(e) => setCity(e.target.value)}
                      >
                        <MenuItem value={"Daressalaam"}>Dar-es-Salaam</MenuItem>
                        <MenuItem value={"Arusha"}>Arusha</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="price"
                      label="Price"
                      name="prices"
                      type="number"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="span"
                      label="For(Annual/Monthly)"
                      name="span"
                      type="text"
                      autoFocus
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="title"
                      label="Rooms"
                      name="title"
                      type="text"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="price"
                      label="Type"
                      name="prices"
                      type="number"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="span"
                      label="Status"
                      name="span"
                      type="text"
                      autoFocus
                    />
                  </Grid>
                </Grid>
                <Box
                  paddingTop="7%"
                  paddingBottom="2%"
                  sx={{ color: " rgba(0, 0, 0, 0.5)" }}
                >
                  <Typography variant="h5">Location</Typography>
                </Box>
                <Box paddingBottom="3%">
                  <hr color="#dee2e6"></hr>
                </Box>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <FormControl sx={{ mt: 2, minWidth: "30%" }}>
                      <InputLabel id="city">CITY</InputLabel>
                      <Select
                        labelId="city"
                        id="slage"
                        value={city}
                        label="City"
                        onChange={(e) => setCity(e.target.value)}
                      >
                        <MenuItem value={"Daressalaam"}>Dar-es-Salaam</MenuItem>
                        <MenuItem value={"Arusha"}>Arusha</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl sx={{ mt: 2, minWidth: "30%" }}>
                      <InputLabel id="DIS">DISTRICT</InputLabel>
                      <Select
                        labelId="DIS"
                        id="DIS"
                        value={district}
                        label="DISTRICT"
                        onChange={(e) => setDistrict(e.target.value)}
                      >
                        {districts.map((dis) => {
                          return <MenuItem value={dis}>{dis}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl sx={{ mt: 2, minWidth: "30%" }}>
                      <InputLabel id="ST">STREET</InputLabel>
                      <Select
                        labelId="ST"
                        id="ST"
                        value={street}
                        label="STREET"
                        onChange={(e) => setStreet(e.target.value)}
                      >
                        {streets.map((dis) => {
                          return <MenuItem value={dis}>{dis}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Box
                  paddingTop="7%"
                  paddingBottom="2%"
                  sx={{ color: " rgba(0, 0, 0, 0.5)" }}
                >
                  <Typography variant="h5">Gallery</Typography>
                </Box>
                <Box paddingBottom="3%">
                  <hr color="#dee2e6"></hr>
                </Box>
                <Box>
                  <FileUploader />
                </Box>

                <Box
                  paddingTop="7%"
                  paddingBottom="2%"
                  sx={{ color: " rgba(0, 0, 0, 0.5)" }}
                >
                  <Typography variant="h5">Addition Informations</Typography>
                </Box>
                <Box paddingBottom="3%">
                  <hr color="#dee2e6"></hr>
                </Box>
                <TextareaAutosize
                  aria-label=""
                  margin="normal"
                  minRows={6}
                  placeholder="Description"
                  style={{
                    width: "30%",
                    padding: "1%",
                    border: "1px solid #bdbdbd",
                  }}
                />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="title"
                      label="Bathrooms"
                      name="title"
                      type="number"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="price"
                      label="Bedrooms"
                      name="prices"
                      type="number"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="span"
                      label="Parking?"
                      name="span"
                      type="text"
                      autoFocus
                    />
                  </Grid>
                </Grid>
                <Box
                  paddingTop="7%"
                  paddingBottom="2%"
                  sx={{ color: " rgba(0, 0, 0, 0.5)" }}
                >
                  <Typography variant="h7">Features</Typography>
                </Box>
                <Grid container>
                  <Grid item xs={12} md={4}>
                    <Box>
                      <Checkbox />
                      Electicity
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box>
                      <Checkbox />
                      Water
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box>
                      <Checkbox />
                      Fence
                    </Box>
                  </Grid>
                </Grid>
                <Box paddingBottom="3%" paddingTop="3%">
                  <hr color="#dee2e6"></hr>
                </Box>
                <Box display="flex" justifyContent="end">
                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        marginLeft: 3,
                        paddingLeft: 3,
                        paddingRight: 3,
                        mt: 3,
                        mb: 2,
                        pt: 1,
                        pb: 1,
                        background: "#0000ff",
                      }}
                    >
                      SUBMIT
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Submit;
