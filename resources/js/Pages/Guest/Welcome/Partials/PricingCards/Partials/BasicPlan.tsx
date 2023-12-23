import React from "react";
import Plan, { PlanItemProps } from "./Plan";
import {
  AccessPeriodBenefit,
  NoSetupFeesBenefit,
  NumberOfAccountsBenefit,
  NumberOfInvoicesBenefit,
  NumberOfProductsBenefit,
  ResponsiveBenefit,
  SupportTeamBenefit,
} from "./SharedBenefits";
import { usePage } from "@inertiajs/react";
import { PlansMaxResources } from "@/types";

export const BASIC_MONTHLY_PRICE = 3.99;
export const BASIC_ANNUAL_PRICE = 39.9;

export default function BasicPlan({ period, planProps }: PlanItemProps) {
  return (
    <Plan
      title="Basic"
      desc="Suitable for small businesses or individuals who need a simple and affordable POS system"
      period={period}
      monthlyPrice={BASIC_MONTHLY_PRICE}
      annualPrice={BASIC_ANNUAL_PRICE}
      benefits={<BasicPlanBenefits />}
      {...planProps}
    />
  );
}

export function BasicPlanBenefits() {
  const { basic } = usePage<{ plansMaxRes: PlansMaxResources }>().props
    .plansMaxRes;
  const benefits = [
    <NumberOfAccountsBenefit numberOfAccounts={basic.accounts} />,
    <NumberOfProductsBenefit numberOfProducts={basic.products} />,
    <NumberOfInvoicesBenefit numberOfInvoices={basic.bills} />,
    <AccessPeriodBenefit />,
    <NoSetupFeesBenefit />,
    <ResponsiveBenefit />,
    <SupportTeamBenefit />,
  ];

  return benefits.map((b, i) => (
    <li key={i} className="flex items-center space-x-3">
      {b}
    </li>
  ));
}
