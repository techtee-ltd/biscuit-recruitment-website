import { jobTypes } from "@/src/constants";
import { PortableTextProps } from "@portabletext/react";

export type JobType = (typeof jobTypes)[keyof typeof jobTypes];

export type Job = {
  _id: string;
  title: string;
  summaryDescription: string;
  description: string;
  type: string;
  responsibilities: string[];
  qualifications: string[];
  [key: string]: any;
};

export type Journal = {
  [key: string]: any;
  title: string;
  coverImage: any;
  content?: any; // PortableTextProps<any>;
  _createdAt: any;
};
