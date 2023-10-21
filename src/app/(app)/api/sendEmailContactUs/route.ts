import sendgrid from "@/sendgridClient";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const { firstName, lastName, email, inquiry } = body;

    if (!process.env.BISCUIT_SENDGRID_FROM_EMAIL) {
      throw new Error("Sendgrid FROM email is required");
    }

    await sendgrid
      .send({
        to: process.env.BISCUIT_SENDGRID_TO_EMAIL,
        from: process.env.BISCUIT_SENDGRID_FROM_EMAIL,
        subject: `Inquiry from ${email}`,
        html: `
            <div>
                <p>Inquiry: ${inquiry}
                <p>First name: ${firstName}</p>
                <p>Last name: ${lastName}</p>
                <p>Email: ${email}</p>
            </div>
        `,
      })
      .catch((e) => {
        throw new Error(`${e}`);
      });
    return Response.json({});
  } catch (error) {
    console.error("Something went wrong: ", error);
  }
};
