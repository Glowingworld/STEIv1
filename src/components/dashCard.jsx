import { Box, Typography, Grid, MenuItem } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import KeyIcon from "@mui/icons-material/Key";
import DoorbellIcon from "@mui/icons-material/Doorbell";
import AccessibleIcon from "@mui/icons-material/Accessible";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TrainIcon from "@mui/icons-material/Train";
import PowerIcon from "@mui/icons-material/Power";
import styles from "@/styles/components.module.scss";

const NewCard = (props) => {
  return (
    <Box
      style={{
        width: "290px",
        backgroundColor: "white",
        marginLeft: "2px",
        height: "400px",
      }}
      className={styles.dashCard}
    >
      <Box>
        <img
          alt="profile"
          width="100%"
          height="200px"
          src="/images.png"
          style={{
            cursor: "pointer",

            borderRadius: "8px",
          }}
        />
      </Box>
      <Box>
        <Box paddingLeft="5%" paddingTop="2%">
          <Typography variant="h6">
            <b>{props.title}</b>
          </Typography>
          <hr color="white"></hr>
        </Box>
        <Box paddingLeft="5%" paddingTop="2%">
          <Grid container>
            <Grid item xs={3}>
              <KeyIcon /> 3
            </Grid>
            <Grid item xs={3}>
              <WifiIcon /> 3
            </Grid>
            <Grid item xs={4}>
              <DoorbellIcon /> 12000Sqrft
            </Grid>
          </Grid>
        </Box>
        <Box paddingLeft="5%" paddingTop="2%">
          <Typography variant="h6" color="#ae1ff9">
            {`$ ${props.price}  /month`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NewCard;
