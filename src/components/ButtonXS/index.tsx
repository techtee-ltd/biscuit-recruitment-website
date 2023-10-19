import { Button } from "react-bootstrap";
import styles from "@/src/components/ButtonXS/ButtonXS.module.scss";
import Link from "next/link";

const ButtonXS = (props: any) => {
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

export default ButtonXS;
