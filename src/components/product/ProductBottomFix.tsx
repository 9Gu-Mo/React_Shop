"use client";

import { useLayout } from "@/src/context/LayoutContext";
import { useDeviceDetect } from "@/src/hooks/useDeviceDetect";
import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  moOnly?: boolean;
  taOnly?: boolean;
  showOn?: "mo" | "ta" | "de" | "all";
}

export default function ProductBottomFix({
  children,
  className = "",
  moOnly = true,
  taOnly = false,
  showOn = "mo",
}: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const { setBottomPadding } = useLayout();
  const { isMo, isTa, isDe } = useDeviceDetect();

  const shouldShow = () => {
    if (showOn === "all") return true;
    if (showOn === "mo") return isMo;
    if (showOn === "ta") return isTa;
    if (showOn === "de") return isDe;

    if (moOnly) return isMo;
    if (taOnly) return isTa;

    return true;
  };

  const isVisible = shouldShow();

  useEffect(() => {
    const updatePadding = () => {
      if (bottomRef.current && isVisible) {
        const height = bottomRef.current.offsetHeight;
        setBottomPadding(height);
      } else {
        setBottomPadding(0);
      }
    };

    // 초기 높이 설정
    updatePadding();

    const resizeObserver = new ResizeObserver(updatePadding);
    if (bottomRef.current) {
      resizeObserver.observe(bottomRef.current);
    }

    return () => {
      setBottomPadding(0);
      resizeObserver.disconnect();
    };
  }, [setBottomPadding, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div ref={bottomRef} className={`fixed bottom-0 left-0 right-0 z-40 ${className}`}>
        {children}
      </div>
    </>
  );
}
