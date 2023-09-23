import ReqTable from "@/components/Dashboard_comps/property/reqTable";
import Layout from "@/pages/layout";

import { Container } from "@mantine/core";
import { Fade } from "react-reveal";
const Request = () => {
  return (
    <Layout>
      <Fade left>
        <Container size="md">
          <ReqTable />
        </Container>
      </Fade>
    </Layout>
  );
};

export default Request;
