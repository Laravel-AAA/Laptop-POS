import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteBusinessSection from "../Business/Partials/DeleteBusinessSection";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { AuthPageProps } from "@/types";
import Footer from "@/Layouts/GuestLayout/Partials/Footer";

export default function Edit({
  auth,
  mustVerifyEmail,
  status,
}: AuthPageProps<{ mustVerifyEmail: boolean; status?: string }>) {
  return (
    <AuthenticatedLayout user={auth.user} header="Profile">
      <Head title="Profile" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <UpdateProfileInformationForm
              mustVerifyEmail={mustVerifyEmail}
              status={status}
              className="max-w-xl"
            />
          </div>

          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <UpdatePasswordForm className="max-w-xl" />
          </div>


        </div>
      </div>
      <Footer />
    </AuthenticatedLayout>
  );
}
