"use client";

import styles from "@/src/components/Footer/Footer.module.scss";
import FooterInfo from "@/src/components/FooterInfo";
import FooterLinks from "@/src/components/FooterLinks";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <div className={styles.border} />
      </Row>
      <Container fluid>
        <Row className={styles.footerContainer}>
          <Col xs={12} md={6} lg={2}>
            <FooterLinks />
          </Col>
          <Col xs={12} md={6} lg={10} xl={9}>
            <FooterInfo />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
