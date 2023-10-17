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
  const jobType = type === jobTypes.all ? "*" : type;

  return client.fetch(
    groq`*[_type == 'job' && type match $type && _score > 0]| score(title match $search) {_id, title, description, type}`,
    { type: jobType, search },
    {
      next: {
        revalidate: 3600,
      },
    }
  );
};

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
