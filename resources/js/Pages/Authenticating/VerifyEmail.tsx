import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import { Head, Link } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { AuthPageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FormLayout from "@/Layouts/GuestLayout/FormLayout";
import Footer from "@/Layouts/GuestLayout/Partials/Footer";
import useBetterForm from "@/Utilities/useBetterForm";

export default function VerifyEmail({
  status,
  auth,
}: AuthPageProps<{ status?: string }>) {
  const { post, processing } = useBetterForm({});

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("verification.send"));
  };

  return (
    <AuthenticatedLayout header={null} user={auth.user}>
      <FormLayout>
        <Head title="Email Verification" />

        <div className="mb-4 text-sm text-gray-600">
          Thanks for signing up! Before getting started, you have to verify your
          email address by clicking on the link we just emailed to you. If you
          didn't receive the email, we will gladly send you another.
        </div>

        {status === "verification-link-sent" && (
          <div className="mb-4 text-sm font-medium text-green-600">
            A new verification link has been sent to the email address you
            provided during registration.
          </div>
        )}

        <form onSubmit={submit}>
          <div className="mt-4 flex items-center justify-between">
            <PrimaryButton type="submit" disabled={processing}>
              Resend Verification Email
            </PrimaryButton>

            <Link
              href={route("logout")}
              method="post"
              as="button"
              className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none "
            >
              Log Out
            </Link>
          </div>
        </form>
      </FormLayout>
      <Footer />
    </AuthenticatedLayout>
  );
}
