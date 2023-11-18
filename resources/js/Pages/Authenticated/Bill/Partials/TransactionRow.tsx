import Num from "@/Utilities/Num";
import { ITransaction } from "@/types";
import React from "react";

export default function TransactionRow({
  transaction: t,
  taxPercent,
}: {
  transaction: ITransaction;
  taxPercent: number;
}) {
  return (
    <>
      <tr className="h-10 max-h-10 border-x border-t">
        <td className="flex h-10 w-14 items-center justify-center">
          {t.product.img && (
            <img
              className="max-w-14 max-h-10 print:hidden"
              src={
                t.product.img.startsWith("http")
                  ? t.product.img
                  : "/products-images/" + t.product.img
              }
              alt={"Image of Product " + t.product.name}
            />
          )}
        </td>

        <td title="Quantity" className="h-10">
          <div className="mx-1 flex h-10 w-10 justify-between">
            {/* <div className="flex grow border-x border-gray-800 border-opacity-10 bg-secondary-400"> */}
            <Num className="grow self-center text-center" amount={t.quantity} />
            {/* </div> */}
          </div>
        </td>
        <td title="Single item price (Tax included)">
          {/* `ch` is a unit to measure the character `0` width relative to font family and size (e.g., `6ch` means width of `000000` (six zeros) ) */}
          <span className="mx-1 inline-block w-[5ch]">
            <Num
              className="font-semibold text-indigo-700"
              defaultNoAmount
              amount={t.product.price}
            />
          </span>
        </td>
        <td title="Total items price (Tax not included)">
          {/* `ch` is a unit to measure the character `0` width relative to font family and size (e.g., `6ch` means width of `000000` (six zeros) ) */}
          <span className="mx-1 inline-block w-[6ch]">
            <Num
              className="font-semibold text-secondary-700"
              defaultNoAmount
              amount={
                t.product.price === null ? null : t.product.price * t.quantity
              }
            />
          </span>
        </td>
        <td title="Total items tax price">
          {/* `ch` is a unit to measure the character `0` width relative to font family and size (e.g., `6ch` means width of `000000` (six zeros) ) */}
          <span className="mx-1 inline-block w-[5ch]">
            <Num
              className="font-semibold text-danger-700"
              defaultNoAmount
              amount={
                t.product.price == null
                  ? null
                  : t.product.price * t.quantity * taxPercent
              }
            />
          </span>
        </td>
        <td title="Total items price (Tax included)">
          {/* `ch` is a unit to measure the character `0` width relative to font family and size (e.g., `6ch` means width of `000000` (six zeros) ) */}
          <span className="mx-1 inline-block w-[6ch]">
            <Num
              className="font-semibold text-primary-700"
              defaultNoAmount
              amount={
                t.product.price == null
                  ? null
                  : t.product.price * t.quantity * (1 + taxPercent)
              }
            />
          </span>
        </td>
      </tr>
      <tr className="border-x border-b">
        <td colSpan={4} title={t.product.name}>
          <span
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            }}
            className="mx-1 inline-block overflow-hidden"
          >
            {t.product.name}
          </span>
        </td>
      </tr>
    </>
  );
}
