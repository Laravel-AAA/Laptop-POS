import React from "react";
import Plan, { PlanItemProps, PlanProps } from "./Plan";

export default function EnhancedPlan({
  period,
  planProps,
}: PlanItemProps) {
  //period === "Monthly"
  let price = 9;
  let periodText: PlanProps["periodText"] = "month";
  if (period === "Annually") {
    price = 89;
    periodText = "year";
  }

  return (
    <Plan
      title="Enhanced"
      desc="Ideal for medium-sized businesses or professionals who want a more comprehensive POS system"
      price={price}
      periodText={periodText}
      actionProps={{href:'#'}}
      benefits={[
        <span>Individual configuration</span>,
        <span>No setup, or hidden fees</span>,
        <span>
          Team size: <span className="font-semibold">10 developers</span>
        </span>,
        <span>
          Premium support: <span className="font-semibold">24 months</span>
        </span>,
        <span>
          Free updates: <span className="font-semibold">24 months</span>
        </span>,
      ]}
      {...planProps}
    />
  );
}
