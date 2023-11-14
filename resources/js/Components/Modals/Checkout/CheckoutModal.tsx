import { IBill, ICreateBill } from "@/types";
import { FormEvent } from "react";
import TemplateModal from "../TemplateModal";
import FormFields from "./Partials/FormFields";
import { UseBetterForm } from "@/Utilities/useBetterForm";
import PrimaryMaterialBtn from "@/Components/Buttons/Material/PrimaryMaterialBtn";
import SecondaryMaterialBtn from "@/Components/Buttons/Material/SecondaryMaterialBtn";

export default function CheckoutModal({
  form,
  isShow,
  requestClose,
}: {
  form: UseBetterForm<ICreateBill | IBill>;
  isShow: boolean;
  requestClose: () => void;
}) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    form.post(route(`bill.store`), {
      preserveState: false,
      preserveScroll: false,
      onSuccess: () => {
        requestClose();
        form.clearErrors();
        form.reset();
      },
      onError: (e) => {
        console.error(e);
        if (e?.serverError) alert(e.serverError);
      },
    });
  }

  return (
    <TemplateModal
      title="Checkout"
      open={isShow}
      closeModal={() => requestClose()}
    >
      <form className="mt-3" onSubmit={handleSubmit}>
        <FormFields form={form} />

        <div className="mt-4 flex flex-col gap-4 sm:flex-row-reverse">
          <PrimaryMaterialBtn type="submit" disabled={form.processing}>
            {(form.data as IBill).id === undefined ? "Checkout" : "Update"}
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
