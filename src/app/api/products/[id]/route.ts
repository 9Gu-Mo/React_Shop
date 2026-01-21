import { NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(_: Request, { params }: Params) {
  const { id } = params;

  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, { cache: "no-store" });

  const data = await res.json();
  return NextResponse.json(data);
}
