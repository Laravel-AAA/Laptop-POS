/**
 * CRUD all items available for this user such as Keyboard, Mouse.
 * Each item has information such as Picture, Name, Price, Quantity available, ...etc.
 */

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import Product from "./Partials/product";

export default function Inventory({ auth }: PageProps) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Inventory" />
      <div className="py-6 flex-wrap  flex justify-center">
        <Product
          product={{
            name: "Apple MacBook Pro M1 13.3 Silver 16GB/512GB",
            id: 1,
            price: 200,
            quantity: 20,
            gs1: "12345678910",
            img: "",
          }}
        />
        <Product
          product={{
            name: "Apple MacBook Pro M1 13.3 Silver 16GB/512GB",
            id: 1,
            price: 200,
            quantity: 20,
            gs1: "12345678910",
            img: "https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg",
          }}
        />
        <Product
          product={{
            name: "Apple MacBook Pro M1 13.3 Silver 16GB/512GB",
            id: 1,
            price: 200,
            quantity: 20,
            gs1: "12345678910",
            img: "https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg",
          }}
        />
        <Product
          product={{
            name: "Apple MacBook Pro M1 13.3 Silver 16GB/512GB",
            id: 1,
            price: 200,
            quantity: 20,
            gs1: "12345678910",
            img: "https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg",
          }}
        />
        <Product
          product={{
            name: "Apple MacBook Pro M1 13.3 Silver 16GB/512GB",
            id: 1,
            price: 200,
            quantity: 20,
            gs1: "12345678910",
            img: "https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg",
          }}
        />
        <Product
          product={{
            name: "Apple MacBook Pro M1 13.3 Silver 16GB/512GB",
            id: 1,
            price: 200,
            quantity: 20,
            gs1: "12345678910",
            img: "https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg",
          }}
        />
        <Product
          product={{
            name: "Apple MacBook Pro M1 13.3 Silver 16GB/512GB",
            id: 1,
            price: 200,
            quantity: 20,
            gs1: "12345678910",
            img: "https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg",
          }}
        />
      </div>
    </AuthenticatedLayout>
  );
}
