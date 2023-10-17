"use client";

import styles from "@/app/(app)/page.module.scss";
import StickyFooter from "@/components/StickyFooter";
import Image from "next/image";
import { Col, Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <Container fluid>
          <Col md={9}>
            <p className={styles.text}>
              A boutique recruitment agency that specialises in placing great
              people in great company
            </p>
          </Col>
        </Container>
        <Image
          src="/home-page-photo.jpeg"
          alt="home photo"
          fill={true}
          className={styles.image}
          priority={true}
        />
      </div>
      <div
        style={{
          height: "100px",
          width: "100%",
        }}
      />
    </>
  );
};

export default Home;
