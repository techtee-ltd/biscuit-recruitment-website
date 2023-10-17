import { groq } from "next-sanity";
import client from "./sanity.client";

export const getJobPosts = () => client.fetch(groq`*[_type == 'jobPost']{_id}`);
