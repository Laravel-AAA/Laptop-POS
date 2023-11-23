import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import Input from "@/Components/Inputs/Input";
import A from "@/Components/Typography/A";
import { UseBetterForm } from "@/Utilities/useBetterForm";
import { ICreateUser } from "@/types";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";

export default function UserForm({
  form,
}: {
  form: UseBetterForm<ICreateUser>;
}) {
  const params = new URLSearchParams(window.location.search);

  useEffect(() => {
    return () => {
      form.reset("password", "password_confirmation");
    };
  }, []);

  return (
    <>
      <div>
        <Input
          label="Your Name"
          name="name"
          type="text"
          value={form.data.name}
          errorMsg={form.errors.name}
          hideError={form.isDirty("name")}
          disabled={form.processing}
          className="mt-1 block w-full"
          autoComplete="name"
          onChange={(e) => form.setData("name", e.target.value)}
          required
        />
      </div>

      <div className="mt-4">
        <Input
          label="Email"
          type="email"
          name="email"
          value={form.data.email}
          errorMsg={form.errors.email}
          hideError={form.isDirty("email")}
          disabled={form.processing || (params.get("email")?.length ?? 0) > 2}
          className="mt-1 block w-full"
          autoComplete="email"
          onChange={(e) => form.setData("email", e.target.value)}
          required
        />
      </div>

      <div className="mt-4">
        <Input
          label="Password"
          type="password"
          name="password"
          value={form.data.password}
          errorMsg={form.errors.password}
          hideError={form.isDirty("password")}
          disabled={form.processing}
          className="mt-1 block w-full"
          autoComplete="new-password"
          onChange={(e) => form.setData("password", e.target.value)}
          required
        />
      </div>

      <div className="mt-4">
        <Input
          label="Confirm Password"
          type="password"
          name="password_confirmation"
          value={form.data.password_confirmation}
          errorMsg={form.errors.password_confirmation}
          hideError={form.isDirty("password_confirmation")}
          disabled={form.processing}
          className="mt-1 block w-full"
          autoComplete="new-password"
          onChange={(e) =>
            form.setData("password_confirmation", e.target.value)
          }
          required
        />
      </div>

      <div className="mx-2 mt-2">
        <p className="text-xs text-gray-600">
          By proceeding, you agree to our{" "}
          <A href={route("termsAndConditions")}>Terms & Conditions</A> and
          confirm you have read our{" "}
          <A href={route("privacyPolicy")}>Privacy and Cookie Statement</A>.
        </p>
      </div>

      <div className="mt-3 flex items-center justify-end">
        <div className="flex items-center justify-end">
          <Link
            href={route("login")}
            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none "
          >
            Already registered?
          </Link>

          <PrimaryButton
            type="submit"
            className="ml-4"
            disabled={form.processing}
          >
            Register
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}
