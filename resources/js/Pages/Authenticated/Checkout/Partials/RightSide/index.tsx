import TotalInfo from "./Partials/TotalInfo";
import CartInfo from "./Partials/CartInfo";
import CheckoutBtn from "./Partials/CheckoutBtn";
import { BillOperations } from "../..";
import { useEffect, useState } from "react";

export default function RightSide({
  className = "",
  billOperations,
  taxPercent,
}: {
  className?: string;
  billOperations: BillOperations;
  taxPercent: number;
}) {
  const [scrolled, setScrolled] = useState<number>(0);

  /**The scrolled useState and useEffect is because `sticky` RightSide has height of screen hight
   * (if 100% it will follow the whole page height its stickiness is useless).
   * And we want the Checkout button at the bottom but the header take about 47px height,
   * so we have to change the height of the RightSide component so that its height
   * is (screen height - header height) which will make the button looks at bottom.
   * The problem is when scrolling the header height is gone, so we increase the height
   * of RightSide so that it become (screen height) and the Checkout button is at the bottom.
   */
  useEffect(() => {
    function handleSetScroll() {
      setScrolled(window.scrollY);
    }
    handleSetScroll();
    window.addEventListener("scroll", handleSetScroll);
    return () => window.removeEventListener("scroll", handleSetScroll);
  }, [scrolled]);

  return (
    <div
      style={{
        height: scrolled > 50 ? "100%" : `calc(100% - ${50 - scrolled}px)`,
      }}
      className={`relative flex flex-col bg-gray-200 mx-4 transition-all duration-300 ease-in-out md:px-0 ${className}`}
    >
      <TotalInfo taxPercent={taxPercent} billOperations={billOperations} />
      <CartInfo taxPercent={taxPercent} billOperations={billOperations} />
      <CheckoutBtn bill={billOperations.bill} />
    </div>
  );
}
