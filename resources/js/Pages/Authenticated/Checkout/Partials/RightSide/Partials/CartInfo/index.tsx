import React from "react";
import RowItem from "./Partials/RowItem";
import { BillOperation } from "@/Pages/Authenticated/Checkout";

export default function CartInfo({
  billOperation: { changeQty, increaseQty, decreaseQty, bill },
}: {
  billOperation: BillOperation;
}) {
  return (
    <section className="bg-yellow-500">
      CartInfo
      <table>
        <tbody>
          {bill.transactions.map((t, i) => (
            <RowItem key={i} transaction={t} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
