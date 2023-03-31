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
import { LineAxisOutlined } from "@mui/icons-material";
import axios from "axios";

// import { CheckBox } from "@mui/icons-material";
export default function Login() {
  const [loading, setLoading] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [repassword, setRepassword] = useState("");

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();

    let data = new FormData(event.currentTarget);
    let fname = data.get("firstname");
    let lname = data.get("lastname");
    let email = data.get("email");
    let phone = data.get("phone");
    let password = data.get("Password");
    let repassword = data.get("Password2");

    data.append("firstname", fname);
    data.append("lastname", lname);
    data.append("email", email);
    data.append("password", password);
    data.append("phone", phone);

    await fetch("http://localhost:8045/signup", {
      method: "POST",
      body: JSON.stringify({
        firstname: fname,
        lastname: lname,
        email: email,
        phone: phone,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        setLoading(false);
        setFname("");
        setEmail("");
        setLname("");
        setPassword("");
        setPhone("");
        setRepassword("");
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  let registerForm = (
    <Box>
      <ButtonAppBar />
      {/* <Box className={styles.testColor}></Box> */}
      <Box className={styles.property}>
        <Box paddingTop="3%" paddingBottom="2%" color="#191919">
          <Typography variant="h4">Register</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box>
            <Box>
              <Container
                style={{
                  height: "600px",
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
                    id="fname"
                    label="First name"
                    name="firstname"
                    type="text"
                    autoComplete="firstname"
                    value={fname}
                    onChange={(e) => {
                      setFname(e.value);
                    }}
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    id="lname"
                    label="Last name"
                    name="lastname"
                    type="text"
                    autoComplete="lastname"
                    autoFocus
                    value={lname}
                    onChange={(e) => {
                      setLname(e.value);
                    }}
                  />

                  <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    // autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => {
                      setEmail(e.value);
                    }}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    id="phoneNum"
                    label="Phone number"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    autoFocus
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.value);
                    }}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    id="pass"
                    label="Password"
                    name="Password"
                    type="password"
                    autoFocus
                    value={password}
                    onChange={(e) => {
                      setPassword(e.value);
                    }}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    id="Pass2"
                    type="password"
                    label="Repeate Password"
                    name="Password2"
                    autoFocus
                    error={password == repassword}
                    value={repassword}
                    onChange={(e) => {
                      setRepassword(e.value);
                    }}
                  />

                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <Checkbox />
                      Accept the
                      <a href="#" style={{ color: "blue" }}>
                        Terms & Conditions
                      </a>
                    </Box>
                    <Box>
                      <Button
                        disabled={password !== repassword && fname.length > 0}
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
                        REGISTER
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

  let startLoading = (
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
        <Typography variant="h3">Loading.......</Typography>
      </Box>
    </Box>
  );

  return (
    <Box className={styles.main}>{loading ? startLoading : registerForm}</Box>
  );
}
