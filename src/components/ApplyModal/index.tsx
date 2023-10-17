import styles from "@/components/ApplyModal/ApplyModal.module.scss";
import FormControl from "@/components/FormControl";
import CloseIcon from "@/components/Icons/CloseIcon";
import Tab from "@/components/Tab";
import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import ButtonXS from "../ButtonXS";

const ApplyModal = () => {
  return (
    <Modal show dialogClassName={styles.modal}>
      <Container fluid className={`d-grid row-gap-4 ${styles.modalContainer}`}>
        <Row className="justify-content-end">
          <Col className="d-grid justify-content-end">
            <ButtonXS>
              <CloseIcon fill="#000" />
            </ButtonXS>
          </Col>
        </Row>
        <Row className={styles.title}>
          <Col>
            Apply for the role of Executive Assistant - Successful Boutique
            Investment Firm, West London
          </Col>
        </Row>

        <Row className="gap-4">
          <Col xs={12}>
            <FormControl
              type="text"
              id="applyFirstName"
              placeholder="Enter your first name"
            />
          </Col>
          <Col xs={12}>
            <FormControl
              type="text"
              id="applyLastName"
              placeholder="Enter your last name"
            />
          </Col>
          <Col xs={12}>
            <FormControl
              type="text"
              id="applyEmail"
              placeholder="Enter your email"
            />
          </Col>
          <Col xs={12}>
            <FormControl
              variant="borderAll"
              as="textarea"
              rows={5}
              type="text"
              id="applyEmail"
              placeholder="Write some words about yourself"
            />
          </Col>
          <Col xs={12}>
            <Row className="row-gap-4">
              <Col xs={12} lg={6}>
                <Tab variant="full">Attach</Tab>
              </Col>
              <Col xs={12} lg={6}>
                <div>Allowed format: .pdf</div>
                <div> Maximum file size: 5 mb</div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Form.Check type="checkbox">
          <Form.Check.Input type="checkbox" className={styles.formCheckInput} />
          <Form.Check.Label>
            I confirm that I have read and accept the Terms and Conditions. By
            sending my CV, I agree I have read and understand the, Privacy
            Policy.
          </Form.Check.Label>
        </Form.Check>
        <Tab variant="full">Apply</Tab>
      </Container>
    </Modal>
  );
};

export default ApplyModal;
