import AdvancedPlan from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/AdvancedPlan";
import BasicPlan from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/BasicPlan";
import EnhancedPlan from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/EnhancedPlan";
import { PlanPeriod } from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/Plan";
import FromDate from "@/Utilities/FromDate";
import { IBusiness, ISubscriptionLinks, Plan } from "@/types";
import React, { useState } from "react";
import SubscriptionState from "./Partials/SubscriptionState";
import CurrentPlanAction from "./Partials/CurrentPlanAction";
import ToggleMonthlyYearly from "./Partials/ToggleMonthlyYearly";
import SubscriptionProgress from "./Partials/SubscriptionProgress";
import AlertModal from "@/Components/Modals/AlertModal";
import { router } from "@inertiajs/react";

export default function SubscriptionSection({
  business,
  subscriptionLinks,
}: {
  business: IBusiness;
  subscriptionLinks: ISubscriptionLinks;
}) {
  const [period, setPeriod] = useState<PlanPeriod>("Monthly");
  const [upDownGrade, setUpDownGrade] = useState<{
    from: Plan;
    to: Plan;
    isShow: boolean;
    route: string;
  }>({ from: "Basic", to: "Basic", isShow: false, route: "" });
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
      <AlertModal
        title={`${
          isUpgrade(upDownGrade.from, upDownGrade.to) ? "Upgrade" : "Downgrade"
        } to ${upDownGrade.to}`}
        paragraph={`You are about to ${
          isUpgrade(upDownGrade.from, upDownGrade.to) ? "upgrade" : "downgrade"
        } your subscription plan from ${upDownGrade.from} to ${
          upDownGrade.to
        }. We will charge or refund the difference between the old and new billing amount right away. The calculation is based on the number of days left in the current billing cycle.`}
        isOpen={upDownGrade.isShow}
        requestClose={() =>
          setUpDownGrade((p) => ({
            ...p,
            isShow: false,
          }))
        }
        buttons={{
          danger: !isUpgrade(upDownGrade.from, upDownGrade.to)
            ? {
                text: "Downgrade",
                props: { onClick: () => router.visit(upDownGrade.route) },
              }
            : undefined,
          primary: isUpgrade(upDownGrade.from, upDownGrade.to)
            ? {
                text: "Upgrade",
                props: { onClick: () => router.visit(upDownGrade.route) },
              }
            : undefined,
        }}
      />
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
              actionProps: {
                className:
                  subscribedTo === "Enhanced" || subscribedTo === "Advanced"
                    ? downgradeClass
                    : "",
                onClick: () =>
                  isSubscribed
                    ? setUpDownGrade({
                        from: subscribedTo,
                        to: "Basic",
                        isShow: true,
                        route: route("swapToBasic", period),
                      })
                    : (window as any).Paddle.Checkout.open(
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
              actionProps: {
                className: subscribedTo === "Advanced" ? downgradeClass : "",
                onClick: () =>
                  isSubscribed
                    ? setUpDownGrade({
                        from: subscribedTo,
                        to: "Enhanced",
                        isShow: true,
                        route: route("swapToEnhanced", period),
                      })
                    : (window as any).Paddle.Checkout.open(
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
              actionProps: {
                onClick: () =>
                  isSubscribed
                    ? setUpDownGrade({
                        from: subscribedTo,
                        to: "Advanced",
                        isShow: true,
                        route: route("swapToAdvanced", period),
                      })
                    : (window as any).Paddle.Checkout.open(
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

function isUpgrade(from: Plan, to: Plan) {
  return (
    (from === "Basic" && (to === "Enhanced" || to === "Advanced")) ||
    (from === "Enhanced" && to === "Advanced")
  );
}
