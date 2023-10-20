import styles from "@/src/components/HowWeWork/HowWeWork.module.scss";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

const HowWeWork = () => {
  const content = [
    [
      "We plan:",
      [
        "Meet with client to gain an understanding of the business and culture",
        "Gain a full understanding of the job brief including ideal fit and personality",
      ],
    ],
    [
      "Communication:",
      [
        "Arrange interviews with full brief for candidates and clients",
        "Ensure everyone is kept up to date on the process",
        "Taking feedback and providing honest communication",
        "Offer stage - manage full process including start date and contract",
      ],
    ],
    [
      "Ideas:",
      [
        "Research the market using our extensive network and knowledge",
        "Conduct in-depth interviews with the best potential candidates",
        "Understand and identify the best possible matches",
        "Create a tailored shortlist of candidate for interviews",
      ],
    ],
    [
      "Finalising:",
      ["Offer stage - manage full process including start date and contract"],
    ],
  ];

  const chunkedContent = content
    .map((_, index, array) => index % 2 === 0 && array.slice(index, index + 2))
    .filter((chunk) => chunk);

  return (
    <Row className="row-gap-3">
      <Col xs={12}>
        <Row className="pt-3 pb-2 pt-lg-5 pb-lg-4">
          <Col className="d-flex align-items-center gap-2">
            <div
              className={styles.circle}
              style={{
                backgroundColor: "",
              }}
            />
            <div>How We Work</div>
          </Col>
        </Row>
      </Col>
      <Col md={6} lg={4}>
        <div className={styles.imageContainer}>
          <Image
            src="/philosophy-page-3.jpg"
            alt="/philosophy-page-3.jpg"
            fill={true}
            objectFit="contain"
          />
        </div>
      </Col>
      <Col md={6} lg={8}>
        {chunkedContent.map((chunk: any, index) => (
          <Row key={index}>
            {chunk.map((arr: any, arrIndex: number) => (
              <Col key={arrIndex} xs={12} lg={6}>
                <div>{arr[0]}</div>
                <ul>
                  {arr[1].map((li: any, liIndex: number) => (
                    <li key={liIndex}>{li}</li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        ))}
      </Col>
    </Row>
  );
};

export default HowWeWork;
