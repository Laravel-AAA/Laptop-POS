import { useEffect, FormEventHandler } from "react";
import GuestFormLayout from "@/Layouts/GuestLayout/GuestFormLayout";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import TextInput from "@/Components/Inputs/TextInput";
import { Head } from "@inertiajs/react";
import { AuthPageProps } from "@/types";
import useBetterForm from "@/Utilities/useBetterForm";

export default function ResetPassword({
  token,
  email,
  auth,
}: AuthPageProps<{
  token: string;
  email: string;
}>) {
  const { data, setData, post, processing, errors, reset, isDirty } =
    useBetterForm({
      token: token,
      email: email,
      password: "",
      password_confirmation: "",
    });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("password.store"));
  };

  return (
    <GuestFormLayout auth={auth}>
      <Head title="Reset Password" />

      <form onSubmit={submit}>
        <div>
          <TextInput
            id="email"
            label="Email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="email"
            onChange={(e) => setData("email", e.target.value)}
            errorMsg={errors.email}
            hideError={isDirty("email")}
          />
        </div>

        <div className="mt-4">
          <TextInput
            id="password"
            label="Password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            autoFocus
            onChange={(e) => setData("password", e.target.value)}
            errorMsg={errors.password}
            hideError={isDirty("password")}
          />
        </div>

        <div className="mt-4">
          <TextInput
            label="Confirm Password"
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            autoComplete="new-password"
            required
            onChange={(e) => setData("password_confirmation", e.target.value)}
            errorMsg={errors.password_confirmation}
            hideError={isDirty('password_confirmation')}
          />
        </div>

        <div className="mt-4 flex items-center justify-end">
          <PrimaryButton type="submit" className="ml-4" disabled={processing}>
            Reset Password
          </PrimaryButton>
        </div>
      </form>
    </GuestFormLayout>
  );
}
