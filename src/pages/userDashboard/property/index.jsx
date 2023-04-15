import Sidebar from "@/components/userSide";
import TableGrid from "@/components/tablegrid";
import { Box } from "@mui/material";
import ButtonAppBar from "@/components/navbar";
import Head from "@/components/ header";

const myProp = () => {
  return (
    <Box style={{ display: "flex" }}>
      <Sidebar />
      <Box style={{ flex: 1, marginLeft: "auto" }}>
        <ButtonAppBar />
        <Head title="MY PROPERTIES" subtittle="Voila props" />
        <TableGrid />
      </Box>
    </Box>
  );
};

export default myProp;
