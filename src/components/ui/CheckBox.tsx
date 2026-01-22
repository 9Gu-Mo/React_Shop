"use client";

import { Input } from "@/src/types/input.types";
import { useState } from "react";

export default function CheckBox({ onChange, ...item }: Input) {
  const [isChecked, setIsChecked] = useState(item.checked || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange?.(e); // 부모 컴포넌트의 onChange 호출
  };

  return (
    <>
      <label htmlFor={item.id} className={`${isChecked ? "checked" : ""} checkbox flex items-center gap-1`}>
        <input type="checkbox" {...item} checked={isChecked} onChange={handleChange} />
        {item.label && <span>{item.label}</span>}
      </label>
    </>
  );
}
