import Num from "@/Utilities/Num";
import React from "react";
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
  return (
    <span>
      <FaUser className="inline text-primary-800" />
      <div className="ml-2 inline align-middle">
        <Num amount={numberOfAccounts} /> Accounts
      </div>
    </span>
  );
}

export function NumberOfProductsBenefit({
  numberOfProducts,
}: {
  numberOfProducts: number;
}) {
  return (
    <span>
      <FaWarehouse className="inline text-primary-800" />
      <div className="ml-2 inline align-middle">
        <Num amount={numberOfProducts} /> Products
      </div>
    </span>
  );
}

export function NumberOfInvoicesBenefit({
  numberOfInvoices,
}: {
  numberOfInvoices: number;
}) {
  return (
    <span>
      <FaReceipt className="inline text-primary-800" />
      <div className="ml-2 inline align-middle">
        <Num compact amount={numberOfInvoices} /> Invoices
      </div>
    </span>
  );
}

export function NoSetupFeesBenefit() {
  return (
    <span>
      <FaCheck className="inline text-primary-800" />
      <div className="ml-2 inline align-middle">No setup, or hidden fees</div>
    </span>
  );
}

export function AccessPeriodBenefit() {
  return (
    <span>
      <FaInfinity className="inline text-primary-800" />
      <div className="ml-2 inline align-middle">Full lifetime access</div>
    </span>
  );
}

export function ResponsiveBenefit() {
  return (
    <span>
      <FaTabletAlt className="inline text-primary-800" />
      <div className="ml-2 inline align-middle">Responsive for any device access</div>
    </span>
  );
}

export function SupportTeamBenefit() {
  return (
    <span>
      <FaHeadset className="inline text-primary-800" />
      <div className="ml-2 inline align-middle">Support team always available</div>
    </span>
  );
}
