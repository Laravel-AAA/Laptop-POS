import React from "react";
import RowItem from "./Partials/RowItem";
import { BillOperations } from "@/Pages/Authenticated/Checkout";
import { FaCartShopping } from "react-icons/fa6";

export default function CartInfo({
  billOperations,
  taxPercent,
}: {
  billOperations: BillOperations;
  taxPercent: number;
}) {
  return (
    <section className="mt-1 rounded-lg bg-white shadow-sm">
      <table className="table-auto text-left w-full">
        <thead>
          <tr className="bg-blue-gray-50 text-gray-800">
            <th></th>
            <th className="px-1">Items</th>
            <th className="px-1" title="Quantity">Qty</th>
            <th className="px-1" title="Tax included">Price</th>
          </tr>
        </thead>
        <tbody>
          {billOperations.bill.transactions.map((t, i) => (
            <RowItem
              key={i}
              billOperations={billOperations}
              transaction={t}
              taxPercent={taxPercent}
            />
          ))}
        </tbody>
        {/* <tfoot>
          {bill.transactions.length > 0 && (
            <tr className="border-t-2 border-gray-500 bg-blue-gray-50 font-bold text-gray-800">
              <td></td>
              <td>Total</td>
              <td>
                {bill.transactions.reduce((sum, t) => sum + t.quantity, 0)}
              </td>
              <td></td>
            </tr>
          )}
        </tfoot> */}
      </table>
      {billOperations.bill.transactions.length == 0 && (
        <div className="flex justify-center gap-4 py-6 opacity-50">
          <FaCartShopping className="mt-1" />
          <p>Empty cart!</p>
        </div>
      )}
    </section>
  );
}
