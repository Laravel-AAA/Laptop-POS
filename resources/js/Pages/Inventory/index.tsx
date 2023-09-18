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
  productsCount, //number of products
}: PageProps<{ products: IProduct[]; productsCount: number }>) {
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
        <div className="flex justify-between py-4">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                className="h-5 w-5 fill-slate-500"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </span>
            <TextInput
              id="search"
              type="search"
              name="search"
              isFocused={true}
              className="w-72 pl-9 p-1"
              placeholder="Search for products..."
              onChange={(v) => setSearch(v.target.value)}
            />
          </label>
          <div className="self-center">
            <p className="text-gray-500">
              Total:&nbsp;<span className="text-black">{productsCount}</span>
            </p>
          </div>
        </div>
      }
    >
      <Head title="Inventory" />
      <div className="flex flex-wrap  justify-center py-6">
        {products
          .filter((p) =>
            p.name.toLowerCase().includes(searchValue.toLowerCase()),
          )
          .map((p) => (
            <Product key={p.id} product={p} />
          ))}
      </div>
    </AuthenticatedLayout>
  );
}
