"use client";

// api

// component
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingComp from "../LoadingComp";
import ProductItem from "./ProductItem";

// module
import { Navigation } from "swiper/modules";

// hook
import { useEffect, useState } from "react";

// interface
import { Product } from "@/src/types/product.types";

// style
import "swiper/css";
import "swiper/css/navigation";

export default function ProductSlide() {
  const [slides, setSlides] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSlide = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();
        const displayData = data.slice(0, 5);
        setSlides(displayData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("예상치 못한 에러 발생 ㅎㅎ");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchSlide();
  }, []);

  if (loading) return <LoadingComp />;
  if (error) return <div>error</div>;

  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation
        autoHeight
        slidesPerView={3}
        resistanceRatio={0}
      >
        {slides
          // .filter((item) => parseInt(item.id) < 190)
          .map((item) => (
            <SwiperSlide key={item.id}>
              <ProductItem slide {...item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
