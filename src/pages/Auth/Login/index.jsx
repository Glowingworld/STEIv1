/*useclient*/
import {
  Box,
  Typography,
  MenuItem,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from "next/router";
import ButtonAppBar from "@/components/common/navbar";
import styles from "@/styles/Home.module.scss";
import { Container } from "@mui/system";
import Footer from "@/components/footer";
import { useContext, useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import userContext from "@/components/utils/context";
import { signIn } from "next-auth/react";
import authFunction, { userLogin } from "../../../Features/auth/authAction";
import Router from "next/router";
import { LoadingOverlay } from "@mantine/core";
//import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  let errordata = router.query;
  let errorMessage = errordata["error "];

  useEffect(() => {}, []);

  async function handleSignin(e) {
    e.preventDefault();

    setLoading(true);
    let res = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    console.log(res);
    if (res.ok) {
      Router.push("/Dashboard");
    } else {
      Router.push(`/Auth/Login?error = ${res.error}`);
    }

    setLoading(false);
  }

  let loginPage = (
    <Box>
      <ButtonAppBar />
      {/* <Box className={styles.testColor}></Box> */}
      <Box className={styles.property}>
        <Box paddingTop="3%" paddingBottom="2%" color="#191919">
          <Typography variant="h4">LOGIN</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box>
            <Box
              display="flex"
              justifyContent="center"
              className={styles.formTitle}
            >
              <Typography variant="h5">Login</Typography>
            </Box>
            <Box>
              <LoadingOverlay visible={loading} />
              <Container className={styles.loginFormWidth}>
                {/* <CssBaseline /> */}
                <Box component="form" paddingTop="2%">
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
                      setEmail(e.target.value);
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
                      setPassword(e.target.value);
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
                        onClick={handleSignin}
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
        <CircularProgress size={80} />
        <Box sx={{ paddingLeft: "3%" }}>
          <Typography variant="h4"></Typography>
        </Box>
      </Box>
    </Box>
  );

  return <Box className={styles.main}>{loginPage}</Box>;
}
