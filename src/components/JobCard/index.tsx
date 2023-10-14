"use client";

import styles from "@/components/JobCard/JobCard.module.scss";
import Tab from "@/components/Tab";
import { Stack } from "react-bootstrap";

const JobCard = () => (
  <div className={styles.jobCard}>
    <Stack gap={2}>
      <div className={styles.jobType}>
        <div
          className={styles.circle}
          style={{
            backgroundColor: "red",
          }}
        />
        Temporary
      </div>
      <div className={styles.title}>
        Executive Assistant - Successful Boutique Investment Firm,
      </div>

      <div>
        Our client is an established and highly successful investment firm that
        is headquarted in the US; they are now looking for an EA to provide
        utmost support to the brilliant MD based in the London office.{" "}
      </div>
    </Stack>
    <Tab variant="full">See More</Tab>
  </div>
);

export default JobCard;
