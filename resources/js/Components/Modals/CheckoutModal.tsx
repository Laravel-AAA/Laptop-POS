import { ICreateBill } from "@/types";
import { FormEvent } from "react";
import InputLabel from "../Inputs/InputLabel";
import TextInput from "../Inputs/TextInput";
import InputError from "../Inputs/InputError";
import TemplateModal from "./TemplateModal";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import { InertiaFormProps } from "@/types/global";

export default function CheckoutModal({
  form,
  isShow,
  requestClose,
}: {
  form: InertiaFormProps<ICreateBill>;
  isShow: boolean;
  requestClose: () => void;
}) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    form.post(route(`bill.store`), {
      onSuccess: () => {
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
        <div className="w-full">
          <InputLabel htmlFor="cashReceived" value="Cash Received" />

          <TextInput
            id="cashReceived"
            name="cashReceived"
            type="number"
            value={form.data.cashReceived ?? undefined}
            className="mt-1 block w-full"
            isFocused={true}
            disabled={form.processing}
            onChange={(e) =>
              form.setData("cashReceived", Number(e.target.value))
            }
            required
          />

          <InputError message={form.errors.cashReceived} className="mt-2" />
        </div>
        
        {JSON.stringify(form.data.transactions)}

        <div>
          <PrimaryButton type="submit" disabled={form.processing}>
            Create
          </PrimaryButton>

          <SecondaryButton
            type="button"
            onClick={() => {
              form.cancel();
              requestClose();
              form.reset();
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
