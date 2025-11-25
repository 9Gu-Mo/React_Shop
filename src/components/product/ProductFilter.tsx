"use client";

import { fetchCategory } from "@/src/lib/api/products";
import { Category } from "@/src/types/product.types";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductFilter() {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    async function loadCategory() {
      try {
        const data = await fetchCategory();
        setCategory(data);
      } catch {
        console.log("catch");
      }
    }
    loadCategory();
  }, []);

  return (
    <>
      <Swiper slidesPerView={"auto"}>
        {category.map((item) => (
          <SwiperSlide key={item.id} className="w-auto">
            <button type="button">{item.name}</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
