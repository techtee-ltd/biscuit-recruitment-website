import { groq } from "next-sanity";
import client from "./sanity.client";

export const getTest = () => client.fetch(groq`*[_type == 'test']{ title}`);
