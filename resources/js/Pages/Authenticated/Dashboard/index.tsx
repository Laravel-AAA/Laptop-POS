import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { AuthPageProps, IDashboard } from "@/types";
import { Head } from "@inertiajs/react";
import { StatisticsCard, StatisticsCardProps } from "./Partials/StatisticsCard";
import { useStatisticsCardsData } from "./Partials/useStatisticsCardsData";
import useStatisticsChartsData from "./Partials/useStatisticsChartsData";
import { StatisticsChart } from "./Partials/StatisticsChart";

export default function Dashboard({
  auth,
  dashboard,
}: AuthPageProps<{ dashboard: IDashboard }>) {
  const cardsData = useStatisticsCardsData(dashboard.cards);

  const chartsData = useStatisticsChartsData(dashboard.charts);

  return (
    <AuthenticatedLayout user={auth.user} header="Dashboard">
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {cardsData.map((props) => (
              <StatisticsCard key={props.title} {...props} />
            ))}
          </div>
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {chartsData.map((props) => (
              <StatisticsChart key={props.title} {...props} />
            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
