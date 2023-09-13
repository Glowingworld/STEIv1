import {
  Paper,
  Progress,
  RingProgress,
  Grid,
  Text,
  Group,
  Center,
} from "@mantine/core";
import {
  Icon360,
  IconArrowAutofitContentFilled,
  IconArrowUpRight,
} from "@tabler/icons-react";
let data = [
  { title: "Property for sale", val: 20, total: 2000, color: "blue" },
  { title: "Property for rent", val: 50, total: 200, color: "orange" },
  { title: "Total Customers", val: 80, total: 5000, color: "green" },
  { title: "Total Landlors", val: 40, total: 6000, color: "red" },
];
const Statistics = () => {
  return (
    <>
      <Grid>
        {data.map((val, index) => {
          return (
            <Grid.Col xs={12} md={3} key={index}>
              <Paper p="lg" withBorder radius="lg">
                <Group>
                  <RingProgress
                    size={100}
                    roundCaps
                    thickness={8}
                    sections={[{ value: val.val, color: val.color }]}
                    label={
                      <Center>
                        <IconArrowUpRight />
                      </Center>
                    }
                  />

                  <div>
                    <Text>{val.title}</Text>
                    <Text pt="md" fz={24} fw={700}>
                      {val.total}
                    </Text>
                  </div>
                </Group>
              </Paper>
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};

export default Statistics;
