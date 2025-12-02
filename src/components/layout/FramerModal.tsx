"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { ReactNode, useEffect } from "react";
import IconClose from "../icon/IconClose";

type AnimationType = "fade" | "slideUp" | "slideRight" | "slideLeft" | "scale" | "rotate";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  animation?: AnimationType;
  bottom?: boolean;
  dark?: boolean;
}

export default function FramerModal({ isOpen, onClose, children, title, animation = "slideUp", bottom, dark }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const animations: Record<AnimationType, Variants> = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slideUp: {
      initial: { y: "100%" },
      animate: { y: 0 },
      exit: { y: "100%" },
    },
    slideRight: {
      initial: { x: "-100%" },
      animate: { x: 0 },
      exit: { x: "-100%" },
    },
    slideLeft: {
      initial: { x: "100%" },
      animate: { x: 0 },
      exit: { x: "100%" },
    },
    scale: {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0, opacity: 0 },
    },
    rotate: {
      initial: { rotate: -90, opacity: 0 },
      animate: { rotate: 0, opacity: 1 },
      exit: { rotate: 90, opacity: 0 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50"
          />

          <motion.div
            variants={animations[animation]}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              damping: 30,
              stiffness: 300,
            }}
            className={`fixed inset-x-0 bottom-0 z-50 flex flex-col ${dark ? `bg-black` : `bg-white`} ${bottom ? `h-[70vh] overflow-hidden rounded-t-xl` : `h-[100vh]`}`}
          >
            {/* header */}
            <div className="sticky top-0 z-10">
              <div className="flex items-center justify-between p-2">
                {title && (
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`${dark && `text-white`}`}
                  >
                    {title}
                  </motion.h2>
                )}
                <motion.button
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  onClick={onClose}
                  className="ml-auto rounded-full p-2 transition-colors"
                >
                  {dark ? <IconClose color="#ffffff" /> : <IconClose />}
                </motion.button>
              </div>
            </div>

            {/* content */}
            {/* <div className="flex-1 overflow-y-auto p-2">{children}</div> */}
            <div className={`flex-1 overflow-y-auto p-2 ${dark && `text-white`}`}>{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
