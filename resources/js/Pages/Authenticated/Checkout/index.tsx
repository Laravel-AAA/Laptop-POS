import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
  AuthPageProps,
  IBill,
  ICreateBill,
  IFilterBill,
  ILaravelPaginate,
  IProduct,
} from "@/types";
import { Head } from "@inertiajs/react";
import Items from "./Partials/Items";
import RightSide from "./Partials/RightSide";
import { ResizableBox } from "react-resizable";
import CheckoutHeader from "./Partials/CheckoutHeader";
import useBetterForm, { UseBetterForm } from "@/Utilities/useBetterForm";

export interface BillOperations {
  form: UseBetterForm<ICreateBill | IBill>;
  changeQty: (product: IProduct, qty: number) => void;
  increaseQty: (product: IProduct) => void;
  decreaseQty: (product: IProduct) => void;
  removeBillDetail: (productId: string) => void;
}
/**If bill.id exist then checkout page is Editing an existed bill */
export default function Checkout({
  auth,
  products: paginateProducts,
  bill,
}: AuthPageProps<{
  products: ILaravelPaginate<IProduct>;
  filter: IFilterBill;
  bill?: IBill;
}>) {
  const products: IProduct[] = paginateProducts.data;
  const form = useBetterForm<ICreateBill | IBill>(
    bill ?? {
      bill_details: [],
      cashReceived: null,
    },
  );

  const setBill = (
    data: (previousData: ICreateBill | IBill) => ICreateBill | IBill,
  ) => form.setAllData(data);

  /** @param product is used to change the qty of the correspond bill_detail */
  function changeQty(product: IProduct, qty: number) {
    setBill((b) => {
      const updatedBill = { ...b };
      const bill_detail = updatedBill.bill_details.find(
        (t) => t.product_id === product.id,
      );
      if (qty !== 0) {
        if (bill_detail) bill_detail.quantity = qty;
        else
          updatedBill.bill_details = [
            ...updatedBill.bill_details,
            { product, product_id: product.id, quantity: qty },
          ];
      } else if (bill_detail)
        updatedBill.bill_details = updatedBill.bill_details.filter(
          (t) => t.product_id !== product.id,
        );
      return updatedBill;
    });
  }

  /** @param product is used to change the qty of the correspond bill_detail */
  function decreaseQty(product: IProduct) {
    setBill((b) => {
      const updatedBill = { ...b };
      const bill_detail = updatedBill.bill_details.find(
        (t) => t.product_id === product.id,
      );
      if (bill_detail) bill_detail.quantity--;
      else
        throw new Error(
          "bill_detail not found in the bill but there is a decreaseQty request!",
          { cause: bill_detail },
        );
      if (bill_detail.quantity === 0)
        updatedBill.bill_details = updatedBill.bill_details.filter(
          (t) => t.product_id !== bill_detail.product_id,
        );
      return updatedBill;
    });
  }

  /** @param product is used to change the qty of the correspond bill_detail */
  function increaseQty(product: IProduct) {
    setBill((b) => {
      const updatedBill = { ...b };
      const bill_detail = updatedBill.bill_details.find(
        (t) => t.product_id === product.id,
      );
      if (bill_detail) bill_detail.quantity++;
      else
        updatedBill.bill_details = [
          ...updatedBill.bill_details,
          { product, product_id: product.id, quantity: 1 },
        ];
      return updatedBill;
    });
  }

  function removeBillDetail(productId: string) {
    setBill((b) => {
      const updatedBill = { ...b };
      updatedBill.bill_details = [
        ...updatedBill.bill_details.filter((t) => t.product_id !== productId),
      ];
      return updatedBill;
    });
  }

  const billOperations: BillOperations = {
    decreaseQty,
    increaseQty,
    form,
    changeQty,
    removeBillDetail,
  };
  // console.log("screen width", window.innerWidth);
  return (
    <AuthenticatedLayout user={auth.user} header={null}>
      <Head title="Checkout" />

      <div className="w-full flex-row-reverse md:flex">
        <ResizableBox
          width={Number(localStorage.getItem("resizable-width")) || 420}
          resizeHandles={["w"]}
          minConstraints={[320, Infinity]}
          maxConstraints={[
            window.innerWidth -
              computedElementWidthById("search") -
              computedElementWidthById("barcode") -
              convertRemToPixels(5),
            Infinity,
          ]}
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

function computedElementWidthById(id: string): number {
  const e = document.getElementById(id);
  // console.log("element", e);
  if (e == null) return 240; //default: is average width looks in my DevTools.
  const computedStyle = getComputedStyle(e);
  // console.log("computedStyle", computedStyle);
  const width = computedStyle.width; //'###px' Ex: '123px'
  // console.log("width", width);
  const float = parseFloat(width); // '###' Ex: '123'
  // console.log("float", float);
  return float;
}

function convertRemToPixels(rem: number): number {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
