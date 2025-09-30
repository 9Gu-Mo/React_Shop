"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function MotionTest() {
  const [visible, setVisible] = useState(false);
  const clickVisible = () => {
    setVisible(!visible);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transiton: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="rounded bg-blue-500 px-6 py-3 text-white"
        onClick={clickVisible}
      >
        hover
      </motion.button>

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 top-0 z-50 bg-black/50"
          >
            <motion.button onClick={clickVisible}>close</motion.button>
            <motion.div className="rounded bg-white p-5">
              framer motion
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-2"
      >
        <motion.li>
          <div>리스트</div>
        </motion.li>
      </motion.ul>
    </>
  );
}
