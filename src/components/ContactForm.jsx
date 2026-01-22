import emailjs from "@emailjs/browser";
import { useState } from "react";
import { cn } from "../utils/accernity";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError("Email service is not configured.");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: `${formData.firstname} ${formData.lastname}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        PUBLIC_KEY,
      );

      setLoading(false);
      setSent(true);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Failed to send email. Try again later.");
    }
  };

  const inputsDisabled = loading || sent;

  return (
    <div className="shadow-input mx-auto w-full rounded-none border-t border-b border-dashed border-neutral-600 p-4 md:border-t-0 md:p-8">
      <h1 className="flex items-end justify-center gap-2 text-4xl font-bold text-neutral-300 md:justify-start md:text-4xl">
        Contact
        <div className="mb-1 hidden h-0.5 w-full bg-neutral-600 md:block"></div>
      </h1>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-6">
          <div className="hidden w-50 flex-col gap-2 md:flex">
            <div id="card" className="relative">
              <div
                id="cardImg"
                className="relative h-58 w-50 overflow-hidden rounded-xl border-6 border-neutral-800"
              >
                <img
                  src="/me.jpeg"
                  className="size-full object-cover"
                  alt="Profile Art"
                />
              </div>
              <div
                id="tag"
                className="center absolute right-0 bottom-0 h-8 w-32 rounded-tl-lg border-t-6 border-l-6 border-neutral-800 bg-[#0a0a0a] before:absolute before:-top-5.5 before:right-1.5 before:size-4 before:rounded-br-lg before:bg-transparent before:shadow-[4px_4px_0_#262626] after:absolute after:-top-4 after:right-0 after:size-4 after:rounded-br-lg after:shadow-[6px_6px_0_#0a0a0a]"
              >
                <div className="center z-10 w-[95%] gap-2 rounded-sm border border-emerald-500/30 bg-emerald-500/10 px-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <p className="text-xs text-emerald-300">Available</p>
                </div>
              </div>
              <div
                id="curve1"
                className="absolute bottom-1.5 left-14 size-4 rounded-br-lg bg-transparent shadow-[4px_4px_0_#262626]"
              ></div>
              <div
                id="curve2"
                className="absolute bottom-0 left-15.5 size-4 rounded-br-lg bg-transparent shadow-[4px_4px_0_#0a0a0a]"
              ></div>
            </div>
          </div>

          <div className="mb-4 flex w-full flex-col space-y-2 space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Raiyan"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
                disabled={inputsDisabled}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Shaik"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
                disabled={inputsDisabled}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="shaikraiyan2005@gmail.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={inputsDisabled}
              />
            </LabelInputContainer>
          </div>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            placeholder="Enter subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            disabled={inputsDisabled}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            disabled={inputsDisabled}
            className={cn(
              `placeholder-text-neutral-600 flex h-28 w-full rounded-md border-none bg-zinc-800 px-3 py-2 text-sm text-white shadow-[0px_0px_1px_1px_#404040] transition duration-400 placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
            )}
          />
        </LabelInputContainer>

        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

        <button
          className="group/btn center relative h-10 w-full gap-2 rounded-md bg-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900 font-medium text-white shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={inputsDisabled}
        >
          {loading && (
            <svg
              className="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}

          {loading ? "Sending..." : sent ? "Sent" : "Send Message"}

          {!inputsDisabled && <BottomGradient />}
        </button>

        <div className="from-transparen my-8 h-[1px] w-full bg-gradient-to-r via-neutral-700 to-transparent" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
