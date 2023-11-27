import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import A from "@/Components/Typography/A";
import { Link } from "@inertiajs/react";

export default function RegisterAction({processing}:{processing:boolean}) {
  return (
    <>
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
            disabled={processing}
          >
            Register
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}
