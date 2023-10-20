"use client";

import styles from "@/src/app/(app)/contact-us/contact-us.module.scss";
import ConfirmationModal from "@/src/components/ConfirmationModal";
import FormControl from "@/src/components/FormControl";
import Tab from "@/src/components/Tab";
import emailValidator from "email-validator";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ContactUsPage = () => {
  const { register, handleSubmit, formState, watch, reset } = useForm();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const toggleModal = () => setShowConfirmationModal((prev) => !prev);

  const onSubmit = (data) => console.log(data);

  const errors = formState?.errors;

  return (
    <>
      <ConfirmationModal
        show={showConfirmationModal}
        onHide={toggleModal}
        text="Your inquiry was successfully sent!"
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container fluid className={`d-grid row-gap-5 ${styles.container}`}>
          <Row className={styles.title}>
            <Col>
              Dialogue is the best tool for solving any challenges. <br />
              Let's start our conversation about your needs right now.
            </Col>
          </Row>
          <Row className="row-gap-4">
            <Col xs={12} lg={6}>
              <Row>
                <Col>
                  <FormControl
                    register={register}
                    registerName={"firstName"}
                    type="text"
                    id="applyFirstName"
                    placeholder="Enter your first name"
                    state={errors?.firstName && "error"}
                  />
                </Col>
                {errors?.firstName && (
                  <Col xs={12} className={styles.formErrors}>
                    <>{errors?.firstName.message}</>
                  </Col>
                )}
              </Row>
            </Col>
            <Col xs={12} lg={6}>
              <Row>
                <Col>
                  <FormControl
                    register={register}
                    registerName={"lastName"}
                    type="text"
                    id="applyLastName"
                    placeholder="Enter your last name"
                    state={errors?.lastName && "error"}
                  />
                </Col>
                {errors?.lastName && (
                  <Col xs={12} className={styles.formErrors}>
                    <>{errors?.lastName.message}</>
                  </Col>
                )}
              </Row>
            </Col>
            <Col xs={12}>
              <FormControl
                register={register}
                registerName="email"
                registerParams={{
                  required: "Email is required",
                  validate: (value: string) =>
                    emailValidator.validate(value) || "Incorrect email format",
                }}
                type="text"
                id="applyEmail"
                placeholder="Enter your email"
                state={errors?.email && "error"}
              />
              {errors?.email && (
                <Col xs={12} className={styles.formErrors}>
                  <>{errors?.email.message}</>
                </Col>
              )}
            </Col>
            <Col xs={12}>
              <FormControl
                register={register}
                registerName="about"
                registerParams={{ required: "Inquiry is required" }}
                variant="borderAll"
                as="textarea"
                rows={5}
                type="text"
                id="applyAboutYourself"
                placeholder="Write a short description of your inquiry "
                state={errors?.about && "error"}
              />
              {errors?.about && (
                <Col xs={12} className={styles.formErrors}>
                  <>{errors?.about.message}</>
                </Col>
              )}
            </Col>
          </Row>
          <Row className="d-flex justify-content-end">
            <Tab type="submit">Send</Tab>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default ContactUsPage;
