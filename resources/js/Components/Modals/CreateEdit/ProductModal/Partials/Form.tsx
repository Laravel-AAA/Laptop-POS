import { ICreateProduct, IModalAction, IProduct } from "@/types";
import { useForm } from "@inertiajs/react";
import React, { FormEvent } from "react";
import FormInputs from "./FormInputs";
import FormActions from "./FormActions";

export default function Form({
  modalAction,
  setModalAction,
}: {
  modalAction: IModalAction<IProduct>;
  setModalAction: React.Dispatch<React.SetStateAction<IModalAction<IProduct>>>;
}) {
  const form = useForm<ICreateProduct>(
    modalAction.data?.id.toString() ?? "create",
    modalAction.state == "create"
      ? {
          name: "", //name is required
        }
      : ({ ...modalAction.data, _method: "patch" } as ICreateProduct), //`method spoofing` is a workaround because image can only be submitted on `post` method so we send a hint to laravel that it should consider it `patch`
  );
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    form.post(
      route(
        `product.${modalAction.state == "edit" ? "update" : "store"}`,
        modalAction.state == "edit" ? modalAction.data.id : undefined,
      ),
      {
        onSuccess: () => {
          setModalAction((prev) => ({ ...prev, open: false }));
          form.clearErrors();
          form.reset();
        },
      },
    );
  }

  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <FormInputs formProps={form} modalAction={modalAction} />
      <FormActions
        modalAction={modalAction}
        setModalAction={setModalAction}
        formProps={form}
      />
    </form>
  );
}
