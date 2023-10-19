import { Button } from "react-bootstrap";
import styles from "@/src/components/ButtonMD/ButtonMD.module.scss";
import Link from "next/link";

const ButtonMD = (props: any) => {
  return (
    <Button
      as={Link}
      variant="link"
      bsPrefix={styles.button}
      href="#"
      {...props}
    />
  );
};

export default ButtonMD;
