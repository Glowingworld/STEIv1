import { Container } from "@mantine/core";
import Statistics from "./Stastics";
import { Fade } from "react-reveal";
const Overview = () => {
  return (
    <>
      <Container size="xl">
        <Fade bottom>
          <Statistics />
        </Fade>
      </Container>
    </>
  );
};
export default Overview;
