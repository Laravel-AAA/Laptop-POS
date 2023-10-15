import { IProduct } from "@/types";
import React from "react";
import ProductItem from "./Partials/ProductItem";

export default function Items({ products,className="" }: { products: IProduct[],className?:string }) {
  return (
    <section className={className}>
      <div className="flex flex-wrap md:justify-start justify-center">
      {products.map((v, i) => (
        <ProductItem key={i} product={v} />
        ))}
        </div>
    </section>
  );
}
