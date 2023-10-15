import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { IFilterBill, ILaravelPaginate, IProduct, PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import CheckoutHeader from "./Partials/CheckoutHeader";
import Items from "./Partials/Items";
import RightSide from "./Partials/RightSide";
import { Resizable, ResizableBox } from "react-resizable";
import { useState } from "react";

export default function Checkout({
  auth,
  products: paginateProducts,
}: PageProps<{
  products: ILaravelPaginate<IProduct>;
  filter: IFilterBill;
}>) {
  const products: IProduct[] = paginateProducts.data;
  console.log({ products });

  return (
    <AuthenticatedLayout user={auth.user} header={<CheckoutHeader />}>
      <Head title="Checkout" />

      <div className="flex-row-reverse md:flex">
        <ResizableBox
          width={Number(localStorage.getItem('resizable-width'))||580}
          resizeHandles={["w"]}
          minConstraints={[400, Infinity]}
          height={Infinity}
          className="flex w-full"
          onResizeStop={(e,{size:{width}})=>localStorage.setItem('resizable-width',width+'')}
          draggableOpts={{ axis: "x", grid: [1, 0]}}
        >
          <RightSide className="ml-0 w-full md:ml-[10px]" />
        </ResizableBox>
        <Items className="w-full" products={products} />
      </div>
    </AuthenticatedLayout>
  );
}
