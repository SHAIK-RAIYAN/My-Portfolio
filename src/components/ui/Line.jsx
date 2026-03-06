// eslint-disable-next-line
import { motion } from "framer-motion";

export default function Line() {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0.5 }}
      whileInView={{ width: "100%", opacity: 1 }}
      transition={{ type: "tween", duration: 1.5 }}
      viewport={{ margin: "0px 0px -20% 0px", once: true }}
      className="border-border-primary mb-6 border-b-2"
    />
  );
}
