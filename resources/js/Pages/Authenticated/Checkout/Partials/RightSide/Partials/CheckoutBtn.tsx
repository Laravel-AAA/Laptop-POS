import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import React from "react";

export default function CheckoutBtn() {
  return (
    <div className=" mt-auto ">
      <SecondaryButton style={{fontSize:'1.2rem'}} className="px-10  shadow py-4">Checkout</SecondaryButton>
    </div>
  );
}
