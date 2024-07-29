import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import {
  StructureBuilder,
  StructureResolver,
  StructureResolverContext,
  deskTool,
} from "sanity/desk";
import schemas from "./sanity/schema";

const structure: StructureResolver = (
  S: StructureBuilder,
  context: StructureResolverContext
) => {
  return S.list()
    .title("BISCUIT")
    .items([
      S.listItem()
        .title("Active Jobs")
        .child(
          S.documentTypeList("job")
            .title("Jobs by Status")
            .filter("status == true")
        ),
      S.listItem()
        .title("In-Active Jobs")
        .child(
          S.documentTypeList("job")
            .title("Jobs by Status")
        ),
      S.listItem().title("Consults").child(S.documentTypeList("consult")),
      S.listItem()
        .title("Journals")
        .child(S.documentTypeList("journal").title("Journals")),
      S.listItem()
        .title("Privacy Policy")
        .child(S.documentTypeList("privacyPolicy").title("Privacy Policy")),
      S.listItem()
        .title("Sector")
        .child(S.documentTypeList("sector").title("Sector")),
      S.listItem()
        .title("Pages")
        .child(S.documentTypeList("pages").title("Pages")),
    ]);
};

const config = defineConfig({
  title: "Biscuit Recruitment",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-01",
  basePath: "/admin",
  plugins: [
    deskTool({
      structure,
    }),
    visionTool(),
  ],
  schema: { types: schemas },
});

export default config;
