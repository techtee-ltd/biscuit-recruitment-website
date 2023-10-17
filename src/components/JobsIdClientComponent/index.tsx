"use client";

import ArrowIcon from "@/components/Icons/ArrowIcon";
import JobShareTabs from "@/components/JobShareTabs";
import styles from "@/components/JobsIdClientComponent/JobsIdClientComponent.module.scss";
import Tab from "@/components/Tab";
import Link from "next/link";
import { Col, Container, Row, Stack } from "react-bootstrap";

const JobsIdClientComponent = ({ job }) => {
  const { title, description, responsibilities, qualifications, type } = job;
  return (
    <>
      {/* <ConfirmationModal /> */}
      {/* <ApplyModal /> */}
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
                <JobShareTabs />
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
                {responsibilities.map((i: string) => (
                  <div className={styles.textBody}>
                    <span style={{ fontSize: "24px" }}>&bull;</span> {i}
                  </div>
                ))}
              </Row>
              <Row className="gap-1">
                <Col xs={12}>
                  <div className={styles.textSubtitle}>Qualifications:</div>
                </Col>
                <Col xs={12}>
                  {qualifications.map((i: string) => (
                    <div className={styles.textBody}>
                      <span style={{ fontSize: "24px" }}>&bull;</span> {i}
                    </div>
                  ))}
                </Col>
              </Row>
            </Row>
          </Col>

          <Col className={styles.shareMobile}>
            <div className={styles.textSubtitle}>Share</div>
            <JobShareTabs />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobsIdClientComponent;
