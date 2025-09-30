"use client";

// component
import { Swiper as SwiperType } from "swiper";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// hook
import { useEffect, useState } from "react";

// interface
import { Product } from "@/src/types/product.types";

// style
import "swiper/css";

export default function ProductDetailComp({ id }: { id: string }) {
  const [detail, setDetail] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [thumbSwiper, setThumbSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`,
        );
        const data = await res.json();
        setDetail(data);
      } catch {
        console.log("catch");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) return <p>loading</p>;

  return (
    <>
      <div className="top">
        <h1>{detail?.title}</h1>
        <div className="flex">
          <div>
            <Swiper
              className="max-w-[300px]"
              slidesPerView={1}
              modules={[Thumbs, Navigation]}
              // navigation={true}
              thumbs={{ swiper: thumbSwiper }}
            >
              {detail?.images && (
                <>
                  {Object.entries(detail.images).map(([index, img]) => (
                    <SwiperSlide key={index}>
                      <img src={img} alt={detail.slug} />
                    </SwiperSlide>
                  ))}
                </>
              )}
            </Swiper>

            <Swiper
              onSwiper={setThumbSwiper}
              modules={[Thumbs, Navigation]}
              watchSlidesProgress
              slidesPerView="auto"
            >
              {detail?.images && (
                <>
                  {Object.entries(detail.images).map(([index, img]) => (
                    <SwiperSlide key={index} className="!w-[100px]">
                      <img src={img} alt={detail.slug} />
                    </SwiperSlide>
                  ))}
                </>
              )}
            </Swiper>
          </div>
          <div>
            <p>{detail?.title}</p>
            <p>{detail?.slug}</p>
            <p>{detail?.price}</p>
            <p>{detail?.description}</p>
            <p>{detail?.category?.id}</p>
            <p>{detail?.category?.name}</p>
            <p>{detail?.category?.image}</p>
            <p>{detail?.category?.slug}</p>
          </div>
        </div>
      </div>
      <div className="bot"></div>
    </>
  );
}
