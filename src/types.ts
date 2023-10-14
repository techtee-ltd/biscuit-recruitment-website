import { jobTypes } from "@/constants";

export type jobType = (typeof jobTypes)[keyof typeof jobTypes];
