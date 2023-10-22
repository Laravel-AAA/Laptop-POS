import { ICreateProduct, IModalAction, IProduct } from "@/types";
import { useForm } from "@inertiajs/react";
import React, { FormEvent } from "react";
import FormInputs from "./FormInputs";
import FormActions from "./FormActions";
import { InertiaFormProps } from "@/types/global";

export default function Form({
  modalAction,
  setModalAction,
  taxPercent,
}: {
  modalAction: IModalAction<IProduct>;
  setModalAction: React.Dispatch<React.SetStateAction<IModalAction<IProduct>>>;
  taxPercent: number;
}) {
  const form: InertiaFormProps<ICreateProduct> = useForm<ICreateProduct>(
    modalAction.data
      ? modalAction.data.id.toString() + modalAction.data.img //if img changed the the form needs to update the FormImage
      : modalAction.state,
    modalAction.state === "create"
      ? {
          name: "", //name is required
          barcode: null,
          description: null,
          imageFile: null,
          img: null,
          price: null,
          stock: null,
        }
      : ({ ...modalAction.data, _method: "patch" } as ICreateProduct), //`method spoofing` is a workaround because image can only be submitted on `post` method so we send a hint to laravel that it should consider it `patch`
  );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    form.post(
      route(
        `product.${modalAction.state === "edit" ? "update" : "store"}`,
        modalAction.state === "edit" ? modalAction.data.id : undefined,
      ),
      {
        onSuccess: () => {
          form.clearErrors();
          form.reset();
          setModalAction(() => ({
            state: "create",
            data: null,
            open: false,
          }));
        },
      },
    );
  }

  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <FormInputs
        taxPercent={taxPercent}
        formProps={form}
        modalAction={modalAction}
      />
      <FormActions
        modalAction={modalAction}
        setModalAction={setModalAction}
        formProps={form}
      />
    </form>
  );
}
