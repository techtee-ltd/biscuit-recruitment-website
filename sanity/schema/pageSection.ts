import { defineType } from "sanity";

export const pageSection = defineType({
  name: "pageSection",
  type: "object",
  title: "Page Section",
  fields: [
    {
      name: "sectionTitle",
      type: "string",
      title: "Section Title",
    },
    {
      name: "imagePosition",
      type: "string",
      title: "Image Position",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Middle", value: "middle" },
          { title: "Right", value: "right" },
        ],
        layout: "radio", // or 'dropdown' if you prefer a dropdown menu
      },
      initialValue: "middle", // default value
    },
    {
      name: "gridContent",
      type: "object",
      title: "Grid Content",
      fields: [
        {
          name: "richText1",
          type: "array",
          title: "Rich Text 1",
          of: [{ type: "block" }],
        },
        {
          name: "richText2",
          type: "array",
          title: "Rich Text 2",
          of: [{ type: "block" }],
        },
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true, // Enable hotspot cropping
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "sectionTitle",
      image: "gridContent.image",
      imagePosition: "imagePosition",
    },
    prepare(selection) {
      const { title, image, imagePosition } = selection;
      return {
        title: title,
        subtitle: `Image Position: ${imagePosition}`,
        media: image,
      };
    },
  },
});
