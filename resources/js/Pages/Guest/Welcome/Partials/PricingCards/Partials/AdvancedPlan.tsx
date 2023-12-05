import React from "react";
import Plan, { PlanProps } from "./Plan";
import { PlanPeriod } from "@/types";

export default function AdvancedPlan({
  period,
  planProps = {},
}: {
  period: PlanPeriod;
  planProps?: Partial<PlanProps>;
}) {
  //period === "Monthly"
  let price = 19;
  let p: PlanProps["period"] = "month";
  if (period === "Annually") {
    price = 179;
    p = "year";
  }

  return (
    <Plan
      title="Advanced"
      desc="Designed for large businesses or enterprises who require a robust and advanced POS system"
      price={price}
      period={p}
      link={"#"}
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
