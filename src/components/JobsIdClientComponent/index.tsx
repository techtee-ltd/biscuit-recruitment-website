"use client";

import ApplyModal from "@/src/components/ApplyModal";
import ButtonMD from "@/src/components/ButtonMD";
import ConfirmationModal from "@/src/components/ConfirmationModal";
import ArrowIcon from "@/src/components/Icons/ArrowIcon";
import CTAArrowIcon from "@/src/components/Icons/CTAArrowIcon";
import ShareTabs from "@/src/components/ShareTabs";
import styles from "@/src/components/JobsIdClientComponent/JobsIdClientComponent.module.scss";
import StickyFooter from "@/src/components/StickyFooter";
import Tab from "@/src/components/Tab";
import type { Job } from "@/src/types";
import Link from "next/link";
import { useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

const JobsIdClientComponent = ({ job }: { job: Job }) => {
  const { title, description, responsibilities, qualifications, type } = job;

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
      />
      <ApplyModal
        show={showApplyModal}
        onHide={toggleApplyModal}
        onSuccess={toggleConfirmationModal}
        job={job}
      />
      <Container
        fluid
        className={`d-grid row-gap-5 row-gap-md-2 ${styles.jobsPage}`}
      >
        <Row>
          <Link href="/jobs">
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
                <Tab state="readOnly">{type}</Tab>
              </Col>

              <Col xs={12} className={styles.shareTablet}>
                <div className={styles.textSubtitle}>Share</div>
                <ShareTabs title={job.title} />
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={6}>
            <Row className="gap-4">
              <Row className="gap-1">
                <div className={styles.textSubtitle}>Job description:</div>
                <div>{description}</div>
              </Row>

              <Row className="gap-1">
                <div className={styles.textSubtitle}>
                  Responsibilities include but are not limited to:
                </div>
                {responsibilities.map((i, index) => (
                  <div key={i + index} className={styles.textBody}>
                    <span style={{ fontSize: "24px" }}>&bull;</span> {i}
                  </div>
                ))}
              </Row>
              <Row className="gap-1">
                <Col xs={12}>
                  <div className={styles.textSubtitle}>Qualifications:</div>
                </Col>
                <Col xs={12}>
                  {qualifications.map((i, index) => (
                    <div key={i + index} className={styles.textBody}>
                      <span style={{ fontSize: "24px" }}>&bull;</span> {i}
                    </div>
                  ))}
                </Col>
              </Row>
            </Row>
          </Col>

          <Col className={styles.shareMobile}>
            <div className={styles.textSubtitle}>Share</div>
            <ShareTabs title={job.title} />
          </Col>
        </Row>
      </Container>
      <StickyFooter Button={Button} />
    </>
  );
};

export default JobsIdClientComponent;
