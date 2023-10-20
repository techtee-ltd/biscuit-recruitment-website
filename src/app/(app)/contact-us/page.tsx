"use client";

import styles from "@/src/app/(app)/contact-us/contact-us.module.scss";
import ConfirmationModal from "@/src/components/ConfirmationModal";
import FormControl from "@/src/components/FormControl";
import Tab from "@/src/components/Tab";
import emailValidator from "email-validator";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const ContactUsPage = () => {
  const { register, handleSubmit, formState, watch, reset, setError } =
    useForm();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const closeModal = () => setShowConfirmationModal(false);
  const openModal = () => setShowConfirmationModal(true);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await fetch("/api/sendEmailContactUs", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.status === 500) {
        throw new Error(response.statusText);
      }
      openModal();
      reset();
    } catch (e) {
      setError("root.serverError", {
        type: "500",
        message: "Oops! We couldn't process your form. Please try again later.",
      });
    }
  };

  const errors = formState?.errors;

  return (
    <>
      <ConfirmationModal
        show={showConfirmationModal}
        onHide={closeModal}
        text="Your inquiry was successfully sent!"
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container fluid className={`d-grid row-gap-5 ${styles.container}`}>
          <Row className={styles.title}>
            <Col>
              Dialogue is the best tool for solving any challenges. <br />
              Let&apos;s start our conversation about your needs right now.
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
                    id="contactUsFirstName"
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
                    id="contactUsLastName"
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
                id="contactUsEmail"
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
                registerName="inquiry"
                registerParams={{ required: "Inquiry is required" }}
                variant="borderAll"
                as="textarea"
                rows={5}
                type="text"
                id="contactUsInquiry"
                placeholder="Write a short description of your inquiry "
                state={errors?.inquiry && "error"}
              />
              {errors?.inquiry && (
                <Col xs={12} className={styles.formErrors}>
                  <>{errors?.inquiry.message}</>
                </Col>
              )}
            </Col>
          </Row>
          <Row className="d-flex justify-content-end">
            <Tab type="submit">Send</Tab>
            {errors?.root?.serverError && (
              <Col
                xs={12}
                className={`d-flex justify-content-end ${styles.formErrors}`}
              >
                <>{errors?.root.serverError.message}</>
              </Col>
            )}
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default ContactUsPage;
