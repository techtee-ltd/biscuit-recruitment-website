const privacyPolicy = {
  name: "privacyPolicy",
  title: "Privacy Policy",
  type: "document",
  fields: [
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};

export default privacyPolicy;
