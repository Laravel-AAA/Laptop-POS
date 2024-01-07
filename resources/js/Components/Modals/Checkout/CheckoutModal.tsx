import { AuthPageProps, IBill, ICreateBill } from "@/types";
import { FormEvent } from "react";
import TemplateModal from "../TemplateModal";
import FormFields from "./Partials/FormFields";
import { UseBetterForm } from "@/Utilities/useBetterForm";
import PrimaryMaterialBtn from "@/Components/Buttons/Material/PrimaryMaterialBtn";
import SecondaryMaterialBtn from "@/Components/Buttons/Material/SecondaryMaterialBtn";
import { renderToStaticMarkup } from "react-dom/server";
import BillInfo from "@/Pages/Authenticated/Bill/Partials/BillInfo";
import KeyValue from "@/Utilities/KeyValue";
import { usePage } from "@inertiajs/react";

export default function CheckoutModal({
  form,
  isShow,
  requestClose,
}: {
  form: UseBetterForm<ICreateBill | IBill>;
  isShow: boolean;
  requestClose: () => void;
}) {
  const bill =
    usePage<AuthPageProps<{ createdUpdatedBill: IBill }>>().props
      .createdUpdatedBill;
  function printBillIfApplicable() {
    const isApplicable = JSON.parse(
      localStorage.getItem("printOnSubmit") ?? "true",
    );
    if (isApplicable) printBill();
  }
  function printBill() {
    let p = window.open("", "", "height=800, width=500");
    p?.document.write(
      `<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Bill</title></head><body><style>`,
    );
    for (let i = 0; i < 10; i++)
      p?.document.write(
        document.getElementsByTagName("style")?.[i]?.innerHTML ?? "",
      );
    p?.document.write("</style>");

    p?.document.write(renderToStaticMarkup(<BillInfo bill={bill} />));
    p?.document.write("</body></html>");
    p?.document.close();
    p?.print();
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    form.post(route(`bill.store`), {
      preserveState: false,
      preserveScroll: false,
      onSuccess: () => {
        requestClose();
        form.clearErrors();
        form.reset();
        new Audio("/assets/Audio/checkout-21.mp3").play();
        printBillIfApplicable();
      },
      onError: (e) => {
        console.error(e);
        if (e?.serverError) alert(e.serverError);
      },
    });
  }

  return (
    <TemplateModal
      key="checkoutTemplateModal"
      title="Checkout"
      open={isShow}
      closeModal={() => requestClose()}
    >
      <form className="mt-3" onSubmit={handleSubmit}>
        <FormFields form={form} />

        <div className="mt-4 flex flex-col gap-4 sm:flex-row-reverse">
          <PrimaryMaterialBtn type="submit" disabled={form.processing}>
            {(form.data as IBill).id === undefined ? "Proceed" : "Update"}
          </PrimaryMaterialBtn>

          <SecondaryMaterialBtn
            type="button"
            onClick={() => {
              form.cancel();
              requestClose();
              form.clearErrors();
            }}
          >
            Cancel
          </SecondaryMaterialBtn>
        </div>
      </form>
    </TemplateModal>
  );
}
