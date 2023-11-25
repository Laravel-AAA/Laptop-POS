import KeyValue from "@/Utilities/KeyValue";
import { IBill } from "@/types";
import React, { useMemo } from "react";
import TransactionsTable from "./TransactionsTable";
import ID from "@/Utilities/ID";
import Num from "@/Utilities/Num";
import QRCode from "react-qr-code";
import FromDate from "@/Utilities/FromDate";
import Logo from "@/Components/Logo/Logo";

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
    <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
      <div className="mt-6 w-full overflow-hidden bg-white px-6 pb-2 pt-4 shadow-md sm:max-w-md sm:rounded-lg">
        <section className="space-y-4">
          <header>
            <h1 className="mb-2 text-center text-sm">
              {/* فاتورة ضريبية مبسطة */}
              Simplified Invoice
            </h1>
            {bill.business?.logo && (
              <Logo
                className="mx-auto mb-3 h-24 w-auto rounded"
                businessLogo={bill.business.logo}
              />
            )}

            <p className="text-center text-lg font-semibold">{bill.business.name}</p>
            {/* <p className="text-center">
              {bill.business.countryCallingCode + " " + bill.business.phone}
            </p> */}
            {/* <p className="text-center">{bill.business.city}</p> */}
            <p className="text-center">{bill.business.address}</p>
            {bill.business.taxIdentificationNumber && (
              <KeyValue
                k="Tax Identification"
                v={bill.business.taxIdentificationNumber}
              />
            )}
          </header>

          <section>
            <KeyValue
              k="Date"
              v={
                <span>
                  {new Date(bill.updated_at).toLocaleDateString("en-ca")}
                  <span className="print:hidden">
                    {" "}
                    ({<FromDate date={bill.updated_at} />})
                  </span>
                </span>
              }
            />
            <KeyValue k="Invoice ID" v={<ID id={bill.id} />} />
            <KeyValue k="Cashier" v={bill.created_by?.name} />
          </section>

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
              k={`VAT (%${Number(
                (bill.business.taxPercent * 100).toFixed(2),
              )})`}
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

          <section className="flex justify-center">
            <QRCode value={location.href} size={150} />
          </section>
            <p className="text-center text-xl font-semibold">Thank you</p>
          <footer>
            <KeyValue className="text-xs text-center border-t pt-1" k="Programmed by" v="Laptop POS" noColon/>
          </footer>
        </section>
      </div>
    </div>
  );
}
