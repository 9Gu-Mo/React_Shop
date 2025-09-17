// types
import { Product } from "@/src/types/product.types";

// api url
const BASE_URL =
  process.env.NEXT_PRODUCT_API || "https://api.escuelajs.co/api/v1/products";

export async function fetchProducts(): Promise<Product[]> {
  // 로딩 ui 확인용 코드(실사용x)
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(BASE_URL);

  return res.json();
}
