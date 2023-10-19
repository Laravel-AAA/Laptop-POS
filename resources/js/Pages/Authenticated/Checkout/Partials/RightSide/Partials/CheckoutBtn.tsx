import SecondaryButton from "@/Components/Buttons/SecondaryButton";

export default function CheckoutBtn() {
  return (
    <>
      {/* The white shadow above Checkout button.
      Shadow is white on white background so we don't need to hide it if there is little items
      (i.e., table dose not had a scroll).
      Table has bottom margin of nearly same hight of the shadow, so we don't need to hide it;
      when user scroll till the last row it will disappear ;)
       */}
      <div className="pointer-events-none absolute bottom-[50px] h-5 w-full bg-gradient-to-t from-white to-transparent opacity-90"></div>
      <div className="absolute bottom-0 w-full">
        <SecondaryButton
          //  Some classes can not be overridden here so we use style attribute
          style={{ fontSize: "1.2rem", fontWeight: 800 }}
          className="bottom-0  h-[50px] w-full min-w-full rounded-none"
        >
          Checkout
        </SecondaryButton>
      </div>
    </>
  );
}
