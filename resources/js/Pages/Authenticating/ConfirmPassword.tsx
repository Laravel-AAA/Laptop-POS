import { useEffect, FormEventHandler } from "react";
import GuestFormLayout from "@/Layouts/GuestLayout/GuestFormLayout";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import Input from "@/Components/Inputs/Input";
import { Head } from "@inertiajs/react";
import { AuthPageProps } from "@/types";
import useBetterForm from "@/Utilities/useBetterForm";

export default function ConfirmPassword({ auth }: AuthPageProps) {
  const { data, setData, post, processing, errors, reset, isDirty } =
    useBetterForm({
      password: "",
    });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("password.confirm"));
  };

  return (
    <GuestFormLayout>
      <Head title="Confirm Password" />

      <div className="mb-4 text-sm text-gray-600">
        This is a secure area of the application. Please confirm your password
        before continuing.
      </div>

      <form onSubmit={submit}>
        <div className="mt-4">
          <Input
            label="Password"
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoFocus
            onChange={(e) => setData("password", e.target.value)}
            required
            errorMsg={errors.password}
            hideError={isDirty("password")}
            disabled={processing}
          />
        </div>

        <div className="mt-4 flex items-center justify-end">
          <PrimaryButton type="submit" className="ml-4" disabled={processing}>
            Confirm
          </PrimaryButton>
        </div>
      </form>
    </GuestFormLayout>
  );
}
