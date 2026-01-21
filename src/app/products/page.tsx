import ProductList from "@/src/components/product/ProductList";

const productList = process.env.NEXT_PRODUCT_API;

export default async function Products() {
  const res = await fetch(`${productList}/api/products`, {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <>
      <ProductList initialProduct={products} />
    </>
  );
}
