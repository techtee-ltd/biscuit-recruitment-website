import styles from "@/components/Tab/Tab.module.scss";
import { cva, type VariantProps } from "class-variance-authority";
import { Button } from "react-bootstrap";

type ButtonProps = VariantProps<typeof Button>;

const tab = cva(styles.base, {
  variants: {
    variant: {
      uppercase: styles.two,
      full: `${styles.two} ${styles.three}`,
    },
    state: {
      selected: styles.selected,
    },
  },
});

const Tab = ({ children, variant, state }: ButtonProps) => (
  <Button className={tab({ variant, state })}>{children}</Button>
);

export default Tab;
