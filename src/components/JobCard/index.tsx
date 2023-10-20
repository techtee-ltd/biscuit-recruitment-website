"use client";

import styles from "@/src/components/JobCard/JobCard.module.scss";
import Tab from "@/src/components/Tab";
import { jobTypesColor } from "@/src/constants";
import Link from "next/link";
import { Stack } from "react-bootstrap";

import type { Job } from "@/src/types";

const JobCard = ({ jobPost }: { jobPost: Job }) => {
  const { _id, title, description, type } = jobPost;
  return (
    <div className={styles.jobCard}>
      <Stack gap={2}>
        <div className={styles.jobType}>
          <div
            className={styles.circle}
            style={{
              backgroundColor: jobTypesColor[type],
            }}
          />
          {type}
        </div>
        <div className={styles.title}>{title}</div>

        <div className={styles.description}>{description}</div>
      </Stack>
      <Link href={`/jobs/${_id}`}>
        <Tab variant="full">See More</Tab>
      </Link>
    </div>
  );
};

export default JobCard;
