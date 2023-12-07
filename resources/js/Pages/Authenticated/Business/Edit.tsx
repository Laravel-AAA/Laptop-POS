import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { AuthPageProps, IBusiness, ISubscriptionLinks, IUser } from "@/types";
import AccountsTable from "./Partials/AccountsTable";
import Footer from "@/Layouts/GuestLayout/Partials/Footer";
import IdentitySection from "./Partials/IdentitySection";
import LocationContactSection from "./Partials/LocationContactSection";
import FinancialSection from "./Partials/FinancialSection";
import DeleteBusinessSection from "./Partials/DeleteBusinessSection";
import PricingCards from "@/Pages/Guest/Welcome/Partials/PricingCards";
import SubscriptionSection from "./Partials/SubscriptionSection";

export default function Edit({
  auth,
  business,
  subscriptionLinks,
}: AuthPageProps<{
  business: IBusiness & { users: IUser[] };
  subscriptionLinks:ISubscriptionLinks
}>) {
  return (
    <AuthenticatedLayout user={auth.user} header="Business">
      <Head title="Business" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
          <SubscriptionSection business={business} />
          <AccountsTable business={business} />
          <IdentitySection business={business} />
          <LocationContactSection business={business} />
          <FinancialSection business={business} />
          <DeleteBusinessSection business={business} />
        </div>
      </div>
      <Footer />
    </AuthenticatedLayout>
  );
}
