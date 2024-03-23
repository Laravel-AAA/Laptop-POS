import { PlanPeriod } from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/Plan";
import React from "react";
import { useTranslation } from "react-i18next";

export default function ToggleMonthlyYearly({
  period,
  setPeriod,
}: {
  period: PlanPeriod;
  setPeriod: (e: PlanPeriod) => void;
}) {

  const { t } = useTranslation();
  return (
    <div className="m-auto mb-6 flex max-w-[14rem] justify-center">
      <div className="relative flex w-full rounded-full bg-gray-50 p-1">
        <span
          className="pointer-events-none absolute inset-0 m-1"
          aria-hidden="true"
        >
          <span
            className={`shadow-indigo-950/10 absolute inset-0 w-1/2 transform rounded-full bg-secondary-400 shadow-sm transition-transform duration-200 ease-in-out  ${
              period !== "Annually" ? "translate-x-0" : "translate-x-full"
            }`}
          ></span>
        </span>
        <button
          className={`relative h-8 flex-1 rounded-full text-sm font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
            period !== "Annually" ? "text-blue-gray-900" : "text-blue-gray-500"
          }`}
          onClick={() => setPeriod("Monthly")}
          aria-pressed={period === "Annually"}
        >
{           t( "Monthly"  )}
        </button>
        <button
          className={`relative h-8 flex-1 rounded-full text-sm font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
            period !== "Annually" ? "text-blue-gray-500" : "text-blue-gray-900"
          }`}
          onClick={() => setPeriod("Annually")}
          aria-pressed={period === "Annually"}
        >
{           t( "Yearly"  )}
        </button>
      </div>
    </div>
  );
}
