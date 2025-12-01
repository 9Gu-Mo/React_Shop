"use client";

// component
import { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import IconMinus from "../icon/IconMinus";
import IconPlus from "../icon/IconPlus";
import IconShare from "../icon/IconShare";
import Modal from "../layout/Modal";
import InputText from "../InputText";

// hook
import { useEffect, useState } from "react";

// interface
import { Product } from "@/src/types/product.types";

// style
import "@/src/styles/component/product.scss";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import ProductBottomFix from "./ProductBottomFix";

export default function ProductDetailComp({ id }: { id: string }) {
  // 상품 api state
  const [detail, setDetail] = useState<Product>();
  const [loading, setLoading] = useState(true);

  // 상품 thumbnail slide state
  const [thumbSwiper, setThumbSwiper] = useState<SwiperType | null>(null);

  // 상품 count state
  const [count, setCount] = useState<number>(1);

  // URL 공유 모달 open state
  const [open, setOpen] = useState(false);

  // URL 저장 state
  const [url, setUrl] = useState("");

  // 상품 개수 증감 function
  const onCountUp = () => {
    setCount(count + 1);
  };

  const onCountDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // URL 공유 모달 open function
  const shareModalOpen = () => {
    setOpen(!open);
  };

  // URL 복사 저장 함수
  const onClickCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("url 복사완료");
    } catch {
      alert("url 복사실패");
    }
  };

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
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

  // URL 저장
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  if (loading) return <p>loading</p>;

  return (
    <>
      <div>
        <div className="top">
          <div className="detail flex flex-wrap gap-[20px] md:gap-[30px]">
            <div className="w-full md:w-[300px] lg:w-[400px]">
              <Swiper
                slidesPerView={1}
                modules={[Thumbs, Autoplay, EffectFade]}
                thumbs={{ swiper: thumbSwiper }}
                className="w-full rounded-xl"
                resistanceRatio={0}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                effect={"fade"}
                watchOverflow
                onBeforeResize={(swiper) => swiper.update()}
              >
                {detail?.images && (
                  <>
                    {Object.entries(detail.images).map(([index, img]) => (
                      <SwiperSlide key={index} className="!w-full">
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
                      <SwiperSlide key={index} className="overflow-hidden rounded-xl">
                        <img src={img} alt={detail.slug} />
                      </SwiperSlide>
                    ))}
                  </>
                )}
              </Swiper>
            </div>
            <div className="w-full md:w-[calc(100%-330px)] lg:w-[calc(100%-430px)]">
              <div className="mb-1 text-xs uppercase md:text-right">{detail?.category?.name}</div>
              <div className="flex items-center justify-between">
                <b className="block">{detail?.title}</b>
                <div>
                  <button type="button" onClick={shareModalOpen}>
                    <IconShare />
                  </button>
                </div>
                {open && (
                  <>
                    <Modal title="URL 공유" onClick={shareModalOpen}>
                      <div className="flex gap-2">
                        <InputText id="inp01" value={url} readOnly />
                        <button onClick={onClickCopy} type="button">
                          복사
                        </button>
                      </div>
                    </Modal>
                  </>
                )}
              </div>
              <p>{detail?.description}</p>
              <div className="flex min-h-[100px] w-full items-center justify-center border border-black">banner</div>
              <div className="flex items-center gap-5">
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
                  <button type="button" className="inline-block h-[40px] w-[40px] align-middle" onClick={onCountUp}>
                    <IconPlus />
                  </button>
                </div>
                {detail?.price && (
                  <div>
                    <p>{String(detail.price * count).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "$"}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bot"></div>
        <ProductBottomFix showOn="all">
          <div>ss</div>
        </ProductBottomFix>
      </div>
    </>
  );
}
