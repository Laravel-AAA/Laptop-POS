import AdvancedPlan from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/AdvancedPlan";
import BasicPlan from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/BasicPlan";
import EnhancedPlan from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/EnhancedPlan";
import { IBusiness, PlanPeriod } from "@/types";
import React, { useState } from "react";

export default function SubscriptionSection({
  business,
}: {
  business: IBusiness;
}) {
  const [period, setPeriod] = useState<PlanPeriod>("Monthly");
  return (
    <section className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
      <div className="space-y-6">
        <header className="max-w-3xl">
          <h2 className="text-lg font-medium text-gray-900">Subscription</h2>

          <p className="text-normal text-gray-600">blah blah</p>
        </header>
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          <BasicPlan period={period} planProps={{action:'Downgrade'}}/>
          <EnhancedPlan period={period} planProps={{action:"Current Plan"}} />
          <AdvancedPlan period={period} planProps={{action:'Upgrade'}} />
        </div>
      </div>
    </section>
  );
}
