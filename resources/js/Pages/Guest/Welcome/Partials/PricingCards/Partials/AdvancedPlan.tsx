import React from "react";
import Plan, { PlanItemProps, PlanProps } from "./Plan";

export default function AdvancedPlan({
  period,
  planProps,
}: PlanItemProps) {
  //period === "Monthly"
  let price = 19;
  let periodText: PlanProps["periodText"] = "month";
  if (period === "Annually") {
    price = 179;
    periodText = "year";
  }

  return (
    <Plan
      title="Advanced"
      desc="Designed for large businesses or enterprises who require a robust and advanced POS system"
      price={price}
      periodText={periodText}
      benefits={[
        <span>Individual configuration</span>,
        <span>No setup, or hidden fees</span>,
        <span>
          Team size: <span className="font-semibold">100+ developers</span>
        </span>,
        <span>
          Premium support: <span className="font-semibold">34 months</span>
        </span>,
        <span>
          Free updates: <span className="font-semibold">34 months</span>
        </span>,
      ]}
      {...planProps}
    />
  );
}
