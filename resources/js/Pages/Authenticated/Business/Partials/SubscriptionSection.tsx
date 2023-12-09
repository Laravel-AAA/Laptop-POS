import AdvancedPlan from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/AdvancedPlan";
import BasicPlan from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/BasicPlan";
import EnhancedPlan from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/EnhancedPlan";
import { PlanPeriod } from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/Plan";
import { IBusiness, ISubscriptionLinks } from "@/types";
import React, { useState } from "react";

export default function SubscriptionSection({
  business,
  subscriptionLinks,
}: {
  business: IBusiness;
  subscriptionLinks: ISubscriptionLinks;
}) {
  const [period, setPeriod] = useState<PlanPeriod>("Monthly");
  const { basic, enhanced, advanced } = subscriptionLinks;
  console.log(basic.monthly);
  return (
    <section className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
      <div className="space-y-6">
        <header className="max-w-3xl">
          <h2 className="text-lg font-medium text-gray-900">Subscription</h2>
          <p className="text-normal text-gray-600">blah blah</p>
        </header>
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          <BasicPlan
            period={period}
            planProps={{
              actionText: "Downgrade",
              actionProps: {
                className: "paddle-checkout !from-danger-500 !to-danger-700",
                onClick: () =>
                  (window as any).Paddle.Checkout.open(
                    period === "Monthly" ? basic.monthly : basic.annually,
                  ),
              },
            }}
          />
          <EnhancedPlan
            period={period}
            planProps={{
              actionText: "Current Plan",
              actionProps: {
                className: "!from-gray-600 !to-gray-800",
                onClick: () =>
                  (window as any).Paddle.Checkout.open(
                    period === "Monthly" ? enhanced.monthly : enhanced.annually,
                  ),
              },
            }}
          />
          <AdvancedPlan
            period={period}
            planProps={{
              actionText: "Upgrade",
              actionProps: {
                onClick: () =>
                  (window as any).Paddle.Checkout.open(
                    period === "Monthly" ? advanced.monthly : advanced.annually,
                  ),
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}
