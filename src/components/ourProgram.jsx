import "./components.scss";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

const ourProgram = (props) => {
  return (
    <div>
      <Box
        flexGrow={1}
        style={{
          // border: "2px solid blue",
          padding: "1%",
          margin: "1%",
        }}
        className="card-card"
      >
        <Box display="flex" justifyContent="start">
          <h2 className="p-2 text-white">{props.title}</h2>
        </Box>
        <hr className="text-white" />
        <Grid container columnSpacing={1} rowSpacing={1} className="card-card">
          <Grid item xs={12} md={4} sm={12}>
            <Box
              style={{
                color: "white",
              }}
              display="flex"
              justifyContent="center"
              alignContent="center"
            >
              <img
                src={props.img}
                alt="mabata"
                style={{
                  backgroundColor: "white",
                  margin: "1%",
                  borderRight: "2px solid white",
                  width: "33rem",
                  padding: "2%",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sm={12}>
            <Box
              style={{
                color: "white",
                paddingLeft: "4px",
                paddingTop: "10px",
                // borderLeft: "1px solid #cd9d00 ",
              }}
              className="card-text"
            >
              <Box
                style={{
                  paddingRight: "4px",

                  borderRight: "1px solid white",
                  height: "100%",
                }}
              >
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: "bolder",
                  }}
                >
                  {props.discription1}
                </p>
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: "bolder",
                  }}
                >
                  {props.discription2}
                </p>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sm={12}>
            <Box
              style={{
                color: "white",
                paddingTop: "10px",
              }}
              className="card-text"
            >
              <Box
                style={{
                  paddingLeft: "4px",
                }}
              >
                <p>
                  <h2
                    style={{
                      color: "#cd9d00",
                      borderBottom: "1px solid #cd9d00",
                    }}
                  >
                    The title
                  </h2>
                </p>
                <p>list of programs & connections</p>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ourProgram;
