import styles from "@/src/app/(app)/philosophy/philosophy.module.scss";
import HowWeWork from "@/src/components/HowWeWork";
import TextImage from "@/src/components/TextImage";
import { Col, Row } from "react-bootstrap";

const PhilosophyPage = () => {
  return (
    <Row className={`row-gap-5 ${styles.container}`}>
      <Row>
        <Col xs={12}>
          <h1 className={styles.h1}>
            We truly understand the importance of building relationships with
            clients and candidates alike, allowing us to fully understand hiring
            needs and never compromising on quality.
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextImage
            title="Our Philosophy"
            color="#F2D8D8"
            content={[
              "We believe that the art of matching candidate personalities to company cultures is as important as the science of matching skill sets to jobs. We work to get to know you and what makes your business tick at the same time as taking a personal interest in the career aspirations and working style of our candidates.",
              "From private families and entrepreneurs to start-ups and major corporations, our boutique agency is in the business of connecting people – and we never forget it. Humans helping humans. And it shines through in the way our consultants get to know the real you and understand what you’re looking for. That’s what makes us Biscuit.",
              "We are small, and we will always be small; it is the only way to maintain our personal touch. Our consultants aren’t ruled by short-term targets, because we want to build long-term relationships. We have a genuine interest in the industries we work with, and you will be paired with a consultant who has the best knowledge in your area.",
              "We get it.",
            ]}
            imgSrc={"/philosophy-page-1.jpg"}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextImage
            title="Our Clients"
            color="#F2D8D8"
            content={[
              "We meet with all of our clients and seek to understand their needs, from filling a specific vacant position to consulting on support staff infrastructure for new or expanding businesses.",
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextImage
            title="Candidates"
            color="#545B77"
            content={[
              "Our candidates benefit from our well-established connections and network. Our candidates are also our friends. We wouldn’t be Biscuit without great candidates, which is why we pride ourselves on caring and maintaining great relationships. Your professional fulfilment is what our success looks like.",
              "We look for individuality and talent in our candidates, not just a list of competencies. Being a Biscuit candidate means owning it, backing yourself and making it happen.",
              "Own It. Be it. Become it. Become you. Be the You you want to be. Create your ideal tomorrow today. The stories we tell about ourselves define us. Take control of your story. Redefine your future. The decisions you make today will shape your future tomorrow.",
            ]}
            imgSrc="/philosophy-page-2.jpg"
          />
        </Col>
      </Row>
      <Row>
        <HowWeWork />
      </Row>
    </Row>
  );
};

export default PhilosophyPage;
