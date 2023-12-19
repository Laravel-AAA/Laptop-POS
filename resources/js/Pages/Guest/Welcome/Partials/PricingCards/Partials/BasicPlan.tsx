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

export default function BasicPlan({ period, planProps }: PlanItemProps) {
  return (
    <Plan
      title="Basic"
      desc="Suitable for small businesses or individuals who need a simple and affordable POS system"
      period={period}
      monthlyPrice={3.99}
      annualPrice={39.9}
      benefits={[
        <NumberOfAccountsBenefit numberOfAccounts={2} />,
        <NumberOfProductsBenefit numberOfProducts={100} />,
        <NumberOfInvoicesBenefit numberOfInvoices={50000} />,
        <AccessPeriodBenefit />,
        <NoSetupFeesBenefit />,
        <ResponsiveBenefit />,
        <SupportTeamBenefit />,
      ]}
      {...planProps}
    />
  );
}
