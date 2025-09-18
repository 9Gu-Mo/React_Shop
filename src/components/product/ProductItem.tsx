"use client";

// component
import Image from "next/image";

// type
import { Product } from "@/src/types/product.types";

// style
import "@/src/styles/component/product.scss";

export default function ProductItem(props: Product) {
  return (
    <>
      <li key={props.id} className="product-item">
        <Image
          alt={props.slug}
          width={100}
          height={100}
          src={props.images[0]}
        />
        <p>{props.title}</p>
        <p>{props.price + "$"}</p>
        <div>{props.description}</div>
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
