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

      <div className="flex-row-reverse w-full md:flex">
        <ResizableBox
          width={Number(localStorage.getItem("resizable-width")) || 420}
          resizeHandles={["w"]}
          minConstraints={[320, Infinity]}
          maxConstraints={[1080,Infinity]}
          height={Infinity}
          className="flex md:min-w-0  min-w-full top-0 md:sticky h-screen"
          onResizeStop={(e, { size }) =>
            localStorage.setItem("resizable-width", size.width + "")
          }
          draggableOpts={{ axis: "x", grid: [1, 0] }}
        >
          <RightSide className="ml-0 grow md:ml-[10px] min-w-full" />
        </ResizableBox>
        <Items className="w-full md:w-0 grow" products={products} />
      </div>
    </AuthenticatedLayout>
  );
}
