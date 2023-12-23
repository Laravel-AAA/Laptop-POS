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

export const ADVANCED_MONTHLY_PRICE = 19;
export const ADVANCED_ANNUAL_PRICE = 179;

export default function AdvancedPlan({ period, planProps }: PlanItemProps) {
  return (
    <Plan
      title="Advanced"
      desc="Designed for large businesses or enterprises who require a robust and advanced POS system"
      monthlyPrice={ADVANCED_MONTHLY_PRICE}
      annualPrice={ADVANCED_ANNUAL_PRICE}
      period={period}
      benefits={<AdvancedPlanBenefits />}
      {...planProps}
    />
  );
}

export function AdvancedPlanBenefits() {
  const { advanced } = usePage<{ plansMaxRes: PlansMaxResources }>().props
    .plansMaxRes;
    
  const benefits = [
    <NumberOfAccountsBenefit numberOfAccounts={advanced.accounts} />,
    <NumberOfProductsBenefit numberOfProducts={advanced.products} />,
    <NumberOfInvoicesBenefit numberOfInvoices={advanced.bills} />,
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
