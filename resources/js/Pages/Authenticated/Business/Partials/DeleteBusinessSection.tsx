import { useRef, useState, FormEventHandler } from "react";
import Modal from "@/Components/Modal";
import Input from "@/Components/Inputs/Input";
import DangerButton from "@/Components/Buttons/DangerButton";
import useBetterForm from "@/Utilities/useBetterForm";
import SecondaryMaterialBtn from "@/Components/Buttons/Material/SecondaryMaterialBtn";
import { IBusiness } from "@/types";
import SupportEmailLink from "@/Components/SupportEmailLink";

export default function DeleteBusinessSection({
  business,
}: {
  business: IBusiness;
}) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef<HTMLInputElement>(null);

  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
    isDirty,
  } = useBetterForm({
    password: "",
  });

  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    destroy(route("business.destroy", business.id), {
      preserveScroll:true,
      onSuccess: () => closeModal(),
      onError: (e) => {
        passwordInput.current?.focus();
      },
      onFinish: () => reset(),
    });
  };

  const closeModal = () => {
    setConfirmingUserDeletion(false);

    reset();
  };

  return (
    <section className=" bg-white p-4 shadow sm:rounded-lg sm:p-8">
      <div className="max-w-2xl space-y-6">
        <header>
          <h2 className="text-lg font-medium text-gray-900">Delete Business</h2>

          <p className="text-normal mt-1 text-gray-600">
            When you delete your business, you will lose access to all the
            resources associated with it, such as accounts, products, bills, and
            business data. They will be permanently erased from our system and
            cannot be recovered.
          </p>
          <p className="text-normal mt-1 text-gray-600">
            To prevent accidental deletion of large businesses, you must first
            delete all other accounts under your business. This
            is a safety measure to ensure that you are fully aware of the
            consequences of deleting your business.
          </p>
          <p className="text-normal mt-1 text-gray-600">
            If you have any questions or concerns about deleting your business,
            please contact us at <SupportEmailLink />. We are happy to assist
            you with any issues you may have.
          </p>
        </header>
        <DangerButton onClick={confirmUserDeletion}>
          Delete Business
        </DangerButton>
        <Modal show={confirmingUserDeletion} onClose={closeModal}>
          <form onSubmit={submit} className="p-6">
            <h2 className="text-lg font-medium text-gray-900">
              Are you sure you want to delete{" "}
              <span className="text-primary-800">{business.name}</span>{" "}
              business?
            </h2>

            <p className="mt-1 text-sm text-gray-600">
              You will lose access to all the resources associated with it, such
              as accounts, products, bills, and business data. They will be
              permanently erased from our system and cannot be recovered.
            </p>

            <div className="mt-6">
              <Input
                id="password"
                label="Password"
                type="password"
                name="password"
                ref={passwordInput}
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                className="mt-1 block w-3/4"
                autoFocus
                required
                placeholder="Password"
                errorMsg={
                  errors.password ||
                  (errors as any).serverError
                }
                hideError={!!(errors as any).serverError ||isDirty("password")}
                disabled={processing}
              />
            </div>

            <div className="mt-6 flex justify-end">
              <SecondaryMaterialBtn onClick={closeModal}>
                Cancel
              </SecondaryMaterialBtn>

              <DangerButton
                type="submit"
                className="ml-3"
                disabled={processing}
              >
                Delete Business
              </DangerButton>
            </div>
          </form>
        </Modal>
      </div>
    </section>
  );
}
