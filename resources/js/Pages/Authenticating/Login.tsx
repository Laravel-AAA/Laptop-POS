import { useEffect, FormEventHandler } from "react";
import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import Input from "@/Components/Inputs/Input";
import { Head, Link } from "@inertiajs/react";
import GuestFormLayout from "@/Layouts/GuestLayout/GuestFormLayout";
import { AuthPageProps } from "@/types";
import useBetterForm from "@/Utilities/useBetterForm";

export default function Login({
  status,
  canResetPassword,
  auth,
}: AuthPageProps<{
  status?: string;
  canResetPassword: boolean;
}>) {
  const { data, setData, post, processing, errors, reset, isDirty } =
    useBetterForm({
      email: "",
      password: "",
      remember: false,
    });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("login"));
  };

  return (
    <GuestFormLayout auth={auth}>
      <Head title="Log in" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
      )}

      <form onSubmit={submit}>
        <div>
          <Input
            type="email"
            name="email"
            label="Email"
            value={data.email}
            errorMsg={errors.email}
            hideError={isDirty("email")}
            disabled={processing}
            className="mt-1 block w-full"
            autoComplete="email"
            onChange={(e) => setData("email", e.target.value)}
            autoFocus
            required
          />
        </div>

        <div className="mt-4">
          <Input
            type="password"
            name="password"
            label="Password"
            value={data.password}
            errorMsg={errors.password}
            disabled={processing}
            className="mt-1 block w-full"
            autoComplete="current-password"
            onChange={(e) => setData("password", e.target.value)}
            required
            hideError={isDirty("password")}
          />
        </div>

          <Checkbox
            label={<p className="text-sm text-gray-600">Remember me</p>}
            errorMsg=""
            disabled={processing}
            name="remember"
            checked={data.remember}
            onChange={(e) => setData("remember", e.target.checked)}
          />

        <div className="mt-3 flex items-center justify-end">
          {canResetPassword && (
            <Link
              href={route("password.request")}
              className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Forgot your password?
            </Link>
          )}

          <PrimaryButton type="submit" className="ml-4" disabled={processing}>
            Log in
          </PrimaryButton>
        </div>
      </form>
    </GuestFormLayout>
  );
}
