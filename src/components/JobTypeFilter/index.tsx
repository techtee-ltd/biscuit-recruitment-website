"use client";

import styles from "@/src/components/JobTypeFilter/JobTypeFilter.module.scss";
import Tab from "@/src/components/Tab/index";
import { jobTypes } from "@/src/constants";
import { Dispatch, SetStateAction } from "react";

import type { JobType } from "@/src/types";

type JobTypeFilterProps = {
  activeType?: JobType;
  onClick: Dispatch<SetStateAction<string>>;
};

const JobTypeFilter = ({
  activeType = jobTypes.all,
  onClick,
}: JobTypeFilterProps) => {
  return (
    <div className={styles.jobTypeFilter}>
      {Object.keys(jobTypes).map((jobType) => {
        return (
          <Tab
            key={jobType}
            variant="uppercase"
            state={activeType === jobType && "selected"}
            onClick={() => {
              onClick(jobType);
            }}
          >
            {jobType}
          </Tab>
        );
      })}
    </div>
  );
};

export default JobTypeFilter;
