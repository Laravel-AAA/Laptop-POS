import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { AuthPageProps, IBusiness, ISubscriptionLinks, IUser } from "@/types";
import AccountsTable from "./Partials/AccountsTable";
import Footer from "@/Layouts/GuestLayout/Partials/Footer";
import IdentitySection from "./Partials/IdentitySection";
import LocationContactSection from "./Partials/LocationContactSection";
import FinancialSection from "./Partials/FinancialSection";
import DeleteBusinessSection from "./Partials/DeleteBusinessSection";
import SubscriptionSection from "./Partials/SubscriptionSection/SubscriptionSection";
import { useTranslation } from "react-i18next";

export default function Edit({
  auth,
  business,
  subscriptionLinks,
}: AuthPageProps<{
  business: IBusiness & { users: IUser[] };
  subscriptionLinks: ISubscriptionLinks;
}>) {

  const { t } = useTranslation();
  return (
    <AuthenticatedLayout user={auth.user} header="Business">
      <Head title={ t( "Business"   )}/>

      <div className="py-12">
        <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
          <SubscriptionSection subscriptionLinks={subscriptionLinks} business={business} />
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
