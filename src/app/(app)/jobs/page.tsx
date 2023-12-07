"use client";

import styles from "@/src/app/(app)/jobs/jobs.module.scss";
import { getJobs } from "@/sanity/sanity.query";
import JobCardList from "@/src/components/JobCardList";
import JobSearchBar from "@/src/components/JobSearchBar";
import JobTypeFilter from "@/src/components/JobTypeFilter";
import { jobTypes } from "@/src/constants";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Pagination from "@/src/components/Pagination";

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
  const [page, setPage] = useState(1);

  const pageIndex = page;
  const JOBS_PER_PAGE = 10;

  console.log(pageIndex);

  const isFirstPage = pageIndex < 2;
  const isLastPage = jobPosts.length < JOBS_PER_PAGE;

  useEffect(() => {
    const fetchData = async () => {
      let params = {
        type: activeType,
        searchValue: searchValue,
        pageIndex: (pageIndex - 1) * JOBS_PER_PAGE,
        limit: pageIndex * JOBS_PER_PAGE,
      };

      // Check if one state has a value and clear the other state
      if (searchValue && activeType !== jobTypes.all) {
        setPage(1);
        setSearchValue("");
        params = {
          ...params,
          searchValue: "", // Clear the searchValue
        };
      } else if (searchValue) {
        setPage(1);
        params = {
          ...params,
          type: jobTypes.all, // Set to your default value or clear it accordingly
        };
      } else if (activeType !== jobTypes.all) {
        setPage(1);
        params = {
          ...params,
          searchValue: "", // Clear the searchValue
        };
      }

      const response = await getJobs(params);
      setJobPosts(response);
    };

    const debouncedFetchData = debounce(fetchData, 500);
    debouncedFetchData();
  }, [activeType, searchValue, pageIndex]);

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
          <Pagination
            pageIndex={pageIndex}
            isFirstPage={isFirstPage}
            isLastPage={isLastPage}
            setPage={setPage}
          />
        </div>
      </div>
    </Form>
  );
};

export default JobsPage;
