import sendgrid from "@sendgrid/mail";

if (
  !(
    process.env.SENDGRID_API_KEY &&
    process.env.BISCUIT_SENDGRID_TO_EMAIL &&
    process.env.BISCUIT_SENDGRID_FROM_EMAIL
  )
) {
  throw new Error("Sendgrid is required");
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default sendgrid;
