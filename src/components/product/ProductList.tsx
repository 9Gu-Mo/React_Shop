"use client";

// api
import { fetchProducts } from "@/src/lib/api/products";

// type
import { Product } from "@/src/types/product.types";

// hook
import { useEffect, useState } from "react";

// component
import LoadingComp from "../LoadingComp";
import ProductItem from "./ProductItem";

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
    <div className="product max-w-7xl mx-auto border-black border-t-[1px] flex flex-wrap">
      {products.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </div>
  );
}
