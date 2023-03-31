import {
  Box,
  Typography,
  MenuItem,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ButtonAppBar from "@/components/navbar";
import styles from "@/styles/Home.module.scss";
import { Container } from "@mui/system";
import Footer from "@/components/footer";
// import { CheckBox } from "@mui/icons-material";
export default function Login() {
  function handleSubmit() {}
  return (
    <Box>
      <ButtonAppBar />
      {/* <Box className={styles.testColor}></Box> */}
      <Box className={styles.property}>
        <Box paddingTop="3%" paddingBottom="2%" color="#191919">
          <Typography variant="h4">Login</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box>
            <Box
              display="flex"
              justifyContent="center"
              style={{ paddingBottom: "5%", color: "rgba(0, 0, 0, 0.5)" }}
            >
              <Typography variant="h5">Login</Typography>
            </Box>
            <Box>
              <Container
                style={{
                  height: "300px",
                  width: "500px",
                  borderTop: "3px solid #dee2e6",
                  borderBottom: "1px solid #dee2e6",
                }}
              >
                {/* <CssBaseline /> */}
                <Box component="form" onSubmit={handleSubmit} paddingTop="2%">
                  <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    id="Password"
                    type="password"
                    label="Password"
                    name="password"
                    autoComplete="password"
                    autoFocus
                  />

                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <Checkbox />
                      Remember me?
                    </Box>
                    <Box>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          mt: 3,
                          mb: 2,
                          pt: 1,
                          pb: 1,
                          background: "#0000ff",
                        }}
                      >
                        LOGIN
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
