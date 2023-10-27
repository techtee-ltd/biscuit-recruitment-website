"use client";

import styles from "@/src/components/Tab/Tab.module.scss";
import { cva, type VariantProps } from "class-variance-authority";
import { Button } from "react-bootstrap";

type ButtonProps = VariantProps<typeof Button>;

const tab = cva(styles.base, {
  variants: {
    variant: {
      uppercase: styles.two,
      full: `${styles.two} ${styles.three}`,
      small: styles.small,
      link: `${styles.two} ${styles.link}`,
    },
    state: {
      selected: styles.selected,
      readOnly: styles.readOnly,
    },
  },
});

const Tab = ({ children, variant, state, ...props }: ButtonProps) => (
  <Button {...props} className={tab({ variant, state })}>
    {children}
  </Button>
);

export default Tab;
