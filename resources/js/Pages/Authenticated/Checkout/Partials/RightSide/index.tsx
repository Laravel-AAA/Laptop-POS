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


  useEffect(() => {
    function handleSetScroll() {
      console.log("scroll", window.scrollY);
      console.log(scrolled);
      setScrolled(window.scrollY);
    };
    handleSetScroll();
    window.addEventListener("scroll", handleSetScroll);
    return () => window.removeEventListener("scroll", handleSetScroll);
  }, [scrolled]);
  return (
    <div
      style={{
        height: scrolled > 50 ? "100%" : `calc(100% - ${50 - scrolled}px)`,
      }}
      className={`relative flex flex-col bg-gray-200 px-4 transition duration-700 ease-in-out md:px-0 ${className}`}
    >
      <TotalInfo taxPercent={taxPercent} billOperations={billOperations} />
      <CartInfo taxPercent={taxPercent} billOperations={billOperations} />
      <CheckoutBtn />
    </div>
  );
}
