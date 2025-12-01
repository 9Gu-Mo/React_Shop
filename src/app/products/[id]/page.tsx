import ProductDetailComp from "@/src/components/product/ProductDetailComp";
import SetLayoutClass from "@/src/context/SetLayoutClass";

export default function ProductDetail({ params }: { params: { id: string } }) {
  return (
    <>
      <SetLayoutClass className="test" />

      <ProductDetailComp id={params.id} />
    </>
  );
}
