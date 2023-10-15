import TotalInfo from "./Partials/TotalInfo";
import NumPad from "./Partials/NumPad";
import CartInfo from "./Partials/CartInfo";

export default function RightSide({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-red-500 sticky ${className}`}>
      <TotalInfo />
      <CartInfo />
      <NumPad />
    </div>
  );
}
