"use client";

// component
import Image from "next/image";
import Link from "next/link";

// type
import { Product } from "@/src/types/product.types";

// style
import "@/src/styles/component/product.scss";

// lib
import clsx from "clsx";

export default function ProductItem(props: Product) {
  return (
    <>
      <div
        key={props.id}
        className={clsx(
          "product-item basis-1/2 border-b border-r border-black sm:basis-1/3",
          props.slide && "slide",
        )}
      >
        <Link href={`/products/${props.id}`} className="flex">
          {props.images.map((item, index) => (
            <Image
              key={index}
              alt={props.slug}
              width={100}
              height={100}
              src={props.images[index]}
              className="basis-1/3"
            />
          ))}
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
      </div>
    </>
  );
}
