import styles from "@/src/components/FormControl/FormControl.module.scss";
import { VariantProps, cva } from "class-variance-authority";
import { Form } from "react-bootstrap";

type FormControlProps = VariantProps<typeof Form.Control>;

const formControl = cva(styles.formControl, {
  variants: {
    variant: {
      uppercase: styles.uppercase,
      borderAll: styles.borderAll,
    },
    state: {
      error: styles.error,
    },
  },
});

const FormControl = ({
  id,
  placeholder,
  type,
  variant,
  state,
  ...props
}: FormControlProps) => {
  return (
    <Form.Control
      {...props}
      className={formControl({ variant, state })}
      type={type}
      id={id}
      placeholder={placeholder}
      {...(props.register &&
        props.register(props.registerName, props.registerParams))}
    />
  );
};

export default FormControl;
