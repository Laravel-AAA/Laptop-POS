import SecondaryButton from "@/Components/Buttons/SecondaryButton";

export default function CheckoutBtn() {
  return (
    <div className=" mt-auto ">
      <SecondaryButton
        style={{ fontSize: "1.2rem" }}
        className="px-10  py-4 shadow"
      >
        Checkout
      </SecondaryButton>
    </div>
  );
}
