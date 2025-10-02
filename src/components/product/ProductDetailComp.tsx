"use client";

// component
import { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import IconMinus from "../icon/IconMinus";
import IconPlus from "../icon/IconPlus";

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
  // 상품 api state
  const [detail, setDetail] = useState<Product>();
  const [loading, setLoading] = useState(true);

  // 상품 thumbnail slide state
  const [thumbSwiper, setThumbSwiper] = useState<SwiperType | null>(null);

  // 상품 count state
  const [count, setCount] = useState<number>(1);

  const onCountUp = () => {
    setCount(count + 1);
  };

  const onCountDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

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
            <div className="image">
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
              <div className="mb-1 text-xs uppercase">
                {detail?.category?.name}
              </div>
              <b className="mb-2 block">{detail?.title}</b>
              <p>{detail?.description}</p>
              <div>
                <p>{detail?.price}</p>
              </div>
              <div className="count inline-block rounded-md border border-black">
                <button
                  type="button"
                  disabled={count === 1 && true}
                  onClick={onCountDown}
                  className="inline-block h-[40px] w-[40px] align-middle disabled:opacity-50"
                >
                  <IconMinus />
                </button>
                <input
                  type="number"
                  value={count}
                  className="inline-block h-[40px] w-[40px] border-x border-black text-center align-middle text-base/10"
                  readOnly
                />
                <button
                  type="button"
                  className="inline-block h-[40px] w-[40px] align-middle"
                  onClick={onCountUp}
                >
                  <IconPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bot"></div>
      </div>
    </>
  );
}
