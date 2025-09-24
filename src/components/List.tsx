"use client";

// component
import Image from "next/image";

// hook
import { useEffect, useState } from "react";

// lib
import AOS from "aos";

// interface
import { Category } from "../types/product.types";

// api
import { fetchCategory } from "../lib/api/products";

// style
import "aos/dist/aos.css";

export default function List() {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    const apiFetch = async () => {
      try {
        const data = await fetchCategory();
        setCategory(data);
      } catch {
        console.error("catch");
      } finally {
        console.log("fin");
      }
    };
    apiFetch();

    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <ul className="list mx-auto flex max-w-7xl flex-wrap gap-[20px]">
        {category.map((item, index) => (
          <li
            key={item.id}
            data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
            data-aos-delay={20 * index}
            data-aos-duration="1000"
            className="shrink-1 relative h-[300px] w-full grow-0 basis-[40%] overflow-hidden rounded-[16px] [&:nth-child(4n+1)]:basis-[calc(60%-20px)] [&:nth-child(4n+4)]:basis-[calc(60%-20px)]"
          >
            <Image
              alt={item.name}
              src={item.image}
              fill
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black/50 text-white">
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
