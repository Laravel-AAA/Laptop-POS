import A from "@/Components/Typography/A";
import Product from "@/Pages/Authenticated/Inventory/Partials/Product";
import { Card, Typography } from "@material-tailwind/react";
import React from "react";

export default function OutOfStock() {
  return (
    <Card className="rounded-none shadow sm:rounded-lg">
      <div className="p-6">
        <header>
          <Typography variant="h6" color="blue-gray">
            Products out of stock
          </Typography>
          <A href={route("product.index")} className="font-normal">
            Viw all products out of stock
          </A>
        </header>
        <section>
          <Product
            product={{
              barcode: "232343",
              business_id: "1",
              created_at: new Date().toISOString(),
              createdBy_id: "2",
              description: "hello world",
              id: "3",
              img: null,
              name: "I'm product",
              price: 123,
              stock: 321,
              updated_at: new Date().toISOString(),
              imageFile: null,
            }}
            requestEdit={function (): void {
              throw new Error("Function not implemented.");
            }}
            requestShow={function (): void {
              throw new Error("Function not implemented.");
            }}
            requestChangeStock={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </section>
      </div>
    </Card>
  );
}
