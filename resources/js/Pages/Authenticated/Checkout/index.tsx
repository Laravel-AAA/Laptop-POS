import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
  ICreateBill,
  IFilterBill,
  ILaravelPaginate,
  IProduct,
  PageProps,
} from "@/types";
import { Head } from "@inertiajs/react";
import CheckoutHeader from "./Partials/CheckoutHeader";
import Items from "./Partials/Items";
import RightSide from "./Partials/RightSide";
import { ResizableBox } from "react-resizable";
import { useState } from "react";

export interface BillOperation {
  bill: ICreateBill;
  changeQty: (productId: string, qty: number) => any;
  increaseQty: (productId: string) => any;
  decreaseQty: (productId: string) => any;
}

export default function Checkout({
  auth,
  products: paginateProducts,
}: PageProps<{
  products: ILaravelPaginate<IProduct>;
  filter: IFilterBill;
}>) {
  const products: IProduct[] = paginateProducts.data;
  console.log({ products });
  const [bill, setBill] = useState<ICreateBill>({
    transactions: [],
    cashReceived: undefined,
  });

  function changeQty(productId: string, qty: number) {
    setBill((b) => {
      const updatedBill = { ...b };
      const transaction = updatedBill.transactions.find(
        (t) => t.product_id == productId,
      );
      if (qty != 0) {
        if (transaction) transaction.quantity = qty;
        else
          updatedBill.transactions = [
            ...updatedBill.transactions,
            { product_id: productId, quantity: qty },
          ];
      } else if (transaction)
        updatedBill.transactions = updatedBill.transactions.filter(
          (t) => t.product_id != productId,
        );
      return updatedBill;
    });
  }

  function decreaseQty(productId: string) {
    setBill((b) => {
      const updatedBill = { ...b };
      const transaction = updatedBill.transactions.find(
        (t) => t.product_id == productId,
      );
      if (transaction) transaction.quantity--;
      else
        throw "Transaction not found in the bill but there is a decreaseQty request!";
      if (transaction.quantity == 0)
        updatedBill.transactions = updatedBill.transactions.filter(
          (t) => t.product_id != transaction.product_id,
        );
      return updatedBill;
    });
  }

  function increaseQty(productId: string) {
    setBill((b) => {
      const updatedBill = { ...b };
      const transaction = updatedBill.transactions.find(
        (t) => t.product_id == productId,
      );
      if (transaction) transaction.quantity++;
      else
        updatedBill.transactions = [
          ...updatedBill.transactions,
          { product_id: productId, quantity: 1 },
        ];
      return updatedBill;
    });
  }

  return (
    <AuthenticatedLayout user={auth.user} header={<CheckoutHeader />}>
      <Head title="Checkout" />

      <div className="w-full flex-row-reverse md:flex">
        <ResizableBox
          width={Number(localStorage.getItem("resizable-width")) || 420}
          resizeHandles={["w"]}
          minConstraints={[320, Infinity]}
          maxConstraints={[1080, Infinity]}
          height={Infinity}
          className="top-0 flex  h-screen min-w-full md:sticky md:min-w-0"
          onResizeStop={(e, { size }) =>
            localStorage.setItem("resizable-width", size.width + "")
          }
          draggableOpts={{ axis: "x", grid: [1, 0] }}
        >
          {/* left padding/margin pixels is for the size of the resize handler */}
          <RightSide
            billOperation={{ decreaseQty, increaseQty, bill, changeQty }}
            className="min-w-full grow pl-0 md:pl-[10px]"
          />
        </ResizableBox>
        <Items
          billOperation={{ decreaseQty, increaseQty, bill, changeQty }}
          className="w-full grow md:w-0"
          products={products}
        />
      </div>
    </AuthenticatedLayout>
  );
}
