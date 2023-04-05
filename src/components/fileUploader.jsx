import { useState } from "react";
import styles from "@/styles/components.module.scss";
import { Input, Box, Button } from "@mui/material";
import { Diversity1 } from "@mui/icons-material";
const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  function handleChange() {}

  return (
    <div className={styles.upload}>
      <Box></Box>
      <Button variant="contained" component="label">
        UPLOAD
        <input
          onChange={handleChange}
          accept="image/*"
          multiple
          hidden
          type="file"
        />
      </Button>
    </div>
  );
};

export default FileUploader;
