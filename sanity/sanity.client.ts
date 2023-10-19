import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-01",
  useCdn: false,
  perspective: "published",
};

const client = createClient(config);

export default client;
