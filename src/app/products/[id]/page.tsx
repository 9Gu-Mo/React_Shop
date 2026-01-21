import ProductDetailComp from "@/src/components/product/ProductDetailComp";
import SetLayoutClass from "@/src/context/SetLayoutClass";

type Props = {
  params: {
    id: string;
  };
};

const productDetail = process.env.NEXT_PRODUCT_API;

// export default function ProductDetail({ params }: { params: { id: string } }) {
export default async function ProductDetail({ params }: Props) {
  const res = await fetch(`${productDetail}/api/products/${params.id}`, {
    cache: "no-store",
  });

  const product = await res.json();

  return (
    <>
      <SetLayoutClass className="test" />

      <ProductDetailComp product={product} />
    </>
  );
}
