import React, { useState } from "react";
import EnhancedPlan from "./Partials/EnhancedPlan";
import BasicPlan from "./Partials/BasicPlan";
import AdvancedPlan from "./Partials/AdvancedPlan";
import { PlanPeriod } from "./Partials/Plan";
import ToggleMonthlyYearly from "@/Pages/Authenticated/Business/Partials/SubscriptionSection/Partials/ToggleMonthlyYearly";

export default function PricingCards() {
  const [period, setPeriod] = useState<PlanPeriod>("Monthly");

  return (
    <section className="bg-white bg-opacity-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-10 max-w-screen-md text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for businesses like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
            <ToggleMonthlyYearly
          period={period}
          setPeriod={(p: PlanPeriod) => setPeriod(p)}
        />
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          <BasicPlan
            period={period}
            planProps={{ actionProps: {  } }}
          />
          <EnhancedPlan
            period={period}
            planProps={{ actionProps: {  } }}
          />
          <AdvancedPlan
            period={period}
            planProps={{ actionProps: {  } }}
          />
        </div>
      </div>
    </section>
  );
}
