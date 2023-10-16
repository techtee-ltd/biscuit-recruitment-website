import styles from "@/components/JobShareTabs/JobShareTabs.module.scss";
import Tab from "@/components/Tab";
import { Col, Row } from "react-bootstrap";

// TODO: implement the share function per social media

const socialMedia = ["Telegram", "Facebook", "Twitter", "LinkedIn"];

const JobShareTabs = () => {
  return (
    <Row className="gap-2 g-0">
      {socialMedia.map((i) => (
        <Col xs={"auto"}>
          <Tab key={i}>{i}</Tab>
        </Col>
      ))}
    </Row>
  );
};

export default JobShareTabs;