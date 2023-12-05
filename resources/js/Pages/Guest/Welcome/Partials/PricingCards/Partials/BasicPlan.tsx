import React from "react";
import Plan, { PlanProps } from "./Plan";
import { PlanPeriod } from "@/types";

export default function BasicPlan({ period, planProps={} }: { period: PlanPeriod;planProps?:Partial<PlanProps> }) {
  //period === "Monthly"
  let price = 3.99;
  let p: PlanProps["period"] = "month";
  if (period === "Annually") {
    price = 39.9;
    p = "year";
  }

  return (
    <Plan
      title="Starter"
      desc="Suitable for small businesses or individuals who need a simple and affordable POS system"
      price={price}
      period={p}
      link="#"
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
