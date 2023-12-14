import AdvancedPlan from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/AdvancedPlan";
import BasicPlan from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/BasicPlan";
import EnhancedPlan from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/EnhancedPlan";
import { PlanPeriod } from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/Plan";
import FromDate from "@/Utilities/FromDate";
import { IBusiness, ISubscriptionLinks } from "@/types";
import React, { useState } from "react";
import SubscriptionState from "./Partials/SubscriptionState";
import CurrentPlanAction from "./Partials/CurrentPlanAction";
import ToggleMonthlyYearly from "./Partials/ToggleMonthlyYearly";
import SubscriptionProgress from "./Partials/SubscriptionProgress";

export default function SubscriptionSection({
  business,
  subscriptionLinks,
}: {
  business: IBusiness;
  subscriptionLinks: ISubscriptionLinks;
}) {
  const [period, setPeriod] = useState<PlanPeriod>("Monthly");
  console.log(subscriptionLinks);
  const { state, subscribedTo, onTrial, progress } = subscriptionLinks;
  // const subscribedTo = "Enhanced" as ISubscriptionLinks["subscribedTo"];
  // const onTrial = new Date('2024-01-01').toISOString() as ISubscriptionLinks['onTrial'];
  // console.log(basic.monthly);
  const isSubscribed =
    subscribedTo === "Advanced" ||
    subscribedTo === "Enhanced" ||
    subscribedTo === "Basic";
  const downgradeClass = "!from-danger-500 !to-danger-700";

  return (
    <section className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
      <div className="space-y-6">
        <header className="max-w-3xl">
          <h2 className="text-lg font-medium text-gray-900">Subscription</h2>
          <p className="text-normal text-gray-600">blah blah</p>
          <SubscriptionState state={state} onTrial={onTrial} />
          {onTrial && (
            <p className="text-normal text-gray-600">
              Trial ends:&nbsp;
              <FromDate className="text-orange-700" date={onTrial} />
            </p>
          )}
        </header>
        {progress && <SubscriptionProgress progress={progress} />}
        <ToggleMonthlyYearly
          period={period}
          setPeriod={(p: PlanPeriod) => setPeriod(p)}
        />
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          <BasicPlan
            period={period}
            planProps={{
              actionNode:
                subscribedTo !== "Basic" ? undefined : <CurrentPlanAction />,
              actionText:
                subscribedTo === "Enhanced" || subscribedTo === "Advanced"
                  ? "Downgrade"
                  : "Subscribe",
              actionHref: isSubscribed
                ? route("swapToBasic", period)
                : undefined,
              actionProps: {
                className:
                  subscribedTo === "Enhanced" || subscribedTo === "Advanced"
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
              actionNode:
                subscribedTo !== "Enhanced" ? undefined : <CurrentPlanAction />,
              actionText:
                subscribedTo === "Basic"
                  ? "Upgrade"
                  : subscribedTo === "Advanced"
                    ? "Downgrade"
                    : "Subscribe",
              actionHref: isSubscribed
                ? route("swapToEnhanced", period)
                : undefined,
              actionProps: {
                className: subscribedTo === "Advanced" ? downgradeClass : "",
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
              actionNode:
                subscribedTo !== "Advanced" ? undefined : <CurrentPlanAction />,
              actionText:
                subscribedTo === "Basic" || subscribedTo === "Enhanced"
                  ? "Upgrade"
                  : "Subscribe",
              actionHref: isSubscribed
                ? route("swapToAdvanced", period)
                : undefined,
              actionProps: {
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
