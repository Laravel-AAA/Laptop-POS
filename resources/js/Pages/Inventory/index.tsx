/**
 * CRUD all items available for this user such as Keyboard, Mouse.
 * Each item has information such as Picture, Name, Price, Quantity available, ...etc.
 */

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { IProduct, PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import Product from "./Partials/Product";
import TextInput from "@/Components/TextInput";
import { useState } from "react";

export default function Inventory({
  auth,
  products,
  productsCount,//number of products
}: PageProps<{ products: IProduct[], productsCount: number }>) {
  // const products: IProduct[] = [
  //   {
  //     name: "Apple MacBook Pro M1 13.3 Silver 16GB/512GB",
  //     id: 1,
  //     price: 200,
  //     quantity: 20,
  //     gs1: "12345678910",
  //     img: "",
  //   },
  //   ...Array(6)
  //     .fill(null)
  //     .map((x) => ({
  //       name: "Apple MacBook Pro M1 13.3 Silver 16GB/512GB",
  //       id: Math.floor(Math.random() * 10000),
  //       price: 200,
  //       quantity: 20,
  //       gs1: "12345678910",
  //       img: "https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg",
  //     })),
  // ];

  const [searchValue, setSearch] = useState("");

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="py-4 flex justify-between">
          <div>
            <label htmlFor="search">Search:&nbsp;</label>
            <TextInput
              id="search"
              type="search"
              isFocused={true}
              className="p-1"
              onChange={(v) => setSearch(v.target.value)}
            />
          </div>
          <div className="self-center">
            <p className="text-gray-500">
              Total:&nbsp;<span className="text-black">{productsCount}</span>
            </p>
          </div>
        </div>
      }
    >
      <Head title="Inventory" />
      <div className="py-6 flex-wrap  flex justify-center">
        {products
          .filter((p) =>
            p.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((p) => (
            <Product key={p.id} product={p} />
          ))}
      </div>
    </AuthenticatedLayout>
  );
}
