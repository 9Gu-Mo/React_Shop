"use client";

// component
import Link from "next/link";
import IconCart from "../icon/IconCart";
import IconDarkMode from "../icon/IconDarkMode";
import IconMenu from "../icon/IconMenu";
import IconWhiteMode from "../icon/IconWhiteMode";

// types
import { Category } from "@/src/types/product.types";

// hook, fn
import { fetchCategory } from "@/src/lib/api/products";
import { useEffect, useState } from "react";

// lib
import clsx from "clsx";

// style
import "@/src/styles/layout/header.scss";
import { AnimatePresence, motion } from "framer-motion";
import IconClose from "../icon/IconClose";

export default function Header() {
  const [mode, setMode] = useState(false);
  const [menu, setMenu] = useState(false);
  const [category, setCategory] = useState<Category[]>([]);

  const menuToggle = () => {
    setMenu((prev) => !prev);

    document.documentElement.classList.toggle("overflow-hidden");
  };

  const darkModeToggle = () => {
    document.documentElement.classList.toggle("dark");

    setMode(!mode);
  };

  useEffect(() => {
    async function loadCategory() {
      try {
        const data = await fetchCategory();
        setCategory(data);
      } catch {
        console.log("catch");
      } finally {
        console.log("fin");
      }
    }
    loadCategory();
  }, []);

  return (
    <header className="flex justify-between p-4">
      <button type="button" onClick={menuToggle}>
        <IconMenu size="24" />
      </button>
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={clsx(
              "nav absolute left-0 top-0 z-10 flex h-dvh w-full flex-col overflow-auto bg-black/75 sm:w-1/2",
              menu && "active",
            )}
          >
            {category.map((item) => (
              <motion.div key={item.id}>
                <Link href={"#"} className="inline-block p-1">
                  <span className="text-white">{item.name}</span>
                </Link>
              </motion.div>
            ))}
            <button type="button" onClick={menuToggle} className="absolute right-0 top-0 p-1">
              <IconClose color="#ffffff" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <h1>
        <Link href={"/"}>SHOP LOGO</Link>
      </h1>
      <div className="flex">
        <button type="button">
          <IconCart color="#1C274C" size="24" />
        </button>
        <button onClick={darkModeToggle} type="button">
          {mode ? <IconDarkMode size="24" /> : <IconWhiteMode size="24" />}
        </button>
      </div>
    </header>
  );
}
