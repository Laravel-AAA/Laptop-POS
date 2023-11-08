import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { AuthPageProps } from "@/types";
import AccountsTable from "./Partials/AccountsTable";
import UpdateBusinessForm from "./Partials/UpdateBusinessForm";
import Footer from "@/Layouts/GuestLayout/Partials/Footer";

export default function Edit({
  auth,
  mustVerifyEmail,
  status,
}: AuthPageProps<{ mustVerifyEmail: boolean; status?: string }>) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Profile" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <AccountsTable
              mustVerifyEmail={mustVerifyEmail}
              status={status}
              className="max-w-xl"
            />
          </div>
          <UpdateBusinessForm />
        </div>
      </div>
      <Footer />
    </AuthenticatedLayout>
  );
}
