"use client";

import { fetchProducts } from "@/src/lib/api/products";

// type
import { Product } from "@/src/types/product.types";

// hook
import { useEffect, useState } from "react";

// component
import Image from "next/image";
import LoadingComp from "../LoadingComp";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComp />;
  if (error) return <div>에러 발생: {error}</div>;

  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          <Image
            alt={item.slug}
            width={100}
            height={100}
            src={item.images[0]}
          />
          <p>{item.title}</p>
          <p>{item.price + "$"}</p>
          <div>{item.description}</div>
          {Object.entries(item.category).map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </li>
      ))}
    </ul>
  );
}
