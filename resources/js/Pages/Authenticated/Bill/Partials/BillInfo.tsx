import KeyValue from "@/Utilities/KeyValue";
import { IBill } from "@/types";
import React, { useMemo } from "react";
import BillDetailsTable from "./BillDetailsTable";
import ID from "@/Utilities/ID";
import Num from "@/Utilities/Num";
import QRCode from "react-qr-code";
import FromDate from "@/Utilities/FromDate";
import Logo from "@/Components/Logo/Logo";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function BillInfo({ bill }: { bill: IBill }) {
  if (!bill.business)
    throw new Error("Business expected to be defined got:" + bill.business);

  const subTotalPrice = useMemo(
    () =>
      bill.bill_details.reduce(
        (v, t) => v + (t.product.price ?? 0) * t.quantity,
        0,
      ),
    [bill.bill_details],
  );

  const totalPrice = subTotalPrice * (1 + bill.business.taxPercent);

  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center pt-6 print:pt-0 sm:justify-center sm:pt-0">
      <div className="mt-6 w-full overflow-hidden bg-white px-6 pb-2 pt-4 shadow-md print:mt-4 sm:max-w-md sm:rounded-lg">
        <section className="space-y-4">
          <header>
            <h1 className="mb-2 text-center text-xs tracking-wider">
              {/* فاتورة ضريبية مبسطة */}
              {t("Simplified Invoice")}
            </h1>
            {bill.business?.logo && (
              <Logo
                className="mx-auto mb-3 h-24 w-auto rounded"
                businessLogo={bill.business.logo}
              />
            )}

            <p className="text-center text-lg font-semibold">
              {bill.business.name}
            </p>
            {/* <p className="text-center">
              {bill.business.countryCallingCode + " " + bill.business.phone}
            </p> */}
            {/* <p className="text-center">{bill.business.city}</p> */}
            {bill.business.address && (
              <p className="text-center">{bill.business.address}</p>
            )}
            {bill.business.taxIdentificationNumber && (
              <KeyValue
                k="Tax Identification"
                v={bill.business.taxIdentificationNumber}
              />
            )}
          </header>

          <section>
            <KeyValue
              k={t("Date")}
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
            <KeyValue k="Cashier" v={bill.created_by?.name ?? t("N/A")} />
          </section>

          <BillDetailsTable bill={bill} />

          <section>
            {bill.business.taxPercent !== 0 && (
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
            )}

            {bill.business.taxPercent !== 0 && (
              <KeyValue
                k={`${t("VAT")} (%${Number(
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
            )}
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
                  noAmount={t("Digital Payment")}
                  currency={bill.business.currency}
                  showCurrency
                />
              }
            />
            {bill.cashReceived &&
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
            }
          </section>

          <section className="flex justify-center">
            <QRCode value={location.href} size={150} />
          </section>
          <p className="text-center text-xl font-semibold">Thank you</p>
          <footer>
            <Link href="/">
              <KeyValue
                className="border-t pt-1 text-center text-xs"
                k="Developed by"
                v="Laptop-POS.com"
                noColon
              />
            </Link>
          </footer>
        </section>
      </div>
    </div>
  );
}
