import { BillOperations } from "@/Pages/Authenticated/Checkout";
import Num from "@/Utilities/Num";
import { ICreateTransaction } from "@/types";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { FaTrash } from "react-icons/fa";

export default function RowItem({
  transaction,
  billOperations: { increaseQty, decreaseQty, removeTransaction },
  taxPercent,
}: {
  transaction: ICreateTransaction;
  billOperations: BillOperations;
  taxPercent: number;
}) {
  return (
    <tr className="group h-10 max-h-10 border-y">
      <td className="flex h-10 w-14 items-center">
        {transaction.product.img && (
          <img
            className="max-w-14 max-h-10 group-hover:hidden"
            src={
              transaction.product.img.startsWith("http")
                ? transaction.product.img
                : "products-images/" + transaction.product.img
            }
          />
        )}
        <RemoveBtn
          className="max-w-14 hidden h-10 max-h-14 text-right group-hover:block "
          onClick={() => removeTransaction(transaction.product_id)}
        />
      </td>
      <td className="px-1" title={transaction.product.name}>
        <span
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
          }}
          className="overflow-hidden"
        >
          {transaction.product.name}
        </span>
      </td>
      <td className="px-1">
        <Num amount={transaction.quantity} />
      </td>
      <td className="px-1" title="Tax included">
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

function RemoveBtn({
  disabled,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      title="Remove item"
      type="button"
      className={`flex-inline w-full items-center bg-white
      bg-opacity-80 text-danger-600 transition
      duration-200 ease-in-out  hover:bg-opacity-90
      hover:text-danger-700 focus:outline-none
      active:scale-95 disabled:opacity-25 disabled:active:scale-100 ${className} ${
        disabled && "opacity-25"
      } `}
      disabled={disabled}
      {...props}
    >
      <FaTrash className="mx-auto shadow hover:shadow-md" />
    </button>
  );
}
