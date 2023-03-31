import ButtonAppBar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Box,
  Typography,
  Container,
  TextField,
  Checkbox,
  Button,
  Grid,
} from "@mui/material";
import styles from "@/styles/Home.module.scss";

const Submit = () => {
  function handleSubmit() {}

  return (
    <Box className={styles.submit} paddingBottom="10%">
      <ButtonAppBar />
      <Box className={styles.submit}>
        <Box className={styles.propert}>
          <Box paddingTop="7%" paddingBottom="5%" color="black">
            <Typography variant="h4">Submit Property</Typography>
          </Box>

          <Box paddingTop="2%" sx={{ color: " rgba(0, 0, 0, 0.5)" }}>
            <Typography variant="h5">Basic Information</Typography>
          </Box>
          <Box>
            <Container
              style={{
                height: "100%",
                width: "100%",
                borderTop: "3px solid #dee2e6",
              }}
            >
              <Box component="form" onSubmit={handleSubmit} paddingTop="2%">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="title"
                      label="Title"
                      name="title"
                      type="text"
                      autoFocus
                    />
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
                    <TextField
                      margin="normal"
                      id="span"
                      label="City"
                      name="span"
                      type="text"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      id="span"
                      label="District"
                      name="span"
                      type="text"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      id="span"
                      label="Street"
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
                  <Typography variant="h5">Gallery</Typography>
                </Box>
                <Box paddingBottom="3%">
                  <hr color="#dee2e6"></hr>
                </Box>

                <Box
                  style={{ height: "400px", backgroundColor: "burlywood" }}
                ></Box>

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

                <TextField
                  margin="normal"
                  id="span"
                  label="Descriptions"
                  name="span"
                  type="text"
                  autoFocus
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
