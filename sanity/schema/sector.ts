import { defineField, defineType } from "sanity";

const sector = defineType({
  name: "sector",
  type: "document",
  title: "Job Sectors",
  fields: [
    defineField({
      name: "sectorName",
      type: "string",
      title: "Sector",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "slug",
      options: {
        source: "sectorName",
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default sector;
