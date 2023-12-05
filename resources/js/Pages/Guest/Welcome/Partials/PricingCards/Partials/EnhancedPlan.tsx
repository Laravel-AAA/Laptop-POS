import React from "react";
import Plan, { PlanProps } from "./Plan";
import { PlanPeriod } from "@/types";

export default function EnhancedPlan({
  period,
  planProps = {},
}: {
  period: PlanPeriod;
  planProps?: Partial<PlanProps>;
}) {
  //period === "Monthly"
  let price = 9;
  let p: PlanProps["period"] = "month";
  if (period === "Annually") {
    price = 89;
    p = "year";
  }

  return (
    <Plan
      title="Enhanced"
      desc="Ideal for medium-sized businesses or professionals who want a more comprehensive POS system"
      price={price}
      period={p}
      link={"#"}
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
