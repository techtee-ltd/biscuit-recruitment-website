"use client";

import styles from "@/components/JobTypeFilter/JobTypeFilter.module.scss";
import Tab from "@/components/Tab/index";
import { jobTypes } from "@/constants";
import { jobType } from "@/types";

type JobTypeFilterProps = {
  activeType?: jobType;
  onClick: (prop: jobType) => void;
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
            onClick={() => onClick(jobType)}
          >
            {jobType}
          </Tab>
        );
      })}
    </div>
  );
};

export default JobTypeFilter;
