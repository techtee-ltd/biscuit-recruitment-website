"use client";

import { Col, Row } from "react-bootstrap";
import JobCard from "@/components/JobCard";

const JobCardList = ({ jobPosts }) => (
  <Row className="row-gap-4">
    {jobPosts.map((jobPost) => (
      <Col xs={12} md={6} lg={4}>
        <JobCard jobPost={jobPost} />
      </Col>
    ))}
  </Row>
);

export default JobCardList;
