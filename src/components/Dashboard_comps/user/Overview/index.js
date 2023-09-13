import {
  Container,
  Group,
  Paper,
  Text,
  Grid,
  Skeleton,
  Button,
  Tabs,
} from "@mantine/core";

import { Fade } from "react-reveal";
import { IconBell, IconPlus, IconSquareRoundedPlus } from "@tabler/icons-react";
const Overview = () => {
  return (
    <>
      <Fade bottom>
        <Container m="xl" p="xl" size="xl">
          <Group position="right">
            <Paper radius="md" withBorder shadow="lg" p="lg">
              <Group position="center">
                <IconSquareRoundedPlus />
              </Group>
              <Group pt="md">
                <Text>List house</Text>
              </Group>
            </Paper>
            <Paper radius="md" withBorder shadow="lg" p="lg">
              <Group position="center">
                <IconBell />
              </Group>
              <Text pt="md">Requests</Text>
            </Paper>
          </Group>

          <Paper radius="md" p="lg" mt="lg">
            <Group position="apart">
              <Text fw={700} pb="lg" pl="sm" size={24}>
                Property List
              </Text>
              <Tabs defaultValue="first">
                <Tabs.List position="right">
                  <Tabs.Tab value="first">Popular</Tabs.Tab>
                  <Tabs.Tab value="second">Recommended</Tabs.Tab>
                  <Tabs.Tab value="third">Recent</Tabs.Tab>
                </Tabs.List>
              </Tabs>
              {/* <Button.Group>
                <Button variant="default">First</Button>
                <Button variant="default">Second</Button>
                <Button variant="default">Third</Button>
              </Button.Group> */}
            </Group>
            <Grid>
              <Grid.Col md={4}>
                <Skeleton height={240} radius="md" animate={true} />
              </Grid.Col>
              <Grid.Col md={4}>
                <Skeleton height={240} radius="md" animate={true} />
              </Grid.Col>
              <Grid.Col md={4}>
                <Skeleton height={240} radius="md" animate={true} />
              </Grid.Col>
              <Grid.Col md={4}>
                <Skeleton height={240} radius="md" animate={true} />
              </Grid.Col>
              <Grid.Col md={4}>
                <Skeleton height={240} radius="md" animate={true} />
              </Grid.Col>
              <Grid.Col md={4}>
                <Skeleton height={240} radius="md" animate={true} />
              </Grid.Col>
            </Grid>
          </Paper>
        </Container>
      </Fade>
    </>
  );
};
export default Overview;
