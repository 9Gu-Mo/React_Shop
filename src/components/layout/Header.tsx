"use client";

// component
import Image from "next/image";
import Link from "next/link";
import IconCart from "../icon/IconCart";
import IconClose from "../icon/IconClose";
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

export default function Header() {
  const [mode, setMode] = useState(false);
  const [menu, setMenu] = useState(false);
  const [category, setCategory] = useState<Category[]>([]);

  const menuToggle = () => {
    setMenu((prev) => !prev);
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
        <IconMenu />
      </button>
      {menu && (
        <div
          className={clsx(
            "nav sm:right-50 absolute bottom-0 left-0 right-0 top-0 z-10 bg-black/75",
            menu && "active",
          )}
        >
          {category.map((item) => (
            <Link href={"#"} key={item.id} className="flex flex-wrap p-1">
              <Image
                alt={item.name}
                width={20}
                height={20}
                src={item.image}
                objectFit="cover"
                className="h-[20px]"
              />
              <span className="text-white">{item.name}</span>
            </Link>
          ))}
          <button type="button" onClick={menuToggle}>
            <IconClose color="#ffffff" />
          </button>
        </div>
      )}
      <h1>
        <Link href={"/"}>SHOP LOGO</Link>
      </h1>
      <div className="flex">
        <button type="button">
          <IconCart />
        </button>
        <button onClick={darkModeToggle} type="button">
          {mode ? <IconDarkMode /> : <IconWhiteMode />}
        </button>
      </div>
    </header>
  );
}
