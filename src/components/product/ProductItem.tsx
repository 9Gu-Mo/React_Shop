"use client";

// component
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
        className={clsx("product-item basis-1/2 border-b border-r border-black sm:basis-1/3", props.slide && "slide")}
      >
        <div className="flex">
          {props.images
            .filter((url) => url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/"))
            .map((item, index) => (
              <Link key={index} href={`/products/${props.id}`} className="basis-1/3">
                <img src={props.images[index]} alt={props.slug} className="w-full" />
              </Link>
            ))}
        </div>
        <p>{props.title}</p>
        <p>{props.price + "$"}</p>
        <div className="line-clamp-3">{props.description}</div>
        {props.category && (
          <div className="category">
            <img src={props.category.image} alt={props.category.name} />
            <span>{props.category.name}</span>
          </div>
        )}
      </div>
    </>
  );
}
