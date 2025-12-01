"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface LayoutContextType {
  layoutClassName: string;
  setLayoutClassName: (className: string) => void;
  bottomPadding: number;
  setBottomPadding: (padding: number) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [layoutClassName, setLayoutClassName] = useState("");
  const [bottomPadding, setBottomPadding] = useState(0);

  return (
    <>
      <LayoutContext.Provider
        value={{
          layoutClassName,
          setLayoutClassName,
          bottomPadding,
          setBottomPadding,
        }}
      >
        {children}
      </LayoutContext.Provider>
    </>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error("ss");
  }

  return context;
};
