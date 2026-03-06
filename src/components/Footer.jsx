import QuoteCard from "./ui/QuoteCard";

function Footer() {
  return (
    <div>
      <QuoteCard />
      <div className="center text-text-muted mt-10 mb-5 flex-col">
        <p className="text-sm">
          Design & Developed by{" "}
          <span className="text-text-secondary font-semibold">
            Shaik Raiyan
          </span>
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} . All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
