import { useRef, FormEventHandler } from "react";
import Input from "@/Components/Inputs/Input";
import { Transition } from "@headlessui/react";
import useBetterForm from "@/Utilities/useBetterForm";
import PrimaryMaterialBtn from "@/Components/Buttons/Material/PrimaryMaterialBtn";

export default function UpdatePasswordForm({
  className = "",
}: {
  className?: string;
}) {
  const passwordInput = useRef<HTMLInputElement>(null);
  const currentPasswordInput = useRef<HTMLInputElement>(null);

  const {
    data,
    setData,
    errors,
    put,
    reset,
    processing,
    recentlySuccessful,
    isDirty,
  } = useBetterForm({
    current_password: "",
    password: "",
    password_confirmation: "",
  });

  const updatePassword: FormEventHandler = (e) => {
    e.preventDefault();

    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors) => {
        if (errors.password) {
          reset("password", "password_confirmation");
          passwordInput.current?.focus();
        }

        if (errors.current_password) {
          reset("current_password");
          currentPasswordInput.current?.focus();
        }
      },
    });
  };

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">Update Password</h2>

        <p className="mt-1 text-normal text-gray-600">
          Ensure your account is using a long, random password to stay secure.
        </p>
      </header>

      <form onSubmit={updatePassword} className="mt-6 space-y-6">
        <div>
          <Input
            id="current_password"
            label="Current Password"
            ref={currentPasswordInput}
            type="password"
            className="mt-1 block w-full"
            value={data.current_password}
            onChange={(e) => setData("current_password", e.target.value)}
            autoComplete="current-password"
            required
            errorMsg={errors.current_password}
            hideError={isDirty("current_password")}
            disabled={processing}
          />
        </div>

        <div>
          <Input
            id="password"
            label="New Password"
            ref={passwordInput}
            value={data.password}
            onChange={(e) => setData("password", e.target.value)}
            type="password"
            required
            className="mt-1 block w-full"
            autoComplete="new-password"
            errorMsg={errors.password}
            hideError={isDirty("password") || isDirty("password_confirmation")} //if user changed password or confirmPassword then hideError
            disabled={processing}
          />
        </div>

        <div>
          <Input
            id="password_confirmation"
            label="Confirm Password"
            type="password"
            className="mt-1 block w-full"
            value={data.password_confirmation}
            onChange={(e) => setData("password_confirmation", e.target.value)}
            autoComplete="new-password"
            required
            errorMsg={errors.password_confirmation}
            hideError={isDirty("password_confirmation") || isDirty("password")}
            disabled={processing}
          />
        </div>

        <div className="flex items-center gap-4">
          <PrimaryMaterialBtn type="submit" disabled={processing}>
            Save
          </PrimaryMaterialBtn>

          <Transition
            show={recentlySuccessful}
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0"
          >
            <p className="text-sm text-green-500">Saved</p>
          </Transition>
        </div>
      </form>
    </section>
  );
}
