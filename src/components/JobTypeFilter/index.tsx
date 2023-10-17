"use client";

import styles from "@/components/JobTypeFilter/JobTypeFilter.module.scss";
import Tab from "@/components/Tab/index";
import { jobTypes } from "@/constants";
import { JobType } from "@/types";
import { Dispatch, SetStateAction } from "react";

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
