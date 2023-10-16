import TotalInfo from "./Partials/TotalInfo";
import NumPad from "./Partials/NumPad";
import CartInfo from "./Partials/CartInfo";
import CheckoutBtn from "./Partials/CheckoutBtn";
import { ICreateBill } from "@/types";
import { BillOperation } from "../..";

export default function RightSide({
  className = "",
  billOperation,
}: {
  className?: string;
  billOperation: BillOperation;
}) {
  return (
    <div className={`bg-red-500 ${className}`}>
      <TotalInfo />
      <CartInfo billOperation={billOperation} />
      <NumPad />
      <CheckoutBtn />
    </div>
  );
}
