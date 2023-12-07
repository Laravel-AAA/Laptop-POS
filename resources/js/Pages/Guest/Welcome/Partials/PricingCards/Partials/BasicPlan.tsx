import React from "react";
import Plan, { PlanItemProps, PlanProps } from "./Plan";

export default function BasicPlan({ period, planProps }: PlanItemProps) {
  //period === "Monthly"
  let price = 3.99;
  let periodText: PlanProps["periodText"] = "month";
  if (period === "Annually") {
    price = 39.9;
    periodText = "year";
  }

  return (
    <Plan
      title="Basic"
      desc="Suitable for small businesses or individuals who need a simple and affordable POS system"
      price={price}
      periodText={periodText}
      benefits={[
        <span>Individual configuration</span>,
        <span>No setup, or hidden fees</span>,
        <span>
          Team size: <span className="font-semibold">1 developer</span>
        </span>,
        <span>
          Premium support: <span className="font-semibold">6 months</span>
        </span>,
        <span>
          Free updates: <span className="font-semibold">6 months</span>
        </span>,
      ]}
      {...planProps}
    />
  );
}
