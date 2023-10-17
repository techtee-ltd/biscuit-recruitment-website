"use client";

import styles from "@/app/(app)/jobs/jobs.module.scss";
import JobCardList from "@/components/JobCardList";
import JobSearchBar from "@/components/JobSearchBar";
import JobTypeFilter from "@/components/JobTypeFilter";
import { jobTypes } from "@/constants";
import { useEffect, useState } from "react";
import { getAllJobs } from "../../../../sanity/sanity.query";

const JobsPage = () => {
  const [activeType, setActiveType] = useState(jobTypes.all);
  const [jobPosts, setJobPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllJobs(activeType);
      setJobPosts(response);
    }
    fetchData();
  }, [activeType]);

  console.log("jobPosts ", jobPosts);

  return (
    <div className={styles.jobsPage}>
      <div className={styles.jobSearchBar}>
        <JobSearchBar />
      </div>
      <div className={styles.jobsTypeFilter}>
        <JobTypeFilter onClick={setActiveType} activeType={activeType} />
      </div>
      <div className={styles.jobCards}>
        <JobCardList jobPosts={jobPosts} />
      </div>
    </div>
  );
};

export default JobsPage;
