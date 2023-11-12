import { AuthPageProps, ICreateUser, IModalAction, IUser } from "@/types";
import React, { FormEvent } from "react";
import FormInputs from "./FormInputs";
import FormActions from "./FormActions";
import useBetterForm from "@/Utilities/useBetterForm";
import { VisitOptions } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";

export default function Form({
  modalAction,
  setModalAction,
}: {
  modalAction: IModalAction<IUser>;
  setModalAction: React.Dispatch<React.SetStateAction<IModalAction<IUser>>>;
}) {
  const business_id = usePage<AuthPageProps>().props.auth.user.business_id;
  const form = useBetterForm<
    (IUser | ICreateUser) & { resendVerificationLink?: boolean }
  >(
    modalAction.state === "create"
      ? ({
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
          role: "Cashier",
          business_id,
        } as ICreateUser)
      : { ...modalAction.data, resendVerificationLink: true },
    modalAction.data ? modalAction.data.id.toString() : "create",
  );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const options: VisitOptions = {
      onSuccess: () => {
        form.clearErrors();
        form.reset();
        setModalAction(() => ({
          state: "create",
          data: null,
          open: false,
        }));
      },
    };

    if (modalAction.state === "create") {
      form.post(route(`account.store`), options);
    } else form.patch(route("account.update", modalAction.data.id), options);
  }

  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <FormInputs form={form} modalAction={modalAction} />
      <FormActions
        modalAction={modalAction}
        setModalAction={setModalAction}
        form={form}
      />
    </form>
  );
}
