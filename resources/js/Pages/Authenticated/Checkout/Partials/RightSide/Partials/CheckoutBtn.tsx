import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import CheckoutModal from "@/Components/Modals/Checkout/CheckoutModal";
import { UseBetterForm } from "@/Utilities/useBetterForm";
import { IBill, ICreateBill } from "@/types";
import { useState } from "react";

export default function CheckoutBtn({
  form,
}: {
  form: UseBetterForm<ICreateBill | IBill>;
}) {
  const [isCheckoutModal, setCheckoutModal] = useState<boolean>(false);

  return (
    <>
      {/* The white shadow above Checkout button.
      Shadow is white on white background so we don't need to hide it if there is little items
      (i.e., table does not had a scroll bar).
      Table has bottom margin with the same hight of the shadow, so we don't need to hide it;
      when user scroll till the last row the shadow will disappear ;)
       */}
      <div className="pointer-events-none absolute bottom-[50px] h-5 w-full bg-gradient-to-t from-white to-transparent opacity-90"></div>
      <div className="absolute bottom-0 w-full">
        <SecondaryButton
          //  Some classes can not be overridden here so we use style attribute
          style={{ fontSize: "1.2rem", fontWeight: 800 }}
          className="bottom-0  h-[50px] w-full min-w-full rounded-none"
          disabled={form.processing || form.data.bill_details.length == 0}
          title={
            form.processing || form.data.bill_details.length == 0
              ? "You can't Checkout with an empty cart!"
              : ""
          }
          onClick={() => setCheckoutModal(true)}
        >
          {(form.data as IBill).id === undefined ? "Submit" : "Update"}
        </SecondaryButton>
      </div>
      <CheckoutModal
        isShow={isCheckoutModal}
        requestClose={() => setCheckoutModal(false)}
        form={form}
      />
    </>
  );
}
