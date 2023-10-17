const job = {
  name: "job",
  title: "Jobs",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Job Title",
      description: "Enter the title of the job posting.",
      validation: (Rule: any) => Rule.required().error("A title is required."),
    },
    {
      name: "description",
      type: "text",
      title: "Job Description",
      description: "Provide a brief summary about the job.",
      validation: (Rule: any) =>
        Rule.required()
          .error("A description is required.")
          .max(1000)
          .warning("Description is too long!"),
    },
    {
      name: "type",
      type: "string",
      title: "Job Type",
      options: {
        list: [
          { title: "Contract", value: "contract" },
          { title: "Temporary", value: "temporary" },
          { title: "Permanent", value: "permanent" },
        ],
      },
    },
    {
      name: "responsibilities",
      type: "array",
      of: [{ type: "string" }],
      title: "Job Responsibilities",
      description: "List the tasks and duties for the job.",
      validation: (Rule: any) =>
        Rule.required()
          .min(1)
          .error("At least one responsibility is required."),
    },
    {
      name: "qualifications",
      type: "array",
      of: [{ type: "string" }],
      title: "Job Qualifications",
      description: "List the qualifications needed for the job.",
      validation: (Rule: any) =>
        Rule.required().min(1).error("At least one qualification is required."),
    },
  ],
};

const schemas = [job];

export default schemas;
