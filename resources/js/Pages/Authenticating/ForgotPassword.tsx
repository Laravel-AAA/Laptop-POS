import GuestFormLayout from "@/Layouts/GuestLayout/GuestFormLayout";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import Input from "@/Components/Inputs/Input";
import { Head } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { AuthPageProps } from "@/types";
import useBetterForm from "@/Utilities/useBetterForm";

export default function ForgotPassword({
  status,
  auth,
}: AuthPageProps<{ status?: string }>) {
  const { data, setData, post, processing, errors, isDirty } = useBetterForm({
    email: "",
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("password.email"));
  };

  return (
    <GuestFormLayout>
      <Head title="Forgot Password" />

      <div className="mb-4 text-sm text-gray-600">
        Forgot your password? No problem. Just let us know your email address
        and we will email you a password reset link that will allow you to
        choose a new one.
      </div>

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
      )}

      <form onSubmit={submit}>
        <Input
          id="email"
          type="email"
          name="email"
          value={data.email}
          className="mt-1 block w-full"
          autoFocus
          onChange={(e) => setData("email", e.target.value)}
          label="Email"
          required
          errorMsg={errors.email}
          hideError={isDirty("email")}
          disabled={processing}
        />

        <div className="mt-4 flex items-center justify-end">
          <PrimaryButton type="submit" className="ml-4" disabled={processing}>
            Email Password Reset Link
          </PrimaryButton>
        </div>
      </form>
    </GuestFormLayout>
  );
}
