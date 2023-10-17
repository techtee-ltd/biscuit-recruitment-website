import styles from "@/components/FormControl/FormControl.module.scss";
import { VariantProps, cva } from "class-variance-authority";
import { Form } from "react-bootstrap";

type FormControlProps = VariantProps<typeof Form.Control>;

const formControl = cva(styles.formControl, {
  variants: {
    variant: {
      uppercase: styles.uppercase,
      borderAll: styles.borderAll,
    },
  },
});

const FormControl = ({
  id,
  placeholder,
  type,
  variant,
  ...props
}: FormControlProps) => {
  return (
    <Form.Control
      {...props}
      className={formControl({ variant })}
      type={type}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default FormControl;
