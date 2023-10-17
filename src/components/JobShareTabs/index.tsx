import styles from "@/src/components/JobShareTabs/JobShareTabs.module.scss";
import Tab from "@/src/components/Tab";
import { Col, Row } from "react-bootstrap";

// TODO: implement the share function per social media

const socialMedia = ["Telegram", "Facebook", "Twitter", "LinkedIn"];

const JobShareTabs = () => {
  return (
    <Row className="gap-2 g-0">
      {socialMedia.map((i) => (
        <Col key={i} xs={"auto"}>
          <Tab>{i}</Tab>
        </Col>
      ))}
    </Row>
  );
};

export default JobShareTabs;
