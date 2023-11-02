import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import { ICreateUser } from "@/types";
import { InertiaFormProps } from "@/types/global";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function UserForm({
  form,
  onBack,
}: {
  form: InertiaFormProps<ICreateUser>;
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
        <InputLabel htmlFor="name" value="Name" />

        <TextInput
          id="name"
          name="name"
          value={form.data.name}
          className="mt-1 block w-full"
          autoComplete="name"
          isFocused={true}
          onChange={(e) => form.setData("name", e.target.value)}
          required
        />

        <InputError message={form.errors.name} className="mt-2" />
      </div>
      <div className="mt-4">
        <InputLabel htmlFor="email" value="Email" />

        <TextInput
          id="email"
          type="email"
          name="email"
          value={form.data.email}
          className="mt-1 block w-full"
          autoComplete="email"
          onChange={(e) => form.setData("email", e.target.value)}
          required
        />

        <InputError message={form.errors.email} className="mt-2" />
      </div>
      <div className="mt-4">
        <InputLabel htmlFor="password" value="Password" />

        <TextInput
          id="password"
          type="password"
          name="password"
          value={form.data.password}
          className="mt-1 block w-full"
          autoComplete="new-password"
          onChange={(e) => form.setData("password", e.target.value)}
          required
        />

        <InputError message={form.errors.password} className="mt-2" />
      </div>
      <div className="mt-4">
        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

        <TextInput
          id="password_confirmation"
          type="password"
          name="password_confirmation"
          value={form.data.password_confirmation}
          className="mt-1 block w-full"
          autoComplete="new-password"
          onChange={(e) =>
            form.setData("password_confirmation", e.target.value)
          }
          required
        />

        <InputError
          message={form.errors.password_confirmation}
          className="mt-2"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center justify-end">
          <PrimaryButton
            type="button"
            className="flex !border-primary bg-white !text-primary hover:bg-primary hover:bg-opacity-10"
            disabled={form.processing}
            onClick={() => onBack()}
          >
            <FaArrowLeft />
            <span>&nbsp;Back</span>
          </PrimaryButton>
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
