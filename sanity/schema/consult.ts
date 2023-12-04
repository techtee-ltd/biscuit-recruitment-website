const consult = {
  name: "consult",
  title: "Consult",
  type: "document",
  fields: [
    {
      name: "consult_name",
      type: "string",
      title: "Consult Name",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Slug for the job listing click generate to add new",
      options: {
        source: "consult_name",
      },
    },
  ],
};

export default consult;
