// https://github.com/kapehe-ok/next-sanity-test/tree/main

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schema";

const config = defineConfig({
  title: "Biscuit Recruitment",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-01",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
