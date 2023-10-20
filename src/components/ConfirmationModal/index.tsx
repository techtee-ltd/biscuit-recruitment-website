import { Modal } from "react-bootstrap";
import styles from "@/src/components/ConfirmationModal/ConfirmationModal.module.scss";

const ConfirmationModal = ({
  show,
  onHide,
  text,
}: {
  show: boolean;
  onHide: () => void;
  text: string;
}) => {
  return (
    <Modal show={show} onHide={onHide} className={styles.modal}>
      <div className={`d-grid text-center ${styles.text}`}>{text}</div>
    </Modal>
  );
};

export default ConfirmationModal;
