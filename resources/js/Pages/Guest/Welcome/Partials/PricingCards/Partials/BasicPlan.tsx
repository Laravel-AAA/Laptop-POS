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
  const benefits = [
    <NumberOfAccountsBenefit numberOfAccounts={2} />,
    <NumberOfProductsBenefit numberOfProducts={100} />,
    <NumberOfInvoicesBenefit numberOfInvoices={50000} />,
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
