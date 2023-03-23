// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./components.scss";
// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
// }));

// export default function RecipeReviewCard(name) {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card className="card-cards">
//       <CardMedia
//         className="round-image"
//         component="img"
//         image="src/assets/IMG-20221129-WA0003(1).jpg"
//         alt="wasee wakuu sana"
//       />

//       <CardContent>
//         <Typography variant="h2" className="pb-3">
//           Herbert Mpambazi
//         </Typography>
//         <Typography variant="h4">
//           <i>
//             This impressive paella is a perfect party dish and a fun meal to
//             cook together with your guests. Add 1 cup of frozen peas along with
//             the mussels, if you like.
//           </i>
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and
//             set aside for 10 minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
//             over medium-high heat. Add chicken, shrimp and chorizo, and cook,
//             stirring occasionally until lightly browned, 6 to 8 minutes.
//             Transfer shrimp to a large plate and set aside, leaving chicken and
//             chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
//             onion, salt and pepper, and cook, stirring often until thickened and
//             fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
//             cups chicken broth; bring to a boil.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

const RoundAvatarCard = (props) => {
  return (
    <div>
      <Box
        flexGrow={1}
        style={{
          // border: "2px solid blue",
          padding: "1%",
          margin: "1%",
        }}
      >
        <Grid container columnSpacing={2} rowSpacing={2} className="card-cards">
          <Grid item xs={12} md={4} sm={4}>
            <Box
              style={{
                color: "black",
              }}
              display="flex"
              justifyContent="center"
              alignContent="center"
            >
              <img
                src="/wordmark.svg"
                alt="mabata"
                style={{
                  backgroundColor: "white",
                  margin: "5%",
                  border: "2px solid #141b2d",
                  width: "11rem",
                  borderRadius: "50% ",
                  padding: "10%",
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sm={6}>
            <Box
              style={{
                color: "black",
                // paddingTop: "5%",
              }}
              display="flex"
              justifyContent="start"
            >
              <h1>{props.title}</h1>
            </Box>

            <Box
              style={{
                color: "black",
                paddingTop: "10px",
              }}
              className="card-text"
            >
              <Box
                style={{
                  paddingLeft: "4px",
                }}
              >
                <p>{props.disc1}</p>
                <p>{props.disc2}</p>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RoundAvatarCard;
