import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { AuthPageProps } from "@/types";
import { Head } from "@inertiajs/react";
import React from "react";
import StatisticsCard, { StatisticsCardProps } from "./Partials/StatisticsCard";
import {
  FaChartBar,
  FaMoneyBills,
  FaReceipt,
  FaWarehouse,
} from "react-icons/fa6";

interface CardsValue {
  sales: { value: number; increase: number }; //Total amount of bills' total-price (tax included) (last 24 hours)
  bills: { value: number; increase: number }; //number of bills (last 7 days)
  productsCount: number; //number of products (all time).
  users: { value: number; increase: number };
}
export default function Dashboard({
  auth,
  cardsValue,
}: AuthPageProps<{ cardsValue: CardsValue }>) {
  const statisticsCardsData: StatisticsCardProps[] = [
    {
      icon: <FaMoneyBills className="h-6 w-6 text-white" />,
      title: "Sales",
      tooltip: "Total Amount of Sales in the Past 24 Hours",
      value: cardsValue.sales.value,
      showCurrency: true,
      footer: {
        increase: cardsValue.sales.increase,
        label: "than yesterday",
      },
    },
    {
      icon: <FaReceipt className="h-6 w-6 text-white" />,
      title: "Bills",
      tooltip: "Bills Created in the Past 7 Days",
      value: cardsValue.bills.value,
      showCurrency: false,
      footer: {
        increase: cardsValue.bills.increase,
        label: "than last week",
      },
    },
    {
      icon: <FaWarehouse className="h-6 w-6 text-white" />,
      title: "Total Products",
      value: cardsValue.productsCount,
      showCurrency: false,
    },
    {
      icon: <FaChartBar className="h-6 w-6 text-white" />,
      title: "Sales",
      tooltip: "",
      value: 103430,
      showCurrency: true,
      footer: {
        increase: 0,
        label: "than yesterday",
      },
    },
  ];

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg"> */}
          <div className="mb-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {statisticsCardsData.map((rest) => (
              <StatisticsCard key={rest.title} {...rest} />
            ))}
          </div>
          {/* </div> */}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
