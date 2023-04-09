"use client"; // this is a client component 👈🏽

import Head from "next/head";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { Button, Menu, MenuItem, Typography, useTheme } from "@mui/material";
import { Box, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";

//import LocationIcon from "@mui/material/AccessAlarm";
//import styles from "@/styles/components.module.scss";
import styles from "@/styles/components.module.scss";
const Card = (props) => {
  let loading = props.stage;

  async function handleClick(id) {
    console.log(id);
    try {
      let res = await fetch("http://localhost:8045/allPropeties", {
        method: "GET",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.card} onClick={() => handleClick(props.id)}>
      <Box className={styles.cardImage}>
        <Box className={styles.cardDescriptions}>
          <Box>
            {loading ? (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width="80%"
                height={40}
              />
            ) : (
              <Typography
                variant="h3"
                style={{
                  color: "white",
                  fontSize: "large",
                  fontWeight: "bolder",
                }}
              >
                {props.title}
              </Typography>
            )}
          </Box>
          <Box>
            <MenuItem>
              <PlaceIcon />
              {props.street},{props.location}
            </MenuItem>
          </Box>
          <Box className={styles.index}>
            <b>{props.price}</b>
          </Box>
        </Box>
        <Box className={styles.cardContents}>
          {/* <h1>ontsdbwjbdjqbdj wiqjd</h1> */}
        </Box>
      </Box>
      {/* <Box className={styles.cardDetails}>
        <button className={styles.btn}>
          DETAILS <span>s</span>
        </button>
      </Box> */}
    </div>
  );
};

export default Card;
