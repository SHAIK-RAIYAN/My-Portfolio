import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { ContactForm } from "./ContactForm";
import PressureText from "./ui/PressureText";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center" id="contact">
      <div className="mb-5 flex w-full items-center justify-center rounded-4xl py-6">
        <div className="flex w-full max-w-md flex-col items-center justify-center gap-3 px-1 text-center">
          <PressureText
            text="Get In Touch!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#FFF"
            strokeColor="#ff0000"
            minFontSize={28}
          />
          <p className="mt-2 text-sm text-gray-500 md:text-base">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div className="mt-4 flex gap-5 text-xl md:text-2xl">
            <a
              href="https://wa.me/8247460113"
              target="_blank"
              data-tooltip-id="main-tooltip"
              data-tooltip-content="Whatsapp"
            >
              <FaWhatsapp className="transition hover:text-green-400" />
            </a>
            <a
              href="https://instagram.com/_sk_raiyan_"
              target="_blank"
              data-tooltip-id="main-tooltip"
              data-tooltip-content="Instagram"
            >
              <FaInstagram className="transition hover:text-pink-400" />
            </a>
            <a
              href="https://linkedin.com/in/shaik-raiyan"
              target="_blank"
              data-tooltip-id="main-tooltip"
              data-tooltip-content="LinkedIn"
            >
              <FaLinkedin className="transition hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      <ContactForm />

      <Tooltip
        id="main-tooltip"
        place="top"
        variant="light"
        style={{
          backgroundColor: "#e5e5e5",
          color: "#000",
          borderRadius: "6px",
          fontSize: "10px",
        }}
      />
    </div>
  );
}

export default Contact;
