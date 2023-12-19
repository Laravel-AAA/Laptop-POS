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

export default function AdvancedPlan({ period, planProps }: PlanItemProps) {
  return (
    <Plan
      title="Advanced"
      desc="Designed for large businesses or enterprises who require a robust and advanced POS system"
      monthlyPrice={19}
      annualPrice={179}
      period={period}
      benefits={[
        <NumberOfAccountsBenefit numberOfAccounts={30} />,
        <NumberOfProductsBenefit numberOfProducts={10000} />,
        <NumberOfInvoicesBenefit numberOfInvoices={10000000} />,
        <AccessPeriodBenefit />,
        <NoSetupFeesBenefit />,
        <ResponsiveBenefit />,
        <SupportTeamBenefit />,
      ]}
      {...planProps}
    />
  );
}
