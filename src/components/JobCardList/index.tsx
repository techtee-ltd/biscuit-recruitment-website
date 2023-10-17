"use client";

import JobCard from "@/src/components/JobCard";
import { Col, Row } from "react-bootstrap";

import type { Job } from "@/src/types";

const JobCardList = ({ jobPosts }: { jobPosts: Job[] }) => (
  <Row className="row-gap-4">
    {jobPosts.map((jobPost) => (
      <Col key={jobPost._id} xs={12} md={6} lg={4}>
        <JobCard jobPost={jobPost} />
      </Col>
    ))}
  </Row>
);

export default JobCardList;
