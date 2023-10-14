import JobSearchBar from "@/components/JobSearchBar";
import JobTypeFilter from "@/components/JobTypeFilter";
import styles from "@/app/jobs/jobs.module.scss";
import JobCard from "@/components/JobCard";
import JobCardList from "@/components/JobCardList";

const JobsPage = () => {
  return (
    <div className={styles.jobsPage}>
      <div className={styles.jobSearchBar}>
        <JobSearchBar />
      </div>
      <div className={styles.jobsTypeFilter}>
        <JobTypeFilter onClick={null} />
      </div>
      <div className={styles.jobCards}>
        <JobCardList />
      </div>
    </div>
  );
};

export default JobsPage;
