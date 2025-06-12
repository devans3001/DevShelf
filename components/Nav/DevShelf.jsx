import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const DevShelf = ({children}) => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current.removeEventListener("mousemove", handleMouseMove);
      btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.p
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950  font-medium bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent text-3xl"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
       {children}
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-red-100"
      />
    </motion.p>
    //  <motion.p
    //                 className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent text-3xl"
    //                 whileHover={{ scale: 1.05 }}
    //               >
    //                 DevShelf
    //               </motion.p>
  );
};

export default DevShelf;
