"use client";

import { useEffect } from "react";
import { useLayout } from "./LayoutContext";

interface SetLayoutClassProps {
  className: string;
}

export default function SetLayoutClass({ className }: SetLayoutClassProps) {
  const { setLayoutClassName } = useLayout();

  useEffect(() => {
    setLayoutClassName(className);

    return () => {
      setLayoutClassName("");
    };
  }, [className, setLayoutClassName]);

  return null;
}
