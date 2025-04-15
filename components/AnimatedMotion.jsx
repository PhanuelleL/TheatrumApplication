import { motion } from "framer-motion";
import InstallPrompt from "@/components/InstallPrompt";

export default function AnimatedMotion() {
 return (
  <motion.div
   initial={{ scale: 0.5 }}
   animate={{ scale: [1, 1.2, 1] }}
   transition={{
    duration: 0.9,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
   }}
   className="bg-black text-yellow-200 text-1xl rounded-xl p-4 mt-6 shadow-lg"
  >
   <InstallPrompt />
  </motion.div>
 );
}