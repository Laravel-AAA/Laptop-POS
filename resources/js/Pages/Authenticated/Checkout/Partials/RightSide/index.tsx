import TotalInfo from "./Partials/TotalInfo";
import CartInfo from "./Partials/CartInfo";
import CheckoutBtn from "./Partials/CheckoutBtn";
import { ICreateBill } from "@/types";
import { BillOperation } from "../..";

export default function RightSide({
  className = "",
  billOperation,
  taxPercent,
}: {
  className?: string;
  billOperation: BillOperation;
  taxPercent:number;
}) {
  return (
    <div className={`bg-gray-200 ${className}`}>
      <TotalInfo taxPercent={taxPercent} billOperation={billOperation} />
      <CartInfo taxPercent={taxPercent} billOperation={billOperation} />
      <CheckoutBtn />
    </div>
  );
}
