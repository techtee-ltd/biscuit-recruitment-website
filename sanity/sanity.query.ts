import { jobTypes } from "@/src/constants";
import { groq } from "next-sanity";
import client from "./sanity.client";

export const getAllJobs = ({
  type,
  searchValue,
}: {
  type?: string;
  searchValue?: string;
}) => {
  const search = "*" + searchValue + "*";
  const query =
    !type && !searchValue
      ? groq`*[_type == 'job']{_id, title, description, type}`
      : type === jobTypes.all
      ? groq`*[_type == 'job' && _score > 0] | score(title match $search) {_id, title, description, type}`
      : groq`*[_type == 'job' && type == $type && _score > 0]| score(title match $search) {_id, title, description, type}`;

  return client.fetch(
    query,
    { type, search },
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
