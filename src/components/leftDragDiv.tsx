import { motion } from "framer-motion";
import { leftBoxConstraintsProps } from "./background";

export default function LeftDragDiv({
  leftBoxConstraints,
}: leftBoxConstraintsProps) {
  return (
    <motion.div
      drag="x"
      dragConstraints={leftBoxConstraints}
      dragMomentum={true}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="w-1/3 bg-orange-500 absolute left-0 top-0 bottom-0 z-50 opacity-40  "
    ></motion.div>
  );
}
