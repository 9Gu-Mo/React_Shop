"use client";

// api
// import { fetchProducts } from "@/src/lib/api/products";

// type
import { Product } from "@/src/types/product.types";

// component
import ProductItem from "./ProductItem";

interface Props {
  initialProduct: Product[];
}

export default function ProductList({ initialProduct }: Props) {
  const products = initialProduct;

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
