"use client";

// hook
import { useEffect, useState } from "react";

// interface
import { Product } from "@/src/types/product.types";

export default function ProductDetailComp({ id }: { id: string }) {
  const [detail, setDetail] = useState<Product>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
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
      <div>
        <h1>{detail?.title}</h1>
      </div>
    </>
  );
}
