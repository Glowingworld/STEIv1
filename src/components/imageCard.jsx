import { Box } from "@mui/material";
import styles from "@/styles/components.module.scss";

const ImageCard = () => {
  return (
    <Box className={styles.detailImage}>
      <img
        src="/external.87fdc6ca.jpg"
        width="100%"
        height="100%"
        style={{ borderRadius: "4px" }}
      />
    </Box>
  );
};

export default ImageCard;
