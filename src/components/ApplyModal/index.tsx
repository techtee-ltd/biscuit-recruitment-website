import styles from "@/src/components/ApplyModal/ApplyModal.module.scss";
import ButtonXS from "@/src/components/ButtonXS";
import FormControl from "@/src/components/FormControl";
import CloseIcon from "@/src/components/Icons/CloseIcon";
import Tab from "@/src/components/Tab";
import { Job } from "@/src/types";
import emailValidator from "email-validator";
import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const ApplyModal = ({
  show = false,
  onHide,
  onSuccess,
  job,
}: {
  show: boolean;
  onHide: () => void;
  onSuccess: () => void;
  job: Job;
}) => {
  const { title } = job;

  // const [serverError, setServerEer]

  const { register, handleSubmit, formState, watch, reset, setError } =
    useForm();

  const handleOnHide = () => {
    onHide();
    reset();
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      let formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      formData.append("file", data.pdfFile[0]);
      Object.keys(job).forEach((key) => {
        formData.append(key, job[key]);
      });
      const response = await fetch("/api/sendEmailApplication", {
        method: "POST",
        body: formData,
      });

      if (response.status === 500) {
        throw new Error(response.statusText);
      }
      onSuccess();
      handleOnHide();
    } catch (e) {
      setError("root.serverError", {
        type: "500",
        message: "Oops! We couldn't process your form. Please try again later.",
      });
    }
  };

  const errors = formState.errors;
  const file = watch("pdfFile")?.[0]?.name;

  return (
    <Modal show={show} onHide={handleOnHide} dialogClassName={styles.modal}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container
          fluid
          className={`d-grid row-gap-4 ${styles.modalContainer}`}
        >
          <Row className="justify-content-end">
            <Col className="d-grid justify-content-end">
              <ButtonXS onClick={handleOnHide}>
                <CloseIcon fill="#000" />
              </ButtonXS>
            </Col>
          </Row>
          <Row className={styles.title}>
            <Col>Apply for the role of {title}</Col>
          </Row>

          <Row className="row-gap-4">
            <Col xs={12} lg={6}>
              <FormControl
                register={register}
                registerName={"firstName"}
                registerParams={{ required: "First name is required" }}
                type="text"
                id="applyFirstName"
                placeholder="Enter your first name"
                state={errors?.firstName && "error"}
              />

              {errors?.firstName && (
                <Col xs={12} className={styles.formErrors}>
                  <>{errors?.firstName.message}</>
                </Col>
              )}
            </Col>
            <Col xs={12} lg={6}>
              <FormControl
                register={register}
                registerName={"lastName"}
                registerParams={{ required: "Last name is required" }}
                type="text"
                id="applyLastName"
                placeholder="Enter your last name"
                state={errors?.lastName && "error"}
              />
              {errors?.lastName && (
                <Col xs={12} className={styles.formErrors}>
                  <>{errors?.lastName.message}</>
                </Col>
              )}
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
                registerParams={{ required: "About yourself is required" }}
                variant="borderAll"
                as="textarea"
                rows={5}
                type="text"
                id="applyAboutYourself"
                placeholder="Write some words about yourself"
                state={errors?.about && "error"}
              />
              {errors?.about && (
                <Col xs={12} className={styles.formErrors}>
                  <>{errors?.about.message}</>
                </Col>
              )}
            </Col>
            <Col xs={12}>
              <Row className="row-gap-4">
                <Col xs={12} lg={6}>
                  <div className={styles.fileInputContainer}>
                    <input
                      className={styles.fileInput}
                      type="file"
                      accept=".pdf"
                      {...register("pdfFile", {
                        required: "Attachment is required",
                        validate: (value) => {
                          const file = value[0];
                          const isFileSizeValid = file.size < 5242881;
                          return (
                            isFileSizeValid || "PDF should be 5 mb or less"
                          );
                        },
                      })}
                    />
                    <Tab variant="full">Attach</Tab>
                    <Col xs={12} style={{ padding: "0 12px" }}>
                      {file}
                    </Col>

                    {errors?.pdfFile && (
                      <Col xs={12} className={styles.formErrors}>
                        <>{errors?.pdfFile.message}</>
                      </Col>
                    )}
                  </div>
                </Col>
                <Col xs={12} lg={6}>
                  <div>Allowed format: .pdf</div>
                  <div> Maximum file size: 5 mb</div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Check type="checkbox">
                <Form.Check.Input
                  type="checkbox"
                  className={styles.formCheckInput}
                  {...register("checkInput", {
                    required: "Accepting the terms and conditions is required",
                  })}
                />
                <Form.Check.Label>
                  I confirm that I have read and accept the Terms and
                  Conditions. By sending my CV, I agree I have read and
                  understand the, Privacy Policy.
                </Form.Check.Label>
                {errors?.checkInput && (
                  <Col
                    xs={12}
                    className={styles.formErrors}
                    style={{ padding: 0 }}
                  >
                    <>{errors?.checkInput.message}</>
                  </Col>
                )}
              </Form.Check>
            </Col>
          </Row>
          <Tab type="submit" variant="full">
            Apply
          </Tab>
          {errors?.root?.serverError && (
            <Col xs={12} className={styles.formErrors}>
              <>{errors?.root.serverError.message}</>
            </Col>
          )}
        </Container>
      </Form>
    </Modal>
  );
};

export default ApplyModal;
