import ProductList from "@/src/components/product/ProductList";

export default async function Products() {
  const res = await fetch("http://localhost:4000/api/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <>
      <ProductList initialProduct={products} />
    </>
  );
}
