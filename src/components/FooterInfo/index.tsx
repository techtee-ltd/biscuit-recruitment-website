import { Col, Container, Row } from "react-bootstrap";
import styles from "@/src/components/FooterInfo/FooterInfo.module.scss";
import ButtonXS from "@/src/components/ButtonXS";

const office = [
  {
    icon: <div className={styles.circleLondon} />,
    text: ["London", "Biscuit 2.0", "+44 20 7698 2726"],
  },
  {
    icon: <div className={styles.circleNewYork} />,
    text: ["New York", "Biscuit 2.0", "+1 (646) 712 9199"],
  },
];

const copyright = {
  icon: <div>©</div>,
  text: [
    "2023",
    "BiscuitRequirement Ltd,",
    "London & New York",
    "All rights reserved",
  ],
};

const FooterInfo = () => {
  return (
    <Container fluid>
      <Row className={styles.columns}>
        {office.map(({ icon = null, text }, idx) => {
          return (
            <Col key={text[0] + idx} xs={12} lg={4}>
              {text.map((i, index) => {
                const showIcon = index === 0 ? icon : <div />;
                const textStyle = `${styles.text} ${
                  index === 0 && styles.textBold
                }`;
                const textContent =
                  index === 2 ? <a href={`tel:${i}`}>{i}</a> : i;
                return (
                  <Row key={index} className="d-flex align-items-center">
                    <Col xs={1}>{showIcon}</Col>
                    <Col className={textStyle}>{textContent}</Col>
                  </Row>
                );
              })}
            </Col>
          );
        })}
        <Col xs={12} lg={4}>
          <Row className="d-flex align-items-center">
            <Col xs={1}>{copyright.icon}</Col>
            <Col className={`${styles.text} ${styles.textBold}`}>2023</Col>
          </Row>
          <Row>
            <Col xs={1} />
            <Col className={styles.text}>BiscuitRequirement Ltd,</Col>
          </Row>
          <Row>
            <Col xs={1} />
            <Col className={styles.text}>London & New York</Col>
          </Row>
          <Row>
            <Col xs={1} />
            <Col className={styles.text}>All rights reserved</Col>
          </Row>
          <Row>
            <Col xs={1} />
            <Col>
              <ButtonXS href="/privacy-policy">Privacy Policy</ButtonXS>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterInfo;
