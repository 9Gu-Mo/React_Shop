// interface

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${params.id}`
  );
  const product = await res.json();

  return (
    <>
      <h1>{product.title}</h1>
    </>
  );
}
