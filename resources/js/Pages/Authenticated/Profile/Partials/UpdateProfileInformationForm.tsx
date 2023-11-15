import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import Input from "@/Components/Inputs/Input";
import { Link, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormEventHandler } from "react";
import { AuthPageProps } from "@/types";
import useBetterForm from "@/Utilities/useBetterForm";
import KeyValue from "@/Utilities/KeyValue";
import PrimaryMaterialBtn from "@/Components/Buttons/Material/PrimaryMaterialBtn";

export default function UpdateProfileInformation({
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

    patch(route("profile.update"), {
      preserveScroll: true,
      preserveState: true,
    });
  };

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">
          Profile Information
        </h2>

        <p className="text-normal mt-1 text-gray-600">
          Update your account's profile information and email address.
        </p>
      </header>

      <form onSubmit={submit} className="mt-6 space-y-6">
        <div>
          <Input
            id="name"
            label="Name"
            type="text"
            className="mt-1 block w-full"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            required
            autoFocus
            autoComplete="name"
            errorMsg={errors.name}
            hideError={isDirty("name")}
            disabled={processing}
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
            required
            autoComplete="username"
            errorMsg={errors.email}
            hideError={isDirty("email")}
            disabled={processing}
          />
        </div>

        {mustVerifyEmail && user.email_verified_at === null && (
          <div>
            <p className="mt-2 text-sm text-danger-500">
              Your email address is unverified.{" "}
              <Link
                href={route("verification.send")}
                method="post"
                as="button"
                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none"
              >
                Click here to re-send the verification email.
              </Link>
            </p>

            {status === "verification-link-sent" && (
              <div className="mt-2 text-sm font-medium text-green-600">
                A new verification link has been sent to your email address.
              </div>
            )}
          </div>
        )}

        <div>
          <KeyValue className="ml-1" k="Role" v={user.role} />
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
