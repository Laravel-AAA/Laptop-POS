import { IBill, ICreateBill } from "@/types";
import { FormEvent } from "react";
import InputLabel from "../../Inputs/InputLabel";
import TextInput from "../../Inputs/TextInput";
import InputError from "../../Inputs/InputError";
import TemplateModal from "../TemplateModal";
import PrimaryButton from "../../Buttons/PrimaryButton";
import SecondaryButton from "../../Buttons/SecondaryButton";
import { InertiaFormProps } from "@/types/global";
import TotalInfo from "@/Pages/Authenticated/Checkout/Partials/RightSide/Partials/TotalInfo";
import FormFields from "./Partials/FormFields";

export default function CheckoutModal({
  form,
  isShow,
  requestClose,
}: {
  form: InertiaFormProps<ICreateBill | IBill>;
  isShow: boolean;
  requestClose: () => void;
}) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    form.post(route(`bill.store`), {
      onSuccess: () => {
        requestClose();
        form.clearErrors();
        form.reset();
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
          <PrimaryButton type="submit" disabled={form.processing}>
            {(form.data as IBill).id === undefined ? "Checkout" : "Update"}
          </PrimaryButton>

          <SecondaryButton
            type="button"
            onClick={() => {
              form.cancel();
              requestClose();
              form.clearErrors();
            }}
          >
            Cancel
          </SecondaryButton>
        </div>
      </form>
    </TemplateModal>
  );
}