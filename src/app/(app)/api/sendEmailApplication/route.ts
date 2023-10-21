import sendgrid from "@/sendgridClient";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const title = formData.get("title");
    const id = formData.get("_id");
    const email = formData.get("email");
    const about = formData.get("about");
    const file = formData.get("file") as Blob;
    const buffer = Buffer.from(await file.arrayBuffer()); // https://reacthustle.com/blog/how-to-create-react-multiple-file-upload-using-nextjs-and-typescript#step-5-implementing-the-upload-api
    const applicantFullName = `${firstName} ${lastName}`;

    if (!process.env.BISCUIT_SENDGRID_FROM_EMAIL) {
      throw new Error("Sendgrid FROM email is required");
    }

    await sendgrid
      .send({
        to: process.env.BISCUIT_SENDGRID_TO_EMAIL,
        from: process.env.BISCUIT_SENDGRID_FROM_EMAIL,
        subject: `Application for ${title} from ${applicantFullName}`,
        html: `<div>
    <div>${title}</div>
    <div>Job ID: ${id}</div>
    <br />
    <div>Applicant Details</div>
    <div>First Name: ${firstName}</div>
    <div>Last Name: ${lastName}</div>
    <div>Email: ${email}</div>
    <div>About: ${about}</div>
    </div>`,
        attachments: [
          {
            content: buffer.toString("base64"),
            filename: `${lastName}-${firstName}-${title}`,
            type: "application/pdf",
            disposition: "attachment",
          },
        ],
      })
      .catch((e) => {
        throw new Error(`${e}`);
      });
    return new Response(null, { status: 200 });
  } catch (error) {
    console.error("Something went wrong: ", error);
  }
};
