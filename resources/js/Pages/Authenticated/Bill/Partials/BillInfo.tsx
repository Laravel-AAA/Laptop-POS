import KeyValue from "@/Utilities/KeyValue";
import { IBill } from "@/types";
import React, { useMemo } from "react";
import TransactionsTable from "./TransactionsTable";
import ID from "@/Utilities/ID";
import Num from "@/Utilities/Num";

export default function BillInfo({ bill }: { bill: IBill }) {
  if (!bill.business)
    throw new Error("Business expected to be defined got:" + bill.business);

  const subTotalPrice = useMemo(
    () =>
      bill.transactions.reduce(
        (v, t) => v + (t.product.price ?? 0) * t.quantity,
        0,
      ),
    [bill.transactions],
  );

  const totalPrice = subTotalPrice * (1 + bill.business.taxPercent);

  return (
    <section className="space-y-4">
      <header>
        <h1 className="mb-2 text-center text-lg font-bold">
          {/* فاتورة ضريبية مبسطة */}
          Simplified Invoice
        </h1>

        <KeyValue k="Business" v={bill.business.name} />
        {bill.business.taxIdentificationNumber && (
          <KeyValue
            k="Tax Identification"
            v={bill.business.taxIdentificationNumber}
          />
        )}
        <KeyValue
          k="Date"
          v={new Date(bill.updated_at).toLocaleDateString("en-ca")}
        />
        <KeyValue k="Invoice ID" v={<ID id={bill.id} />} />
      </header>

      <TransactionsTable bill={bill} />

      <section>
        <KeyValue
          k="Total without VAT"
          v={
            <Num
              amount={subTotalPrice}
              showCurrency
              currency={bill.business.currency}
            />
          }
          valueClassName="!text-secondary-700"
        />

        <KeyValue
          k={`VAT (%${Number((bill.business.taxPercent * 100).toFixed(2))})`}
          v={
            <Num
              amount={subTotalPrice * bill.business.taxPercent}
              showCurrency
              currency={bill.business.currency}
            />
          }
          valueClassName="!text-danger-700"
        />
        <KeyValue
          k="Net Invoice"
          v={
            <Num
              amount={totalPrice}
              currency={bill.business.currency}
              showCurrency
            />
          }
          valueClassName="!text-primary-700"
        />
      </section>
      <section>
        <KeyValue
          k="Received"
          v={
            <Num
              amount={bill.cashReceived}
              noAmount="Digital Payment"
              currency={bill.business.currency}
              showCurrency
            />
          }
        />
        {bill.cashReceived && (
          <KeyValue
            k="Remaining"
            v={
              <Num
                amount={
                  bill.cashReceived === null
                    ? null
                    : bill.cashReceived - totalPrice
                }
                noAmount="Digital Payment"
                currency={bill.business.currency}
                showCurrency
              />
            }
          />
        )}
      </section>
      <section></section>
    </section>
  );
}
