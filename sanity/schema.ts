const jobDetails = {
  name: "jobDetails",
  type: "object",
  title: "Job Details",
  fields: [
    {
      name: "jobType",
      type: "string",
      title: "Job Type",
      options: {
        list: [
          { title: "Contract", value: "Contract" },
          //... Add more types if needed
        ],
      },
    },
  ],
};

const jobResponsibilities = {
  name: "jobResponsibilities",
  type: "object",
  title: "Job Responsibilities",
  fields: [
    {
      name: "tasks",
      type: "array",
      of: [{ type: "string" }],
      title: "Responsibilities",
      description: "List the tasks and duties for the job.",
      validation: (Rule: any) =>
        Rule.required()
          .min(1)
          .error("At least one responsibility is required."),
    },
  ],
};

const jobQualifications = {
  name: "jobQualifications",
  type: "object",
  title: "Job Qualifications",
  fields: [
    {
      name: "requirements",
      type: "array",
      of: [{ type: "string" }],
      title: "Qualifications",
      description: "List the qualifications needed for the job.",
      validation: (Rule: any) =>
        Rule.required().min(1).error("At least one qualification is required."),
    },
  ],
};

const jobPost = {
  name: "jobPost",
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
      name: "jobDescription",
      type: "string",
      title: "Job Description",
      description: "Provide a brief summary about the job.",
      validation: (Rule: any) =>
        Rule.required()
          .error("A description is required.")
          .max(1000)
          .warning("Description is too long!"),
    },
    {
      name: "details",
      type: "jobDetails",
      title: "Job Details",
    },
    {
      name: "responsibilities",
      type: "jobResponsibilities",
      title: "Responsibilities",
    },
    {
      name: "qualifications",
      type: "jobQualifications",
      title: "Qualifications",
    },
  ],
};

const schemas = [jobPost, jobDetails, jobResponsibilities, jobQualifications];

export default schemas;
