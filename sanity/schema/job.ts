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
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Slug for the job listing click generate to add new",
      options: {
        source: "title",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "summaryDescription",
      type: "text",
      title: "Summary Description",
      description: "Brief summary of the job",
      validation: (Rule: any) => Rule.required(),
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
      name: "sector",
      title: "Sector",
      description: "Industry sector of the job",
      type: "array",
      of: [{ type: "reference", to: [{ type: "sector" }] }],
    },
    {
      name: "jobRef",
      type: "string",
      title: "Job Ref",
      description: "Unique identifier for the job listing",
      validation: (Rule: any) => Rule.required(),
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
    {
      name: "benefits",
      type: "array",
      title: "Benefits",
      of: [{ type: "string" }],
      description: "Array of job benefits",
    },
    {
      name: "location",
      type: "string",
      title: "Location",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'workingHours',
      type: 'string',
      title: 'Working Hours',
      options: {
        list: [
          {title: 'Full-time', value: 'full-time'},
          {title: 'Part-time', value: 'part-time'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'duration',
      type: 'string',
      title: 'Duration',
      description: 'Duration of the job (e.g. 3 months, 1 year)',
    },
    {
      name: 'salaryFrom',
      type: 'number',
      title: 'Salary From',
      description: 'Starting salary for the job',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'salaryTo',
      type: 'number',
      title: 'Salary To',
      description: 'Maximum salary for the job',
    },
    {
      name: 'salaryFrequency',
      type: 'string',
      title: 'Salary Frequency',
      description: 'Frequency of salary payments (e.g. monthly, annually)',
      options: {
        list: [
          {title: 'Per Year', value: 'per-year'},
          {title: 'Per Month', value: 'per-month'},
          {title: 'Per Week', value: 'per-week'},
          {title: 'Per Day', value: 'per-dat'},
          {title: 'Per Hour', value: 'per-hour'},
        ],
      },
    },
    {
      name: 'currency',
      type: 'string',
      title: 'Currency',
      description: 'Currency used for salary',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          {title: 'GBP', value: 'GBP'},
          {title: 'USD', value: 'USD'},
          {title: 'EUR', value: 'EUR'},
        ],
      },
    },
    {
      name: 'closingDate',
      title: 'Closing Date',
      type: 'datetime',
      description: 'Deadline for applications',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      of: [{type: 'string'}],
      description: 'Array of keywords related to the job',
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      description: 'Whether the job is a featured listing or not',
    },
  ],
};

export default job;
