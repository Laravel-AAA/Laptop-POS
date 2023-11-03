import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import TextInput from "@/Components/Inputs/TextInput";
import { UseBetterForm } from "@/Utilities/useBetterForm";
import { ICreateUser } from "@/types";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";

export default function UserForm({
  form,
  onBack,
}: {
  form: UseBetterForm<ICreateUser>;
  onBack: () => void;
}) {
  useEffect(() => {
    return () => {
      form.reset("password", "password_confirmation");
    };
  }, []);

  return (
    <>
      <div>
        <TextInput
          label="Your Name"
          name="name"
          value={form.data.name}
          errorMsg={form.errors.name}
          hideError={form.isDirty('name')}
          className="mt-1 block w-full"
          autoComplete="name"
          onChange={(e) => form.setData("name", e.target.value)}
          autoFocus
          required
        />
      </div>

      <div className="mt-4">
        <TextInput
          label="Email"
          type="email"
          name="email"
          value={form.data.email}
          errorMsg={form.errors.email}
          hideError={form.isDirty('email')}
          className="mt-1 block w-full"
          autoComplete="email"
          onChange={(e) => form.setData("email", e.target.value)}
          required
        />
      </div>

      <div className="mt-4">
        <TextInput
          label="Password"
          type="password"
          name="password"
          value={form.data.password}
          errorMsg={form.errors.password}
          hideError={form.isDirty('password')}
          className="mt-1 block w-full"
          autoComplete="new-password"
          onChange={(e) => form.setData("password", e.target.value)}
          required
        />
      </div>

      <div className="mt-4">
        <TextInput
          label="Confirm Password"
          type="password"
          name="password_confirmation"
          value={form.data.password_confirmation}
          errorMsg={form.errors.password_confirmation}
          hideError={form.isDirty('password_confirmation')}
          className="mt-1 block w-full"
          autoComplete="new-password"
          onChange={(e) =>
            form.setData("password_confirmation", e.target.value)
          }
          required
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center justify-end">
          {/* <PrimaryButton
            type="button"
            className="flex !border-primary bg-white !text-primary hover:bg-primary hover:bg-opacity-10"
            disabled={form.processing}
            onClick={() => onBack()}
          >
            <FaArrowLeft />
            <span>&nbsp;Back</span>
          </PrimaryButton> */}
        </div>

        <div className="flex items-center justify-end">
          <Link
            href={route("login")}
            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
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
