import TotalInfo from "./Partials/TotalInfo";
import CartInfo from "./Partials/CartInfo";
import CheckoutBtn from "./Partials/CheckoutBtn";
import { BillOperations } from "../..";

export default function RightSide({
  className = "",
  billOperations,
  taxPercent,
}: {
  className?: string;
  billOperations: BillOperations;
  taxPercent:number;
}) {
  return (
    <div className={`bg-gray-200 ${className}`}>
      <TotalInfo taxPercent={taxPercent} billOperations={billOperations} />
      <CartInfo taxPercent={taxPercent} billOperations={billOperations} />
      <CheckoutBtn />
    </div>
  );
}
