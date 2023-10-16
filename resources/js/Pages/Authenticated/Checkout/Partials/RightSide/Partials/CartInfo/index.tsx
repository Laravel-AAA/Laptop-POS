import React from "react";
import RowItem from "./Partials/RowItem";
import { BillOperation } from "@/Pages/Authenticated/Checkout";
import { FaCartShopping } from "react-icons/fa6";

export default function CartInfo({
  billOperation: { changeQty, increaseQty, decreaseQty, bill },
  taxPercent,
}: {
  billOperation: BillOperation;
  taxPercent:number
}) {
  return (
    <section className="mt-1 rounded-lg bg-white shadow-sm">
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="bg-blue-gray-50 text-gray-800">
            <th></th>
            <th>Items</th>
            <th title="Quantity">Qty</th>
            <th title="Tax included">Price</th>
          </tr>
        </thead>
        <tbody>
          {bill.transactions.map((t, i) => (
            <RowItem
              key={i}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
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
      {bill.transactions.length == 0 && (
        <div className="py-6 flex justify-center gap-4 opacity-50">
          <FaCartShopping className="mt-1" />
          <p>Empty cart!</p>
        </div>
      )}
    </section>
  );
}
