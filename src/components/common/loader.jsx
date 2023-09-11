import styles from "src/styles/home.module.css";
import { Group, Container } from "@mantine/core";

const Loader = () => {
  return (
    <Container size="lg">
      <Group position="center">
        <div className={styles.loadingWave}>
          <div className={styles.loadingBar}></div>
          <div className={styles.loadingBar}></div>
          <div className={styles.loadingBar}></div>
          <div className={styles.loadingBar}></div>
          <div className={styles.loadingBar}></div>
          <div className={styles.loadingBar}></div>
        </div>
      </Group>
    </Container>
  );
};

export default Loader;
