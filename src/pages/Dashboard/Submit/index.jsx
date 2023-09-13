import Layout from "@/pages/layout";
import Submit from "@/components/Dashboard_comps/property/Submit";
import { Container } from "@mantine/core";
import { Fade } from "react-reveal";

const Addrooms = () => {
  return (
    <Layout>
      <Fade left duration={500}>
        <Submit />
      </Fade>
    </Layout>
  );
};

export default Addrooms;
