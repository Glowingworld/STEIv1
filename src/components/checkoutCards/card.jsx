import {
  Avatar,
  Button,
  Paper,
  Grid,
  Text,
  Highlight,
  Modal,
  LoadingOverlay,
  Notification,
} from "@mantine/core";
import {
  Autocomplete,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { IconCheck } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import Router from "next/router";

export function Checkoutpage(props) {
  const [duration, setDuration] = useState("3");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errormsg, setErrormg] = useState("");
  const [error, setError] = useState(false);
  const { data: session, status } = useSession();
  const user = session?.user;
  let userData = user?.user;
  let token = user?.token;
  console.log(`id====${props.id}`);
  async function sendRequest(e) {
    e.preventDefault();
    console.log("requestt");
    setLoading(true);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/sendRequest/${props.ownerId}`,
      {
        method: "POST",
        body: JSON.stringify({
          houseId: props.id,
          duration: duration,
        }),
        headers: {
          Authorization: `Bear ${token}`,
          "Content-type": "application/json",
        },
      }
    );

    let res = await response.json();
    console.log(res);
    // Handle the response here
    if (response.ok && !res.status) {
      setError(true);
      setErrormg(res.message);
    } else if (response.ok && res.status) {
      setSuccess(true);
      setErrormg(res.message);
    }

    setLoading(false);

    setTimeout(() => {
      setError(false);
      setSuccess(false);
    }, 3000);
  }
  return (
    <Paper shadow="lg" mt="md" radius="md" withBorder p="lg">
      <Grid p="md">
        <Grid.Col md={6}>
          <Text fs="normal" fz={18} fw={800}>
            {props.price} Tsh/mo
          </Text>
        </Grid.Col>
        <Grid.Col md={6}>
          <Text fw={800}>4.9+ Reviews</Text>
        </Grid.Col>
      </Grid>

      <FormControl sx={{ mt: 2, minWidth: "100%" }}>
        <LoadingOverlay title="loading" visible={loading} />
        <InputLabel id="duration">DURATION </InputLabel>
        <Select
          required
          labelId="duration"
          id="dur"
          value={duration}
          label="Price per (month/year)"
          onChange={(e) => setDuration(e.target.value)}
        >
          <MenuItem value={"3"}>3-months</MenuItem>
          <MenuItem value={"6"}>6-months</MenuItem>
          <MenuItem value={"12"}>12-months</MenuItem>
          <MenuItem value={"24"}>2-years</MenuItem>
        </Select>
      </FormControl>
      <Grid p="md">
        <Grid.Col md={6}>
          <Text fw={700} ta="center" fz="md" weight={500} mt="md">
            {`${props.price}  X ${duration}`}{" "}
            <span style={{ color: "blue" }}>Months</span>
          </Text>
        </Grid.Col>
        <Grid.Col md={6}>
          <Text ta="center" fz="md" fw={500} mt="md">
            <Highlight color="red">
              Total {Math.round(props.price * duration)} Tsh
            </Highlight>
          </Text>
        </Grid.Col>
      </Grid>
      {success && (
        <Notification icon={<IconCheck />} color="green">
          {errormsg}
        </Notification>
      )}
      {error && (
        <Notification icon={<IconCheck />} color="green">
          {errormsg}
        </Notification>
      )}

      <Button
        onClick={sendRequest}
        size="lg"
        color="teal"
        variant="default"
        fullWidth
        mt="md"
      >
        Request
      </Button>
    </Paper>
  );
}
