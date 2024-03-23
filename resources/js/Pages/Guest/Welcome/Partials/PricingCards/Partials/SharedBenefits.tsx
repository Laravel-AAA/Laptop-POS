import Num from "@/Utilities/Num";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaTabletAlt } from "react-icons/fa";
import {
  FaCheck,
  FaHeadset,
  FaInfinity,
  FaReceipt,
  FaUser,
  FaWarehouse,
} from "react-icons/fa6";

export function NumberOfAccountsBenefit({
  numberOfAccounts,
}: {
  numberOfAccounts: number;
}) {
  const { t } = useTranslation();
  return (
    <span>
      <FaUser className="inline text-primary-800" />
      <div className="ml-2 inline align-middle">
        <Num amount={numberOfAccounts} /> {t("Accounts")}
      </div>
    </span>
  );
}

export function NumberOfProductsBenefit({
  numberOfProducts,
}: {
  numberOfProducts: number;
}) {
  const { t } = useTranslation();
  return (
    <span>
      <FaWarehouse className="inline text-primary-800" />
      <div className="ml-2 inline align-middle">
        <Num compact amount={numberOfProducts} /> {t("Products")}
      </div>
    </span>
  );
}

export function NumberOfInvoicesBenefit({
  numberOfInvoices,
}: {
  numberOfInvoices: number;
}) {
  const { t } = useTranslation();
  return (
    <span>
      <FaReceipt className="inline text-primary-800" />
      <div className="ml-2 inline align-middle">
        <Num compact amount={numberOfInvoices} /> {t("Invoices per month")}
      </div>
    </span>
  );
}

export function NoSetupFeesBenefit() {
  const { t } = useTranslation();
  return (
    <span>
      <FaCheck className="inline text-primary-800" />
      <div className="ml-2 inline align-middle">
        {t("No setup, or hidden fees")}
      </div>
    </span>
  );
}

export function AccessPeriodBenefit() {
  const { t } = useTranslation();
  return (
    <span>
      <FaInfinity className="inline text-primary-800" />
      <div className="ml-2 inline align-middle">
        {t("Full lifetime access")}
      </div>
    </span>
  );
}

export function ResponsiveBenefit() {
  const { t } = useTranslation();
  return (
    <span>
      <FaTabletAlt className="inline text-primary-800" />
      <div className="ml-2 inline align-middle">
        {t("Responsive for any device access")}
      </div>
    </span>
  );
}

export function SupportTeamBenefit() {
  const { t } = useTranslation();
  return (
    <span>
      <FaHeadset className="inline text-primary-800" />
      <div className="ml-2 inline align-middle">
        {t("Support team always available")}
      </div>
    </span>
  );
}
