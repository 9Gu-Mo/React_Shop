import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import IconUpArrow from "./icon/IconUpArrow";

export default function FixButton() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (e) => {
      setVisible(e > 50);
    });
  }, [scrollY]);

  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-4 right-4 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white shadow-md"
        >
          <motion.button type="button" onClick={handleClick}>
            <IconUpArrow />
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
