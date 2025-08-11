import { Resend } from "resend";
import { RESEND_API_KEY } from "$env/static/private";

const resend = new Resend(RESEND_API_KEY);

export async function POST() {
	try {
		const { data, error } = await resend.emails.send({
			from: "Acme <onboarding@resend.dev>",
			to: ["delivered@resend.dev"],
			subject: "Hello world",
			html: `<p>Hello world</p>`,
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json({ data });
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
