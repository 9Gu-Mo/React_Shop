"use client";

// api
// import { fetchProducts } from "@/src/lib/api/products";

// type
import { Product } from "@/src/types/product.types";

// hook
import { useState } from "react";

// component
import ProductItem from "./ProductItem";

interface Props {
  initialProduct: Product[];
}

export default function ProductList({ initialProduct }: Props) {
  // const [products, setProducts] = useState(initialProduct);
  const [products, setProducts] = useState(initialProduct);

  return (
    <>
      <div className="product mx-auto flex max-w-7xl flex-wrap border-t-[1px] border-black">
        {products.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
