import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import Input from "@/Components/Inputs/Input";
import { usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormEventHandler } from "react";
import { AuthPageProps } from "@/types";
import useBetterForm from "@/Utilities/useBetterForm";

export default function AccountsTable({
  mustVerifyEmail,
  status,
  className = "",
}: {
  mustVerifyEmail: boolean;
  status?: string;
  className?: string;
}) {
  const user = usePage<AuthPageProps>().props.auth.user;

  const {
    data,
    setData,
    patch,
    errors,
    processing,
    recentlySuccessful,
    isDirty,
  } = useBetterForm({
    name: user.name,
    email: user.email,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    patch(route("profile.update"));
  };

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">
          Profile Information
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          Update your account's profile information and email address.
        </p>
      </header>

      <form onSubmit={submit} className="mt-6 space-y-6">
        <div>
          <Input
            id="name"
            label="Name"
            className="mt-1 block w-full"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            disabled={processing}
            required
            autoFocus
            autoComplete="name"
            errorMsg={errors.name}
            hideError={isDirty("name")}
          />
        </div>

        <div>

          <Input
            id="email"
            label="Email"
            type="email"
            className="mt-1 block w-full"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            disabled={processing}
            required
            autoComplete="username"
            errorMsg={errors.email}
            hideError={isDirty('email')}
          />
        </div>

        <div className="flex items-center gap-4">
          <PrimaryButton type="submit" disabled={processing}>
            Save
          </PrimaryButton>

          <Transition
            show={recentlySuccessful}
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0"
          >
            <p className="text-sm text-green-500">Saved.</p>
          </Transition>
        </div>
      </form>
    </section>
  );
}
