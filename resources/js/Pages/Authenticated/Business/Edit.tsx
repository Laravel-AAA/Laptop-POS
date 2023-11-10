import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { AuthPageProps, IBusiness, IUser } from "@/types";
import AccountsTable from "./Partials/AccountsTable";
import Footer from "@/Layouts/GuestLayout/Partials/Footer";
import IdentitySection from "./Partials/IdentitySection";
import LocationContactSection from "./Partials/LocationContactSection";
import FinancialSection from "./Partials/FinancialSection";

export default function Edit({ auth }: AuthPageProps) {
  const business =
    usePage<AuthPageProps<{ business: IBusiness & { users: IUser[] } }>>().props
      .business;

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Profile" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
            <AccountsTable className="max-w-xl" business={business} />
          <IdentitySection business={business} />
          <LocationContactSection business={business} />
          <FinancialSection business={business} />
        </div>
      </div>
      <Footer />
    </AuthenticatedLayout>
  );
}
