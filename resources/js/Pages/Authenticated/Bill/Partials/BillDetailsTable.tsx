import { IBill } from "@/types";
import React from "react";
import BillDetailRow from "./BillDetailRow";

export default function BillDetailsTable({ bill }: { bill: IBill }) {
  return (
    <div className="relative h-full overflow-y-auto rounded-md shadow-sm">
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="bg-blue-gray-50 text-gray-800">
            <th>
              <span className="mx-4">Item</span>
            </th>
            <th className="text-center" title="Quantity">
              <span className="mx-1">Qty</span>
            </th>
            <th title="Single item price (Tax included)" className="w-[6ch]">
              <span className="mx-1">Price</span>
            </th>
            <th title="Total items price (Tax not included)" className="w-[6ch]">
              <span className="mx-1">Sub&#8239;Total</span>
            </th>
            <th title="Total items tax price" className="w-[6ch]">
              <span className="mx-1">Tax</span>
            </th>
            <th title="Total items price (Tax included)" className="w-[6ch]">
              <span className="mx-1">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {bill.transactions.map((t) => (
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
