import ProductDetailComp from "@/src/components/product/ProductDetailComp";

export default function ProductDetail({ params }: { params: { id: string } }) {
  return (
    <>
      <ProductDetailComp id={params.id} />
    </>
  );
}
