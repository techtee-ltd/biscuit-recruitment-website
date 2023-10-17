"use client";

import styles from "@/app/(app)/jobs/jobs.module.scss";
import JobCardList from "@/components/JobCardList";
import JobSearchBar from "@/components/JobSearchBar";
import JobTypeFilter from "@/components/JobTypeFilter";
import { jobTypes } from "@/constants";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getAllJobs } from "../../../../sanity/sanity.query";

const debounce = (func: (...args: any[]) => any, wait: number) => {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: any[]): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => func(...args), wait);
  };
};

const JobsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeType, setActiveType] = useState(jobTypes.all);
  const [jobPosts, setJobPosts] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllJobs({
        type: activeType,
        searchValue: searchValue,
      });
      setJobPosts(response);
    };
    const debouncedFetchData = debounce(fetchData, 500);
    debouncedFetchData();
  }, [activeType, searchValue]);

  return (
    <Form>
      <div className={styles.jobsPage}>
        <div className={styles.jobSearchBar}>
          <JobSearchBar onChange={setSearchValue} />
        </div>
        <div className={styles.jobsTypeFilter}>
          <JobTypeFilter onClick={setActiveType} activeType={activeType} />
        </div>
        <div className={styles.jobCards}>
          <JobCardList jobPosts={jobPosts} />
        </div>
      </div>
    </Form>
  );
};

export default JobsPage;
