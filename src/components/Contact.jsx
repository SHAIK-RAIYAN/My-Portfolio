import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { ContactForm } from "./ContactForm";
import PressureText from "./ui/PressureText";

function Contact() {
  return (
    <div
      className="flex flex-col justify-center items-center md:flex-row "
      id="contact">
      <div className="w-full flex justify-center items-center border-t md:border-t-0  border-gray-300 px-6 py-6">
        <div className="w-full max-w-md flex flex-col justify-center items-center text-center gap-3">
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
            minFontSize={30}
          />
          <p className="text-gray-500 text-sm md:text-base mt-2">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div className="text-xl md:text-2xl flex mt-4 gap-5">
            <a
              href="https://wa.me/8247460113"
              target="_blank"
              data-tooltip-id="main-tooltip"
              data-tooltip-content="Whatsapp">
              <FaWhatsapp className="hover:text-green-500 transition" />
            </a>
            <a
              href="https://instagram.com/_sk_raiyan_"
              target="_blank"
              data-tooltip-id="main-tooltip"
              data-tooltip-content="Instagram">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            <a
              href="https://linkedin.com/in/shaik-raiyan"
              target="_blank"
              data-tooltip-id="main-tooltip"
              data-tooltip-content="LinkedIn">
              <FaLinkedin className="hover:text-blue-600 transition" />
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
