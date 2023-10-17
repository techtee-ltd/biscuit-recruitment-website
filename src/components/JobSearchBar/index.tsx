"use client";

import { Form } from "react-bootstrap";
import styles from "@/components/JobSearchBar/JobSearchBar.module.scss";
import FormControl from "../FormControl";

const JobSearchBar = () => (
  <Form>
    <FormControl
      variant="uppercase"
      type="text"
      id="jobSearch"
      placeholder="Search"
    />
  </Form>
);

export default JobSearchBar;
