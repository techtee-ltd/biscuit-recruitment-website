import { Modal } from "react-bootstrap";
import styles from "@/components/ConfirmationModal/ConfirmationModal.module.scss";

const ConfirmationModal = () => {
  return (
    <Modal show className={styles.modal}>
      <div className={`d-grid p-5 text-center ${styles.text}`}>
        Your application was successfully submitted!
      </div>
    </Modal>
  );
};

export default ConfirmationModal;