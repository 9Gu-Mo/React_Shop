"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: category;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
}

interface category {
  id: string;
  name: string;
  slug: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

export default function Products() {
  // 호출하는 api를 배열의 저장
  const [product, setProduct] = useState<Product[]>([]);

  // 호출한 api 렌더링 저장
  const [loading, setLoading] = useState(true);

  // api 호출 성공 여부 판별
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();
        setProduct(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("에러 발생");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) return <p>로딩 컴포넌트로 변경 예정</p>;
  if (error) return <p>에러 발생 : {error}</p>;

  return (
    <ul>
      {product.map((item) => (
        <li key={item.id}>
          <Link href={"#"}>
            <Image
              alt={item.slug}
              width={100}
              height={100}
              src={item.images[0]}
            />
            <p>{item.title}</p>
            <p>{item.price + "$"}</p>
            <div>{item.description}</div>
            {Object.entries(item.category).map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </Link>
        </li>
      ))}
    </ul>
  );
}
