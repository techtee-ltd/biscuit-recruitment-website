"use client";

import ApplyModal from "@/src/components/ApplyModal";
import ButtonMD from "@/src/components/ButtonMD";
import ConfirmationModal from "@/src/components/ConfirmationModal";
import ArrowIcon from "@/src/components/Icons/ArrowIcon";
import CTAArrowIcon from "@/src/components/Icons/CTAArrowIcon";
import JobShareTabs from "@/src/components/JobShareTabs";
import styles from "@/src/components/JobsIdClientComponent/JobsIdClientComponent.module.scss";
import StickyFooter from "@/src/components/StickyFooter";
import Tab from "@/src/components/Tab";
import { jobTypesColor } from "@/src/constants";
import type { Job } from "@/src/types";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

const JobsIdClientComponent = ({ job }: { job: Job }) => {
  const { title, description, type } = job;

  const [showApplyModal, setShowApplyModal] = useState(false);

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const toggleApplyModal = () => setShowApplyModal((prev) => !prev);

  const toggleConfirmationModal = () =>
    setShowConfirmationModal((prev) => !prev);

  const Button = () => (
    <ButtonMD as="a" onClick={() => toggleApplyModal()}>
      <Stack gap={3} direction="horizontal">
        <CTAArrowIcon />
        Apply for the job
      </Stack>
    </ButtonMD>
  );
  return (
    <>
      <ConfirmationModal
        show={showConfirmationModal}
        onHide={toggleConfirmationModal}
        text="Your application was successfully submitted!"
      />
      <ApplyModal
        show={showApplyModal}
        onHide={toggleApplyModal}
        onSuccess={toggleConfirmationModal}
        job={job}
      />
      <Container
        fluid
        className={`d-grid row-gap-5 row-gap-md-4 ${styles.jobsPage}`}
      >
        <Row>
          <Link href="/jobs" className={styles.backButton}>
            <Stack direction="horizontal" gap={1}>
              <ArrowIcon /> Back
            </Stack>
          </Link>
        </Row>

        <Row className="row-gap-4">
          <Col xs={12} md={6}>
            <Row className="gap-4">
              <Col xs={12} className={styles.title}>
                {title}
              </Col>

              <Col xs={12}>
                <div className={styles.textSubtitle}>Job type</div>
                <Tab state="readOnly">
                  <div className="d-flex">
                    <div
                      className={styles.circle}
                      style={{
                        position: "absolute",
                        transform: "translateX(-10px)",
                        backgroundColor: jobTypesColor[type],
                      }}
                    />
                    {type}
                  </div>
                </Tab>
              </Col>

              <Col xs={12} className={styles.shareTablet}>
                <div className={styles.textSubtitle}>Share</div>
                <JobShareTabs job={job} />
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={6}>
            <Row className="gap-4">
              <Row className="lh-sm">
                <div className={styles.textSubtitle}>Job description:</div>
                <PortableText value={description as any} />
              </Row>
            </Row>
          </Col>

          <Col className={styles.shareMobile}>
            <div className={styles.textSubtitle}>Share</div>
            <JobShareTabs job={job} />
          </Col>
        </Row>
      </Container>
      <StickyFooter Button={Button} />
    </>
  );
};

export default JobsIdClientComponent;
