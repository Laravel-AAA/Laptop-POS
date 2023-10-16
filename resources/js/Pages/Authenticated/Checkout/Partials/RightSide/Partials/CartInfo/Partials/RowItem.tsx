import { ICreateTransaction } from "@/types";
import React from "react";

export default function RowItem({
  transaction,
}: {
  transaction: ICreateTransaction;
}) {
  return (
    <tr className="bg-amber-500">
      <div>RowItem</div>
      <td>{transaction.product.name}</td>
      <td>{transaction.quantity}</td>
      {/* <td>{transaction.product.name}</td> */}
    </tr>
  );
}
