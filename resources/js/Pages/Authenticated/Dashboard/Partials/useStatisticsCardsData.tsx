import { useMemo } from "react";
import {
  FaMoneyBills,
  FaReceipt,
  FaWallet,
  FaWarehouse,
} from "react-icons/fa6";
import {  StatisticsCardProps } from "./StatisticsCard";
import { IDashboard } from "@/types";

export function useStatisticsCardsData(
  cardsValue: IDashboard['cards'],
): StatisticsCardProps[] {
  return useMemo(
    () => [
      {
        icon: <FaMoneyBills className="h-6 w-6 text-white" />,
        title: "Sales",
        tooltip: "Today Total Amount of Sales",
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
        icon: <FaWallet className="h-6 w-6 text-white" />,
        title: "Cash Payment",
        tooltip: "Average Payment Method in the Past 7 Days",
        value: cardsValue.cashPaymentPercentage,
        showCurrency: false,
        suffix: "%",
      },
      {
        icon: <FaWarehouse className="h-6 w-6 text-white" />,
        title: "Total Products",
        value: cardsValue.productsCount,
        showCurrency: false,
      },
    ],
    [
      cardsValue.productsCount,
      cardsValue.cashPaymentPercentage,
      cardsValue.bills.increase,
      cardsValue.bills.value,
      cardsValue.sales.increase,
      cardsValue.sales.value,
    ],
  );
}
