import { defineType, defineField, defineArrayMember } from "sanity";

export const pages = defineType({
  title: "Pages",
  name: "pages",
  type: "document",
  fields: [
    defineField({
      title: "Page Title",
      name: "page",
      type: "string",
    }),
    defineField({
      title: "Page Main Title",
      name: "pageMainTitle",
      type: "text",
    }),
    defineField({
      title: 'slug',
      name: 'Slug',
      type: 'slug',
      options: {
        source: "page",
      },
    }),
    defineField({
      title: "Page Items",
      name: "pageItems",
      type: "array",
      of: [defineArrayMember({ type: "pageSection" })],
    }),
  ],
});
