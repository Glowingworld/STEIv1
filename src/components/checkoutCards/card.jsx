import { Avatar, Button, Paper, Grid, Text, Highlight } from "@mantine/core";
import {
  Autocomplete,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

export function Checkoutpage(props) {
  const [duration, setDuration] = useState("");
  return (
    <Paper shadow="lg" mt="md" radius="md" withBorder p="lg">
      <Grid p="md">
        <Grid.Col md={6}>
          <Text fs="normal" fz={18} fw={800}>
            200000Tsh/mo
          </Text>
        </Grid.Col>
        <Grid.Col md={6}>
          <Text fw={800}>4.9+ Reviews</Text>
        </Grid.Col>
      </Grid>

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
          <MenuItem value={"3"}>3-months</MenuItem>
          <MenuItem value={"6"}>6-months</MenuItem>
          <MenuItem value={"12"}>12-months</MenuItem>
          <MenuItem value={"24"}>2-years</MenuItem>
        </Select>
      </FormControl>
      <Grid p="md">
        <Grid.Col md={6}>
          <Text ta="center" fz="md" weight={500} mt="md">
            300000Tsh X 12
          </Text>
        </Grid.Col>
        <Grid.Col md={6}>
          <Text ta="center" fz="md" fw={500} mt="md">
            <Highlight color="red">Total 12000000Tsh</Highlight>
          </Text>
        </Grid.Col>
      </Grid>

      <Button size="lg" color="teal" variant="default" fullWidth mt="md">
        Request
      </Button>
    </Paper>
  );
}
