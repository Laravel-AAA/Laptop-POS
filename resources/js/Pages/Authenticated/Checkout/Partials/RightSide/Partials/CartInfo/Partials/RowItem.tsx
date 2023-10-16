import { BillOperation } from "@/Pages/Authenticated/Checkout";
import Num from "@/Utilities/Num";
import { ICreateTransaction } from "@/types";
import React from "react";

export default function RowItem({
  transaction,
  increaseQty,
  decreaseQty,
  taxPercent,
}: {
  transaction: ICreateTransaction;
  increaseQty: BillOperation["increaseQty"];
  decreaseQty: BillOperation["decreaseQty"];
  taxPercent: number;
}) {
  return (
    <tr className="h-10  border-y">
      <td>
        {transaction.product.img && (
          <img
            className="max-w-20 max-h-10"
            src={
              transaction.product.img.startsWith("http")
                ? transaction.product.img
                : "products-images/" + transaction.product.img
            }
          />
        )}
      </td>
      <td className="truncate" title={transaction.product.name}>
        <div className="truncate max-w-full">
          {transaction.product.name}
        </div>
      </td>
      <td className="w-10">
        <Num amount={transaction.quantity} />
      </td>
      <td title="Tax included">
        {transaction.product.price == null ? (
          "N/A"
        ) : (
          <Num
            currency="$"
            className="font-semibold text-primary-700"
            amount={transaction.product.price * (1 + taxPercent)}
          />
        )}
      </td>
    </tr>
  );
}
