import Num from "@/Utilities/Num";
import { IBillDetail } from "@/types";
import React from "react";
import { useTranslation } from "react-i18next";

export default function BillDetailRow({
  transaction,
  taxPercent,
}: {
  transaction: IBillDetail;
  taxPercent: number;
}) {
  const { t } = useTranslation();
  return (
    <>
      <tr className="h-10 max-h-10 border-x border-t">
        <td className="flex h-10 w-14 items-center justify-center">
          {transaction.product.img && (
            <img
              className="max-w-14 max-h-10 print:hidden"
              src={
                transaction.product.img.startsWith("http")
                  ? transaction.product.img
                  : "/products-images/" + transaction.product.img
              }
              alt={"Image of Product " + transaction.product.name}
            />
          )}
        </td>

        <td title={t("Quantity")} className="h-10">
          <div className="mx-1 flex h-10 w-10 justify-between">
            {/* <div className="flex grow border-x border-gray-800 border-opacity-10 bg-secondary-400"> */}
            <Num
              className="grow self-center text-center"
              amount={transaction.quantity}
            />
            {/* </div> */}
          </div>
        </td>
        <td title={t("Single item price (Tax included)")}>
          {/* `ch` is a unit to measure the character `0` width relative to font family and size (e.g., `6ch` means width of `000000` (six zeros) ) */}
          <span className="mx-1 inline-block w-[5ch]">
            <Num
              className="font-semibold text-indigo-700"
              defaultNoAmount
              amount={transaction.product.price}
            />
          </span>
        </td>
        <td title={t("Total items price (Tax not included)")}>
          {/* `ch` is a unit to measure the character `0` width relative to font family and size (e.g., `6ch` means width of `000000` (six zeros) ) */}
          <span className="mx-1 inline-block w-[6ch]">
            <Num
              className="font-semibold text-secondary-700"
              defaultNoAmount
              amount={
                transaction.product.price === null
                  ? null
                  : transaction.product.price * transaction.quantity
              }
            />
          </span>
        </td>
        <td title={t("Total items tax price")}>
          {/* `ch` is a unit to measure the character `0` width relative to font family and size (e.g., `6ch` means width of `000000` (six zeros) ) */}
          <span className="mx-1 inline-block w-[5ch]">
            <Num
              className="font-semibold text-danger-700"
              defaultNoAmount
              amount={
                transaction.product.price == null
                  ? null
                  : transaction.product.price *
                    transaction.quantity *
                    taxPercent
              }
            />
          </span>
        </td>
        <td title={t("Total items price (Tax included)")}>
          {/* `ch` is a unit to measure the character `0` width relative to font family and size (e.g., `6ch` means width of `000000` (six zeros) ) */}
          <span className="mx-1 inline-block w-[6ch]">
            <Num
              className="font-semibold text-primary-700"
              defaultNoAmount
              amount={
                transaction.product.price == null
                  ? null
                  : transaction.product.price *
                    transaction.quantity *
                    (1 + taxPercent)
              }
            />
          </span>
        </td>
      </tr>
      <tr className="border-x border-b">
        <td colSpan={4} title={transaction.product.name}>
          <span
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            }}
            className="mx-1 inline-block overflow-hidden text-blue-gray-800"
          >
            {transaction.product.name}
          </span>
        </td>
      </tr>
    </>
  );
}
