"use client";

import { Col, Row } from "react-bootstrap";
import JobCard from "@/components/JobCard";

const JobCardList = () => (
  <Row className="row-gap-4">
    {Array.from({ length: 10 }).map((i) => (
      <Col xs={12} md={6} lg={4}>
        <JobCard />
      </Col>
    ))}
  </Row>
);

export default JobCardList;
