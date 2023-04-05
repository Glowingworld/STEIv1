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
  const [title, setTitle] = useState("");
  const [districts] = getRegionsLocations(city);
  const [street, setStreet] = useState("");
  const [streets] = getWardLocations(district);
  const [model, setModel] = useState("");
  const [status, setStatus] = useState("");
  const [duration, setDuration] = useState("");
  const [parking, setParking] = useState("");
  console.log(districts);
  function handleSubmit(event) {
    const data = new FormData(event.current.target);
  }

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
                    <TextField
                      fullWidth
                      margin="normal"
                      id="title"
                      placeholder="example Chumba (Master) kinapangishwa mbezi"
                      multiline
                      name="title"
                      type="Text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      error={title.length < 4 && title.length > 0}
                      aria-errormessage="ttile"
                      label="TITLE"
                      required
                      autoFocusz
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <FormControl sx={{ mt: 2, minWidth: "100%" }}>
                      <InputLabel id="status">PURPOSE</InputLabel>
                      <Select
                        required
                        labelId="status"
                        id="status"
                        value={status}
                        label="PURPOSE"
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <MenuItem value={"Rent"}>Rent</MenuItem>
                        <MenuItem value={"Sell"}>Sell</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      fullWidth
                      required
                      margin="normal"
                      id="price"
                      label="PRICE"
                      name="prices"
                      type="number"
                      autoFocus
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    {status == "Sell" ? (
                      <Box></Box>
                    ) : (
                      <FormControl sx={{ mt: 2, minWidth: "100%" }}>
                        <InputLabel id="duration">DURATION </InputLabel>
                        <Select
                          required
                          labelId="duration"
                          id="dur"
                          value={duration}
                          label="Price per (month/year)"
                          onChange={(e) => setDuration(e.target.value)}
                        >
                          <MenuItem value={"monthyl"}>Monthly</MenuItem>
                          <MenuItem value={"annually"}>Annually</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    {status == "Sell" ? (
                      <Box></Box>
                    ) : (
                      <FormControl sx={{ mt: 2, minWidth: "100%" }}>
                        <InputLabel id="model">MODEL</InputLabel>
                        <Select
                          required
                          labelId="model"
                          id="model"
                          value={model}
                          label="MODEL"
                          onChange={(e) => setModel(e.target.value)}
                        >
                          <MenuItem value={"1"}>Each month</MenuItem>
                          <MenuItem value={"3"}> After every 3 months</MenuItem>
                          <MenuItem value={"6"}>After every 6 months</MenuItem>
                          <MenuItem value={"12"}>
                            {" "}
                            After every 12 months
                          </MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      required
                      margin="normal"
                      id="room"
                      placeholder="example: 4 (vyumba vinne)"
                      name="rooms"
                      type="number"
                      label="ROOMS"
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
                        required
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
                        required
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
                        required
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
                      placeholder="example: 2"
                      margin="normal"
                      id="baths"
                      label="Bathrooms"
                      name="baths"
                      required
                      type="number"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      margin="normal"
                      required
                      placeholder="example: 4"
                      id="beds"
                      label="Bedrooms"
                      name="beds"
                      type="number"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl sx={{ mt: 2, minWidth: "100%" }}>
                      <InputLabel id="par">Parking?</InputLabel>
                      <Select
                        labelId="par"
                        id="par"
                        value={parking}
                        label="Parking?"
                        onChange={(e) => setParking(e.target.value)}
                      >
                        <MenuItem value={"no"}>No</MenuItem>
                        <MenuItem value={"yes"}>Yes</MenuItem>
                      </Select>
                    </FormControl>
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
                      <Checkbox name="umeme" />
                      Electicity
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box>
                      <Checkbox name="water" />
                      Water
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box>
                      <Checkbox name="fence" />
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
