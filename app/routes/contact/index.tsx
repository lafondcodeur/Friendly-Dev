import { Form } from "react-router";
import type { Route } from "./+types";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const data = {
    name,
    email,
    subject,
    message,
  };

  return { message: "Form submitted succesfully", data };
}

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  return (
    <>
      <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900">
        <h1 className="text-3xl font-bold text-white mb-8 text-center ">
          Contact Me
        </h1>
        {actionData?.message ? (
          <p className="mb-6 p-4 bg-green-700 text-green-100 text-center rounded-lg border border-green-500 shadow-md  ">
            {actionData.message}
          </p>
        ) : null}
        <Form method="post" className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              FullName
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
            />
          </div>
          <div>
            <label
              htmlFor="Subject"
              className="block text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
            />
          </div>
          <div>
            <label
              htmlFor="Message"
              className="block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
            />
          </div>
          <button
            type="submit"
            className="w-full  text-white py-2 rounded-lg bg-blue-600 cursor-pointer hover:bg-blue-700"
          >
            Send Message
          </button>
        </Form>
      </div>
    </>
  );
};

export default ContactPage;
