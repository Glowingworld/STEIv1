import ButtonAppBar from "@/components/navbar";
import Footer from "@/components/footer";
import FileUploader from "@/components/fileUploader";
import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { Delete } from "@mui/icons-material";
import axios from "axios";

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
  CircularProgress,
} from "@mui/material";
import styles from "@/styles/Home.module.scss";
import { useState, useEffect } from "react";
import getRegionsLocations from "@/components/hooks";
import getWardLocations from "@/components/streethook";
import Sidebar from "@/components/userSide";

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
  const [file, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileTypes = ["JPG", "PNG", "GIF"];
  const theme = useMantineTheme();
  let test = [1, 1, 32, 3];

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(`inside the submit ${file[0].name}`);
    const data = new FormData(event.currentTarget);
    let umeme = data.get("umeme");
    let fence = data.get("fence");
    let water = data.get("water");
    let description = data.get("descript");
    let bedrooms = data.get("beds");
    let bathrooms = data.get("baths");
    let rooms = data.get("rooms");
    let price = data.get("price");
    console.log(description);
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("district", district);
    formdata.append("street", street);
    formdata.append("model", model);
    formdata.append("duration", duration);
    formdata.append("parking", parking);
    formdata.append("city", city);
    formdata.append("price", price);
    formdata.append("purpose", status);
    formdata.append("rooms", rooms);
    formdata.append("bathrooms", bathrooms);
    formdata.append("water", water);
    formdata.append("fence", fence);
    formdata.append("umeme", umeme);
    formdata.append("bedrooms", bedrooms);
    file.forEach((fl) => {
      formdata.append("images", fl);
    });

    setLoading(true);
    try {
      let token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDQ4MzM4MzI0NTM1MmY1ZDk0Mzg1MWIiLCJpYXQiOjE2OTQzNDgyNzIsImV4cCI6MTY5NDQzNDY3Mn0.G_ooXMgEKfX7XW4fMsXPoabRuz1LWySWe6hZ-zZE3Sw";
      const response = await axios.post(
        "http://localhost:8045/feeds",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bear ${token}`,
          },
        }
      );
      setTimeout(() => setLoading(false), 500);

      console.log(response.data); // File upload success message
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box display="flex">
      {/* <div style={{ position: "fixed", left: 0, top: 0, height: "100vh" }}>
        <Sidebar />
      </div> */}

      <Box style={{ marginLeft: "auto", flex: 1, overflowY: "auto" }}>
        {" "}
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ height: "100vh" }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{
                background: "#f6f6f6",
                height: "300px",
                width: "600px",
                borderRadius: "4px",
                color: "darkblue",
              }}
            >
              <CircularProgress size={80} />
              <Box sx={{ paddingLeft: "3%" }}>
                <Typography variant="h4"></Typography>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box className={styles.submit} paddingBottom="10%">
            {/* <ButtonAppBar /> */}
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
                    <Box
                      component="form"
                      onSubmit={handleSubmit}
                      paddingTop="2%"
                    >
                      <Box
                        paddingTop="2%"
                        sx={{ color: " rgba(0, 0, 0, 0.5)" }}
                      >
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
                            name="price"
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
                                <MenuItem value={"3"}>
                                  {" "}
                                  After every 3 months
                                </MenuItem>
                                <MenuItem value={"6"}>
                                  After every 6 months
                                </MenuItem>
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
                              <MenuItem value={"Daressalaam"}>
                                Dar-es-Salaam
                              </MenuItem>
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
                              {districts.map((dis, index) => {
                                return (
                                  <MenuItem value={dis} key={index}>
                                    {dis}
                                  </MenuItem>
                                );
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
                              {streets.map((dis, index) => {
                                return (
                                  <MenuItem key={index} value={dis}>
                                    {dis}
                                  </MenuItem>
                                );
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
                        {/* <FileUploader /> */}

                        <Dropzone
                          onDrop={(files) => {
                            setFiles([...files, ...file]);
                            console.log("accepted files", files);
                          }}
                          onReject={(files) =>
                            console.log("rejected files", files)
                          }
                          maxSize={3 * 1024 ** 2}
                          accept={IMAGE_MIME_TYPE}
                          style={{
                            backgroundColor: "#f4f5f7",
                            paddingLeft: 70,
                            paddingRight: 70,
                          }}
                        >
                          <Group
                            position="center"
                            spacing="xl"
                            style={{
                              minHeight: rem(100),
                              pointerEvents: "none",
                            }}
                          >
                            <Dropzone.Accept>
                              <IconUpload
                                size="3.2rem"
                                stroke={1.5}
                                color={
                                  theme.colors[theme.primaryColor][
                                    theme.colorScheme === "dark" ? 4 : 6
                                  ]
                                }
                              />
                            </Dropzone.Accept>
                            <Dropzone.Reject>
                              <IconX
                                size="3.2rem"
                                stroke={1.5}
                                color={
                                  theme.colors.red[
                                    theme.colorScheme === "dark" ? 4 : 6
                                  ]
                                }
                              />
                            </Dropzone.Reject>

                            <div className="">
                              {file ? (
                                <div>
                                  <Text size="xl" color="dimmed" inline>
                                    Files uploaded
                                  </Text>
                                  <Text
                                    size="sm"
                                    color="dimmed"
                                    inline
                                    mt={7}
                                    mb={15}
                                  >
                                    Attach as many files as you like, each file
                                    should not exceed 5mb
                                  </Text>
                                  {file.map((el, index) => {
                                    return (
                                      <div
                                        className={styles.fileNames}
                                        key={index}
                                      >
                                        <Box
                                          display="flex"
                                          justifyContent="space-between"
                                        >
                                          <Box>
                                            <Text color="dimmed">
                                              {el.name + ""}
                                            </Text>
                                          </Box>
                                          <Box>
                                            <Button>
                                              <Delete />
                                            </Button>
                                          </Box>
                                        </Box>
                                      </div>
                                    );
                                  })}
                                </div>
                              ) : (
                                <div>
                                  <Text size="xl" color="dimmed" inline>
                                    Drag & Drop files here or click to select
                                    files
                                  </Text>
                                  <Text size="sm" color="dimmed" inline mt={7}>
                                    Attach as many files as you like, each file
                                    should not exceed 5mb
                                  </Text>
                                </div>
                              )}
                            </div>
                          </Group>
                        </Dropzone>
                      </Box>

                      <Box
                        paddingTop="7%"
                        paddingBottom="2%"
                        sx={{ color: " rgba(0, 0, 0, 0.5)" }}
                      >
                        <Typography variant="h5">
                          Addition Informations
                        </Typography>
                      </Box>
                      <Box paddingBottom="3%">
                        <hr color="#dee2e6"></hr>
                      </Box>
                      <TextareaAutosize
                        margin="normal"
                        minRows={6}
                        required
                        placeholder="Description"
                        name="descript"
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
                              <MenuItem value={"No"}>No</MenuItem>
                              <MenuItem value={"Yes"}>Yes</MenuItem>
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
            {/* <Footer /> */}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Submit;
