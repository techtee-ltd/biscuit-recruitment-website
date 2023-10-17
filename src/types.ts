import { jobTypes } from "@/src/constants";

export type JobType = (typeof jobTypes)[keyof typeof jobTypes];

export type Job = {
  _id: string;
  title: string;
  description: string;
  type: string;
  responsibilities: string[];
  qualifications: string[];
};
