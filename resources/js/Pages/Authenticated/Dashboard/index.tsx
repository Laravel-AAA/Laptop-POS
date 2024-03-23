import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { AuthPageProps, IDashboard } from "@/types";
import { Head } from "@inertiajs/react";
import { StatisticsCard } from "./Partials/StatisticsCard";
import { useStatisticsCardsData } from "./Partials/useStatisticsCardsData";
import useStatisticsChartsData from "./Partials/useStatisticsChartsData";
import { StatisticsChart } from "./Partials/StatisticsChart";
import Footer from "@/Layouts/GuestLayout/Partials/Footer";
import OutOfStock from "./Partials/OutOfStock";
import { useTranslation } from "react-i18next";

export default function Dashboard({
  auth,
  dashboard,
}: AuthPageProps<{ dashboard: IDashboard }>) {
  const cardsData = useStatisticsCardsData(dashboard.cards);

  const chartsData = useStatisticsChartsData(dashboard.charts);

  const { t } = useTranslation();
  return (
    <AuthenticatedLayout user={auth.user} header={ t( "Dashboard"  )}>
      <Head title={ t( "Dashboard"   )}/>

      <div className="pt-12">
        <div className="mx-auto max-w-7xl space-y-11 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {cardsData.map((props) => (
              <StatisticsCard key={props.title} {...props} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {chartsData.map((props) => (
              <StatisticsChart key={props.title} {...props} />
            ))}
          </div>
          <OutOfStock paginate={dashboard.productsOutOfStock} />
        </div>
      </div>
      <Footer />
    </AuthenticatedLayout>
  );
}
