import React, { useState } from "react";
import EnhancedPlan from "./Partials/EnhancedPlan";
import BasicPlan from "./Partials/BasicPlan";
import AdvancedPlan from "./Partials/AdvancedPlan";
import { PlanPeriod } from "./Partials/Plan";
import ToggleMonthlyYearly from "@/Pages/Authenticated/Business/Partials/SubscriptionSection/Partials/ToggleMonthlyYearly";
import SupportEmailLink from "@/Components/SupportEmailLink";
import { router } from "@inertiajs/react";

export default function PricingCards() {
  const [period, setPeriod] = useState<PlanPeriod>("Monthly");

  return (
    <section id="pricing" className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <header className="mx-auto mb-10 max-w-screen-md text-center">
          <p className="mb-3 text-lg font-light tracking-wide text-primary-600">
            Affordable Pricing
          </p>

          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for businesses like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            If you need more resources for your POS system, please contact us
            and we will be happy to assist you with a custom plan.{" "}
            <SupportEmailLink />{" "}
          </p>
        </header>
        <ToggleMonthlyYearly
          period={period}
          setPeriod={(p: PlanPeriod) => setPeriod(p)}
        />
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          <BasicPlan
            period={period}
            planProps={{
              actionProps: {
                onClick: () =>
                  router.visit(
                    route("register.method", { plan: "Basic", period }),
                  ),
              },
            }}
          />
          <EnhancedPlan
            period={period}
            planProps={{
              actionProps: {
                onClick: () =>
                  router.visit(
                    route("register.method", { plan: "Enhanced", period }),
                  ),
              },
            }}
          />
          <AdvancedPlan
            period={period}
            planProps={{
              actionProps: {
                onClick: () =>
                  router.visit(
                    route("register.method", { plan: "Advanced", period }),
                  ),
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}
