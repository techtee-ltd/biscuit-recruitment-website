import { jobTypes } from "@/src/constants";
import { groq } from "next-sanity";
import client from "./sanity.client";
import { cache } from "react";

export const getJobs = async ({
  type,
  searchValue,
  pageIndex,
  limit,
}: {
  type?: string;
  searchValue?: string;
  pageIndex: number;
  limit: number;
}) => {
  if (client) {
    const search = "*" + searchValue + "*";
    const jobType = type === jobTypes.all ? "*" : type;

    return (
      (await client.fetch(
        groq`*[_type == 'job' && type match $type && _score > 0 && status == true]| score(title match $search)[$pageIndex...$limit] {_id, title, summaryDescription, type}`,
        { type: jobType, search, pageIndex, limit },
        {
          next: {
            revalidate: 60,
          },
        }
      )) || []
    );
  }
  return [];
};

export const getJob = (id: string) =>
  client.fetch(
    groq`*[_id == $id][0]{_id, title, description, type, qualifications, responsibilities}`,
    { id },
    {
      next: {
        revalidate: 60,
      },
    }
  );

export const getPrivacyPolicy = () =>
  client.fetch(
    groq`*[_type == "privacyPolicy"][0]{content}`,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );

export const getJournalsForMain = () =>
  client.fetch(
    groq`*[_type == "journal"]| order(_createdAt desc){_id, title, subtitle, _createdAt}`,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );

export const getJournalsForSidebar = () =>
  client.fetch(
    groq`*[_type == "journal"]| order(_createdAt desc)[0...3]{_id, title, subtitle, coverImage, content}`,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );

export const getJournal = (id: string) =>
  client.fetch(
    groq`*[_id == $id][0]{title, subtitle, coverImage, content, _createdAt}`,
    { id },
    {
      next: {
        revalidate: 60,
      },
    }
  );
