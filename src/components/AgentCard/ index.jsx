import { Avatar, Text, Button, Paper } from "@mantine/core";

export function UserInfoActio(props) {
  return (
    <Paper shadow="xl" radius="md" withBorder p="lg" elevation={2}>
      <Avatar src={props.avatar} size={120} radius={120} mx="auto" />
      <Text ta="center" fz="lg" weight={500} mt="md">
        {props.name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {props.email} • {props.job}
      </Text>

      <Button size="lg" color="teal" variant="default" fullWidth mt="md">
        Send message
      </Button>
    </Paper>
  );
}
