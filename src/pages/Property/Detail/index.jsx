import ButtonAppBar from "@/components/navbar";
import { Box, cardActionAreaClasses, Grid, Typography } from "@mui/material";
import { useState } from "preact/hooks";
import styles from "@/styles/Home.module.scss";
import Footer from "@/components/footer";
import ImageCard from "@/components/imageCard";
import PlaceIcon from "@mui/icons-material/Place";

const Detail = () => {
  //const [loading, setLoading] = useState(false);
  const card = [1, 2, 3];

  return (
    <Box>
      <ButtonAppBar />
      <Box className={styles.testColor}></Box>
      <Box className={styles.detail}>
        <Box className={styles.detailscard}>
          <Grid container spacing={0.5}>
            {card.map((c) => {
              return (
                <Grid item xs={12} md={4}>
                  <ImageCard />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <section
          style={{
            paddingTop: "5%",
            paddingBottom: "5%",
            borderBottom: " 2px solid #e4e4e4",
          }}
        >
          <Box className={styles.propert}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={9}>
                <Box>
                  <Typography variant="h4">
                    Nyumba nzuri ya kupanga kwa familia
                  </Typography>
                </Box>
                <Box>
                  <Typography>
                    <PlaceIcon />
                    Arusha
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box paddingTop="3.5%">
                  <button
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      borderRadius: "4px",
                    }}
                    className={styles.btn}
                  >
                    3000000
                  </button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </section>
      </Box>

      <Footer />
    </Box>
  );
};

export default Detail;
