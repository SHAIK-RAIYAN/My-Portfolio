import QuoteCard from "./ui/QuoteCard";

function Footer() {
  return (
    <div>
      <QuoteCard />
      <div className="mt-10 mb-5 flex flex-col items-center justify-center text-neutral-500">
        <p className="text-sm">
          Design & Developed by{" "}
          <span className="font-semibold text-neutral-400">Shaik Raiyan</span>
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} . All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
