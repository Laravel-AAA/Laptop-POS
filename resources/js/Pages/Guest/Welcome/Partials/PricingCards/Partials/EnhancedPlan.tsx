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

export const ENHANCED_MONTHLY_PRICE = 9;
export const ENHANCED_ANNUAL_PRICE = 89;

export default function EnhancedPlan({ period, planProps }: PlanItemProps) {
  return (
    <Plan
      title="Enhanced"
      desc="Ideal for medium-sized businesses or professionals who want a more comprehensive POS system"
      period={period}
      monthlyPrice={ENHANCED_MONTHLY_PRICE}
      annualPrice={ENHANCED_ANNUAL_PRICE}
      benefits={<EnhancedPlanBenefits />}
      {...planProps}
    />
  );
}

export function EnhancedPlanBenefits() {
  const { enhanced } = usePage<{ plansMaxRes: PlansMaxResources }>().props
    .plansMaxRes;

  const benefits = [
    <NumberOfAccountsBenefit numberOfAccounts={enhanced.accounts} />,
    <NumberOfProductsBenefit numberOfProducts={enhanced.products} />,
    <NumberOfInvoicesBenefit numberOfInvoices={enhanced.bills} />,
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
