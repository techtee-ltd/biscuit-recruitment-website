const journal = {
  name: "journal",
  title: "Journal",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: any) => Rule.required().error("A title is required."),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Slug for the job listing click generate to add new",
      options: {
        source: "title",
      },
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    },
    {
      title: "Cover Image",
      name: "coverImage",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },
  ],
};

export default journal;
