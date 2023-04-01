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
import { useState } from "react";
// import { CheckBox } from "@mui/icons-material";
export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    let data = new FormData(event.currentTarget);
    let email = data.get("email");
    let password = data.get("password");

    await fetch("http://localhost:8045/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.status);
        setTimeout(() => setLoading(false), 1000);

        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  let loginPage = (
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
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.value);
                    }}
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.value);
                    }}
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

  let loadingBox = (
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
        <Typography variant="h4">Login....</Typography>
      </Box>
    </Box>
  );

  return <Box className={styles.main}>{loading ? loadingBox : loginPage}</Box>;
}
