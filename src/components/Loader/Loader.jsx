import { Puff } from "react-loader-spinner";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <Puff height="100" width="100" ariaLabel="loading" />
    </div>
  );
}
