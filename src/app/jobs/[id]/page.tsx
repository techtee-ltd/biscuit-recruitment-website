"use client";

import styles from "@/app/jobs/[id]/jobsId.module.scss";
import ApplyModal from "@/components/ApplyModal";
import ConfirmationModal from "@/components/ConfirmationModal";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import JobShareTabs from "@/components/JobShareTabs";
import Tab from "@/components/Tab";
import Link from "next/link";
import { Col, Container, Row, Stack } from "react-bootstrap";

const JobsIdPage = ({ params }) => {
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
                Executive Assistant - Successful Boutique Investment Firm
              </Col>

              <Col xs={12}>
                <div className={styles.textSubtitle}>Job type</div>
                <Tab state="readOnly">Contract</Tab>
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
                <div>
                  Our client is an established and highly successful investment
                  firm that is headquarted in the US, with offices in both East
                  and West Coast. They are now looking for an EA to provide
                  utmost support to the brilliant MD based in the London office.
                  We are looking for a splendid individual who possesses
                  gravitas, agility and the ability to juggle multiple tasks at
                  once whilst being a collaborative thought partner to the MD.
                </div>
              </Row>

              <Row className="gap-1">
                <div className={styles.textSubtitle}>
                  Responsibilities include but are not limited to:
                </div>
                <div className={styles.textBody}>
                  <span style={{ fontSize: "24px" }}>&bull;</span> International
                </div>
              </Row>
              <Row className="gap-1">
                <Col xs={12}>
                  <div className={styles.textSubtitle}>Qualifications:</div>
                </Col>
                <Col xs={12}>
                  <div>
                    <span style={{ fontSize: "24px" }}>&bull;</span>{" "}
                    International
                  </div>
                  <div>
                    <span style={{ fontSize: "24px" }}>&bull;</span>{" "}
                    International
                  </div>
                  <div>
                    <span style={{ fontSize: "24px" }}>&bull;</span>{" "}
                    International
                  </div>
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

export default JobsIdPage;
