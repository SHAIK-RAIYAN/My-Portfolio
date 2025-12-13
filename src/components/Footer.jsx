import QuoteCard from "./ui/QuoteCard";

function Footer() {
  return (
    <div>
      <QuoteCard />
      <div className="flex flex-col justify-center items-center text-neutral-500 mt-10 mb-5">
        <p className="text-sm">
          Design & Developed by{" "}
          <span className="text-neutral-400 font-semibold">Shaik Raiyan</span>
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} . All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
