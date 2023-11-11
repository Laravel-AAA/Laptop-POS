import { useRef, useState, FormEventHandler } from "react";
import Modal from "@/Components/Modal";
import Input from "@/Components/Inputs/Input";
import DangerButton from "@/Components/Buttons/DangerButton";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import useBetterForm from "@/Utilities/useBetterForm";

export default function DeleteUserForm({
  className = "",
}: {
  className?: string;
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

  const deleteUser: FormEventHandler = (e) => {
    e.preventDefault();

    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current?.focus(),
      onFinish: () => reset(),
    });
  };

  const closeModal = () => {
    setConfirmingUserDeletion(false);

    reset();
  };

  return (
    <section className={`space-y-6 ${className}`}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">Delete Account</h2>

        <p className="mt-1 text-normal text-gray-600">
          Once your account is deleted, all of its resources and data will be
          permanently deleted. Before deleting your account, please download any
          data or information that you wish to retain.
        </p>
      </header>

      <DangerButton onClick={confirmUserDeletion}>Delete Account</DangerButton>

      <Modal show={confirmingUserDeletion} onClose={closeModal}>
        <form onSubmit={deleteUser} className="p-6">
          <h2 className="text-lg font-medium text-gray-900">
            Are you sure you want to delete your account?
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            Once your account is deleted, all of its resources and data will be
            permanently deleted. Please enter your password to confirm you would
            like to permanently delete your account.
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
              errorMsg={errors.password || (errors as any).hasProducts || (errors as any).isOwner}
              hideError={isDirty("password")}
              disabled={processing}
            />
          </div>

          <div className="mt-6 flex justify-end">
            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

            <DangerButton type="submit" className="ml-3" disabled={processing}>
              Delete Account
            </DangerButton>
          </div>
        </form>
      </Modal>
    </section>
  );
}
