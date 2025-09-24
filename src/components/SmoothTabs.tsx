"use client";

// lib
import { AnimatePresence, motion } from "framer-motion";

// hook
import { useState } from "react";

// style
import "@/src/styles/component/tab.scss";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface SmoothTabsProps {
  tabs: Tab[];
}

export default function SmoothTabs({ tabs }: SmoothTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tab mx-auto mt-8 w-full max-w-xl">
      {/* 탭 버튼 부분 */}
      <div className="relative flex border-b border-gray-200">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 text-sm font-medium focus:outline-none ${
              activeIndex === idx ? "text-blue-600" : "text-gray-600"
            }`}
            onClick={() => setActiveIndex(idx)}
          >
            {tab.label}
          </button>
        ))}

        {/* 선택된 탭 아래 인디케이터 */}
        <motion.div
          className="absolute bottom-0 h-1 bg-blue-600"
          layout // 레이아웃 애니메이션
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            width: `${100 / tabs.length}%`,
            left: `${(100 / tabs.length) * activeIndex}%`,
          }}
        />
      </div>

      {/* 탭 콘텐츠 부분 */}
      <div className="relative mt-4 h-[300px]">
        <AnimatePresence mode="wait">
          {tabs.map((tab, idx) => {
            if (idx !== activeIndex) return null;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {tab.content}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
