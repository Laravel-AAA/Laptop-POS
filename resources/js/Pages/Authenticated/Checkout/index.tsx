import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
  IBill,
  ICreateBill,
  IFilterBill,
  ILaravelPaginate,
  IProduct,
  PageProps,
} from "@/types";
import { Head, useForm } from "@inertiajs/react";
import Items from "./Partials/Items";
import RightSide from "./Partials/RightSide";
import { ResizableBox } from "react-resizable";
import CheckoutHeader from "./Partials/CheckoutHeader";
import { InertiaFormProps } from "@/types/global";
import { useEffect } from "react";

export interface BillOperations {
  form: InertiaFormProps<ICreateBill | IBill>;
  changeQty: (product: IProduct, qty: number) => void;
  increaseQty: (product: IProduct) => void;
  decreaseQty: (product: IProduct) => void;
  removeTransaction: (productId: string) => void;
}
/**If bill.id exist then checkout page is Editing an existed bill */
export default function Checkout({
  auth,
  products: paginateProducts,
  bill,
}: PageProps<{
  products: ILaravelPaginate<IProduct>;
  filter: IFilterBill;
  bill?: IBill;
}>) {
  const products: IProduct[] = paginateProducts.data;
  const form = useForm<ICreateBill | IBill>({
    transactions: [],
    cashReceived: null,
  });

  useEffect(() => {
    if (bill) form.setData(bill);
  }, []);

  const setBill = (
    data: (previousData: ICreateBill | IBill) => ICreateBill | IBill,
  ) => form.setData(data);

  /** @param product is used to change the qty of the correspond Transaction */
  function changeQty(product: IProduct, qty: number) {
    setBill((b) => {
      const updatedBill = { ...b };
      const transaction = updatedBill.transactions.find(
        (t) => t.product_id === product.id,
      );
      if (qty !== 0) {
        if (transaction) transaction.quantity = qty;
        else
          updatedBill.transactions = [
            ...updatedBill.transactions,
            { product, product_id: product.id, quantity: qty },
          ];
      } else if (transaction)
        updatedBill.transactions = updatedBill.transactions.filter(
          (t) => t.product_id !== product.id,
        );
      return updatedBill;
    });
  }

  /** @param product is used to change the qty of the correspond Transaction */
  function decreaseQty(product: IProduct) {
    setBill((b) => {
      const updatedBill = { ...b };
      const transaction = updatedBill.transactions.find(
        (t) => t.product_id === product.id,
      );
      if (transaction) transaction.quantity--;
      else
        throw new Error(
          "Transaction not found in the bill but there is a decreaseQty request!",
          { cause: transaction },
        );
      if (transaction.quantity === 0)
        updatedBill.transactions = updatedBill.transactions.filter(
          (t) => t.product_id !== transaction.product_id,
        );
      return updatedBill;
    });
  }

  /** @param product is used to change the qty of the correspond Transaction */
  function increaseQty(product: IProduct) {
    setBill((b) => {
      const updatedBill = { ...b };
      const transaction = updatedBill.transactions.find(
        (t) => t.product_id === product.id,
      );
      if (transaction) transaction.quantity++;
      else
        updatedBill.transactions = [
          ...updatedBill.transactions,
          { product, product_id: product.id, quantity: 1 },
        ];
      return updatedBill;
    });
  }

  function removeTransaction(productId: string) {
    setBill((b) => {
      const updatedBill = { ...b };
      updatedBill.transactions = [
        ...updatedBill.transactions.filter((t) => t.product_id !== productId),
      ];
      return updatedBill;
    });
  }

  const billOperations: BillOperations = {
    decreaseQty,
    increaseQty,
    form,
    changeQty,
    removeTransaction,
  };

  return (
    <AuthenticatedLayout user={auth.user} header={" "}>
      <Head title="Checkout" />

      <div className="w-full flex-row-reverse md:flex">
        <ResizableBox
          width={Number(localStorage.getItem("resizable-width")) || 420}
          resizeHandles={["w"]}
          minConstraints={[350, Infinity]}
          maxConstraints={[1080, Infinity]}
          height={Infinity}
          className="top-0 flex  h-screen max-w-full md:sticky md:w-0"
          onResizeStop={(e, { size }) =>
            localStorage.setItem("resizable-width", size.width + "")
          }
          draggableOpts={{ axis: "x", grid: [1, 0] }}
        >
          {/* left padding/margin pixels is for the size of the resize handler */}
          <div className="grow md:ml-[10px]">
            <RightSide
              billOperations={billOperations}
              className="ml-0 min-w-full"
            />
          </div>
        </ResizableBox>
        <div className="w-full grow md:w-0">
          <CheckoutHeader products={products} billOperations={billOperations} />
          <Items
            paginateProducts={paginateProducts}
            billOperations={billOperations}
          />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
