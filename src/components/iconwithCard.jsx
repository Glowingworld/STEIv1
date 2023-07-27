import { Grid, Box, Typography } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import styles from "@/styles/components.module.scss";
import { IconPlayerStopFilled } from "@tabler/icons-react";
import { Image } from "@mantine/core";
import { IceSkatingOutlined } from "@mui/icons-material";
import { lightGreen } from "@mui/material/colors";

function CardWithIcon(Props) {
  const [loading] = useState(false);
  let color = Props.color;

  return (
    <div className={styles.iconCardContainer}>
      <div
        className={styles.iconContainer}
        style={{
          backgroundColor: color,
        }}
      >
        <Box
          style={{
            width: "40px",
            height: "40px",
          }}
        >
          {Props.icon}
        </Box>
      </div>
      <div className={styles.contentsContainer}>
        <Box style={{ paddingTop: "5%", paddingBotton: "4%" }}>
          <Typography fontWeight={600} fontSize={16} color="#262626">
            {Props.title}
          </Typography>
        </Box>
        <Box style={{ paddingTop: "5%", paddingBotton: "4%" }}>
          <Typography
            lineHeight={1.5}
            fontSize="14px"
            fontWeight={400}
            color="gray"
          >
            {Props.desc}
          </Typography>
        </Box>
      </div>
    </div>
  );
}

export default CardWithIcon;
