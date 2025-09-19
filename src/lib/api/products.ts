// types
import { Product } from "@/src/types/product.types";

// product list api
const BASE_URL =
  process.env.NEXT_PRODUCT_API || "https://api.escuelajs.co/api/v1/products";

export async function fetchProducts(): Promise<Product[]> {
  // 로딩 ui 확인용 코드(실사용x)
  await new Promise((resolve) => setTimeout(resolve, 500));
  const res = await fetch(BASE_URL);

  return res.json();
}

// product detail api
const DETAIL_URL =
  process.env.NEXT_DETAIL_API ||
  "https://api.escuelajs.co/api/v1/products/[id]";

export async function fetchDetail(): Promise<Product[]> {
  const res = await fetch(DETAIL_URL);

  return res.json();
}
