"use client";

// component
import Image from "next/image";

// type
import { Product } from "@/src/types/product.types";

// style
import "@/src/styles/component/product.scss";
import Link from "next/link";

export default function ProductItem(props: Product) {
  return (
    <>
      <li key={props.id} className="product-item">
        <Link href={`/products/${props.id}`}>
          <Image
            alt={props.slug}
            width={100}
            height={100}
            src={props.images[0]}
          />
        </Link>
        <p>{props.title}</p>
        <p>{props.price + "$"}</p>
        <div className="line-clamp-3">{props.description}</div>
        {props.category && (
          <div className="category">
            <Image
              alt={props.category.name}
              src={props.category.image}
              width={32}
              height={32}
            />
            <span>{props.category.name}</span>
          </div>
        )}
      </li>
    </>
  );
}
