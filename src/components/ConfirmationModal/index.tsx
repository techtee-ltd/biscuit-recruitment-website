import { Modal } from "react-bootstrap";
import styles from "@/src/components/ConfirmationModal/ConfirmationModal.module.scss";

const ConfirmationModal = ({
  show,
  onHide,
}: {
  show: boolean;
  onHide: () => void;
}) => {
  return (
    <Modal show={show} onHide={onHide} className={styles.modal}>
      <div className={`d-grid p-5 text-center ${styles.text}`}>
        Your application was successfully submitted!
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
