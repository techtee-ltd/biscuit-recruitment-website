"use client";

import FormControl from "@/components/FormControl";
import { Dispatch, SetStateAction } from "react";

const JobSearchBar = ({
  onChange,
}: {
  onChange: Dispatch<SetStateAction<string>>;
}) => (
  <FormControl
    variant="uppercase"
    type="text"
    id="jobSearch"
    placeholder="Search"
    onChange={(e: any) => onChange(() => e.target.value)}
  />
);

export default JobSearchBar;
