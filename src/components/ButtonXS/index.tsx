import { Button } from "react-bootstrap";
import styles from "@/components/ButtonXS/ButtonXS.module.scss";

const ButtonXS = (props: any) => {
  return <Button variant="link" bsPrefix={styles.button} {...props} />;
};

export default ButtonXS;
