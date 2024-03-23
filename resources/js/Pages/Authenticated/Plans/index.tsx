import SupportEmailLink from "@/Components/SupportEmailLink";
import { PlanPeriod } from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/Plan";
import React, { useState } from "react";
import ToggleMonthlyYearly from "../Business/Partials/SubscriptionSection/Partials/ToggleMonthlyYearly";
import BasicPlan from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/BasicPlan";
import { router } from "@inertiajs/react";
import EnhancedPlan from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/EnhancedPlan";
import AdvancedPlan from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/AdvancedPlan";
import FullLogo from "@/Components/Logo/FullLogo";
import { useTranslation } from "react-i18next";

export default function Plans() {
  const [period, setPeriod] = useState<PlanPeriod>("Monthly");

  const { t } = useTranslation();
  return (
    <section className="bg-gray-100">
      <div className="flex justify-center pt-5">
        <FullLogo />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <header className="mx-auto mb-10 max-w-screen-md text-center">
          <p className="mb-3 font-semibold uppercase text-primary-600">
            { t( "Pricing" ) }
          </p>

          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            { t( "Designed for businesses like yours" ) }
          </h2>
          <p className="mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            { t( "If you need more resources for your POS system, please contact us and we will be happy to assist you with a custom plan." ) }
            {" "}<SupportEmailLink />
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
              actionText: "Subscribe",
              actionProps: {
                onClick: () =>
                  router.visit(
                    route("subscription.subscribe", { plan: "Basic", period }),
                  ),
              },
            }}
          />
          <EnhancedPlan
            period={period}
            planProps={{
              actionText: "Subscribe",
              actionProps: {
                onClick: () =>
                  router.visit(
                    route("subscription.subscribe", {
                      plan: "Enhanced",
                      period,
                    }),
                  ),
              },
            }}
          />
          <AdvancedPlan
            period={period}
            planProps={{
              actionText: "Subscribe",
              actionProps: {
                onClick: () =>
                  router.visit(
                    route("subscription.subscribe", {
                      plan: "Advanced",
                      period,
                    }),
                  ),
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}
