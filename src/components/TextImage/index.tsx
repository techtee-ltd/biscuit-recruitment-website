import { Col, Row } from "react-bootstrap";
import styles from "@/src/components/TextImage/TextImage.module.scss";
import Image from "next/image";

const TextImage = ({
  content,
  title,
  color,
  imgSrc = "",
}: {
  content: string[];
  title: string;
  color: string;
  imgSrc?: string;
}) => {
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
                backgroundColor: color,
              }}
            />
            <div>{title}</div>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          {chunkedContent.map((chunk: any, index) => (
            <Col xs={12} lg={6} key={index}>
              {chunk.map((paragraph: string, pIndex: number) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </Col>
          ))}
        </Row>
      </Col>
      <Col md={6} lg={4}>
        {imgSrc && (
          <div className={styles.imageContainer}>
            <Image src={imgSrc} alt={imgSrc} fill={true} objectFit="contain" />
          </div>
        )}
      </Col>
    </Row>
  );
};

export default TextImage;
