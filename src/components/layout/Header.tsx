"use client";

// component
import Link from "next/link";
import IconDarkMode from "../icon/IconDarkMode";
import IconWhiteMode from "../icon/IconWhiteMode";

// hook
import { useState } from "react";

export default function Header() {
  const [mode, setMode] = useState(false);

  const darkModeToggle = () => {
    document.documentElement.classList.toggle("dark");

    setMode(!mode);
  };

  return (
    <header className="flex justify-between px-4">
      <h1>
        <Link href={"#"}>SHOP LOGO</Link>
      </h1>
      <button onClick={darkModeToggle} type="button">
        {mode ? <IconDarkMode /> : <IconWhiteMode />}
      </button>
    </header>
  );
}
