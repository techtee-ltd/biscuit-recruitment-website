"use client";

import { Form } from "react-bootstrap";
import styles from "@/components/JobSearchBar/JobSearchBar.module.scss";

const JobSearchBar = () => (
  <Form>
    <Form.Control
      className={styles.searchBar}
      type="text"
      id="jobSearch"
      placeholder="Search"
    />
  </Form>
);

export default JobSearchBar;
