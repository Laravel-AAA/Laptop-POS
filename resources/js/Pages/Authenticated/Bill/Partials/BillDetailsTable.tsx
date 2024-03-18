import { IBill } from "@/types";
import React from "react";
import BillDetailRow from "./BillDetailRow";
import { useTranslation } from "react-i18next";

export default function BillDetailsTable({ bill }: { bill: IBill }) {
  const { t } = useTranslation();
  return (
    <div className="relative h-full overflow-y-auto rounded-md shadow-sm">
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="bg-blue-gray-50 text-gray-800">
            <th>
              <span className="mx-4">{t("Item")}</span>
            </th>
            <th className="text-center" title={t("Quantity")}>
              <span className="mx-1">{t("Qty")}</span>
            </th>
            <th
              title={t("Single item price (Tax included)")}
              className="w-[6ch]"
            >
              <span className="mx-1">{t("Price")}</span>
            </th>
            <th
              title={t("Total items price (Tax not included)")}
              className="w-[6ch]"
            >
              <span className="mx-1">{t("Sub-total")}</span>
            </th>
            <th title={t("Total items tax price")} className="w-[6ch]">
              <span className="mx-1">{t("Tax")}</span>
            </th>
            <th
              title={t("Total items price (Tax included)")}
              className="w-[6ch]"
            >
              <span className="mx-1">{t("Total")}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {bill.bill_details.map((t) => (
            <BillDetailRow
              key={t.id}
              transaction={t}
              taxPercent={bill.business?.taxPercent ?? 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
