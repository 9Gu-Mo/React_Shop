"use client";

// component
import { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// hook
import { useEffect, useState } from "react";

// interface
import { Product } from "@/src/types/product.types";

// style
import "@/src/styles/component/product.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";

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
      <div className="mt-4">
        <div className="top">
          <div className="detail flex flex-wrap gap-[30px]">
            <div className="image sticky top-0">
              <Swiper
                slidesPerView={1}
                modules={[Thumbs, Autoplay, EffectFade]}
                thumbs={{ swiper: thumbSwiper }}
                className="rounded-xl"
                resistanceRatio={0}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                effect={"fade"}
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
                modules={[Thumbs]}
                watchSlidesProgress
                slidesPerView={3}
                spaceBetween={8}
                className="thumb-slide mt-2"
              >
                {detail?.images && (
                  <>
                    {Object.entries(detail.images).map(([index, img]) => (
                      <SwiperSlide
                        key={index}
                        className="overflow-hidden rounded-xl"
                      >
                        <img src={img} alt={detail.slug} />
                      </SwiperSlide>
                    ))}
                  </>
                )}
              </Swiper>
            </div>
            <div className="notice">
              <p className="mb-1 text-xs uppercase">{detail?.category?.name}</p>
              <b className="mb-2 block">{detail?.title}</b>
              <p>{detail?.description}</p>
              <div>
                <p>{detail?.price}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bot"></div>
      </div>
    </>
  );
}
