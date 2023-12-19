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

export default function EnhancedPlan({ period, planProps }: PlanItemProps) {
  return (
    <Plan
      title="Enhanced"
      desc="Ideal for medium-sized businesses or professionals who want a more comprehensive POS system"
      period={period}
      monthlyPrice={9}
      annualPrice={89}
      benefits={[
        <NumberOfAccountsBenefit numberOfAccounts={10} />,
        <NumberOfProductsBenefit numberOfProducts={1000} />,
        <NumberOfInvoicesBenefit numberOfInvoices={500000} />,
        <AccessPeriodBenefit />,
        <NoSetupFeesBenefit />,
        <ResponsiveBenefit />,
        <SupportTeamBenefit />,
      ]}
      {...planProps}
    />
  );
}
