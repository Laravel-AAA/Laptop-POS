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
  console.log(subscriptionLinks);
  const { state, subscribedTo } = subscriptionLinks;
  // if(subscriptionLinks.subscribedTo === 'Advanced'){
  // }
  // console.log(basic.monthly);
  const downgradeClass = "!from-danger-500 !to-danger-700";
  const currentClass = "!from-gray-600 !to-gray-800";

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
              actionText:
                subscribedTo === "Basic"
                  ? "Current Plan"
                  : subscribedTo === "Enhanced" || subscribedTo === "Advanced"
                    ? "Downgrade"
                    : "Subscribe",
              actionProps: {
                className:
                  subscribedTo === "Basic"
                    ? currentClass
                    : subscribedTo === "Enhanced" || subscribedTo === "Advanced"
                      ? downgradeClass
                      : "",
                onClick: () =>
                  (window as any).Paddle.Checkout.open(
                    period === "Monthly"
                      ? subscriptionLinks.basic?.monthly
                      : subscriptionLinks.basic?.annually,
                  ),
              },
            }}
          />
          <EnhancedPlan
            period={period}
            planProps={{
              actionText:
                subscribedTo === "Basic"
                  ? "Upgrade"
                  : subscribedTo === "Enhanced"
                    ? "Current Plan"
                    : subscribedTo === "Advanced"
                      ? "Downgrade"
                      : "Subscribe",
              actionProps: {
                className:
                  subscribedTo === "Enhanced"
                    ? currentClass
                    : subscribedTo === "Advanced"
                      ? downgradeClass
                      : "",
                onClick: () =>
                  (window as any).Paddle.Checkout.open(
                    period === "Monthly"
                      ? subscriptionLinks.enhanced?.monthly
                      : subscriptionLinks.enhanced?.annually,
                  ),
              },
            }}
          />
          <AdvancedPlan
            period={period}
            planProps={{
              actionText:
                subscribedTo === "Basic" || subscribedTo === 'Enhanced'
                  ? "Upgrade"
                  : subscribedTo === "Advanced"
                    ? "Current Plan"
                      : "Subscribe",

              actionProps: {
                className: subscribedTo === "Advanced" ? currentClass : "",
                onClick: () =>
                  (window as any).Paddle.Checkout.open(
                    period === "Monthly"
                      ? subscriptionLinks.advanced?.monthly
                      : subscriptionLinks.advanced?.annually,
                  ),
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}
