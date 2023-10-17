import { jobTypes } from "@/constants";
import { groq } from "next-sanity";
import client from "./sanity.client";

export const getAllJobs = (type?: string) => {
  const query =
    type === jobTypes.all
      ? groq`*[_type == 'job']{_id, title, description, type}`
      : groq`*[_type == 'job' && type == $type]{_id, title, description, type}`;

  return client.fetch(
    query,
    { type },
    {
      next: {
        revalidate: 3600,
      },
    }
  );
};

export const getJobsByType = (type: string) =>
  client.fetch(
    groq`*[_type == 'job' && type == $type]{_id, title, description, type}`,
    { type },
    {
      next: {
        revalidate: 3600,
      },
    }
  );

export const getJob = (id: string) =>
  client.fetch(
    groq`*[_id == $id][0]{_id, title, description, type, qualifications, responsibilities}`,
    { id },
    {
      next: {
        revalidate: 3600,
      },
    }
  );
