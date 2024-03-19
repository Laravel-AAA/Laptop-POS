import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/Inputs/Input";
import TotalInfo from "@/Pages/Authenticated/Checkout/Partials/RightSide/Partials/TotalInfo";
import Num from "@/Utilities/Num";
import { UseBetterForm } from "@/Utilities/useBetterForm";
import { AuthPageProps, IBill, ICreateBill } from "@/types";
import { usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function FormFields({
  form,
}: {
  form: UseBetterForm<ICreateBill | IBill>;
}) {
  const [isDigitalPayment, setDigitalPayment] = useState<boolean>(false);
  const [remaining, setRemaining] = useState<number>(0);
  const taxPercent = usePage<AuthPageProps>().props.auth.business.taxPercent;

  function subTotal(): number {
    return form.data.bill_details.reduce(
      (sum, t) => (t.product.price ?? 0) * t.quantity + sum,
      0,
    );
  }

  function total(): number {
    return subTotal() * (1 + taxPercent);
  }

  const cashReceivedRef = useAutoSelectRef();

  useEffect(() => {
    if (
      //do not auto update remaining when bill is updating and has cashReceived
      form.data.cashReceived !== null &&
      typeof (form.data as IBill).id === "string"
    )
      setRemaining((form.data.cashReceived ?? 0) - total());
    else form.setData("cashReceived", Number(total().toFixed(2)));
  }, []);

  const { t } = useTranslation();
  return (
    <>
      <TotalInfo bill={form.data} />
      <div className="mt-3 w-full">
        <Input
          ref={cashReceivedRef}
          label={t("Cash Received")}
          name="cashReceived"
          type="number"
          value={
            form.data.cashReceived === null
              ? ""
              : Number(form.data.cashReceived.toFixed(2))
          }
          className="mt-1 block w-full text-xl"
          inputMode="numeric"
          autoFocus
          onClick={(e) => e.currentTarget.select()}
          disabled={form.processing || isDigitalPayment}
          onChange={(e) => {
            const v = Number(e.target.value);
            form.setData("cashReceived", v);
            setRemaining(Number(Number((v ?? 0) - total()).toFixed(2)));
          }}
          required={false}
          errorMsg={form.errors.cashReceived}
          hideError={form.isDirty("cashReceived")}
          hint={
            <span
              style={{ visibility: !isDigitalPayment ? "visible" : "hidden" }}
              className="ml-1 text-lg text-gray-700"
            >
              {t("Remaining")}:&nbsp;
              <Num className="font-semibold text-gray-900" amount={remaining} />
            </span>
          }
        />

        <div className="mt-1 flex items-center">
          <Checkbox
            label={
              <span className="text-lg text-gray-600">
                {t("Digital payment")}
              </span>
            }
            name="isDigitalPayment"
            className="h-5 w-5"
            checked={isDigitalPayment}
            disabled={form.processing}
            onChange={(e) => {
              if (isDigitalPayment) {
                setTimeout(() => {
                  cashReceivedRef.current?.focus();
                  cashReceivedRef.current?.select();
                }, 100);
              }
              setDigitalPayment((v) => {
                if (!isDigitalPayment) {
                  if ((form.data as IBill).id === undefined)
                    form.setData("cashReceived", null);

                  setRemaining((form.data.cashReceived ?? 0) - total());
                } else {
                  if ((form.data as IBill).id === undefined)
                    form.setData("cashReceived", total());
                  setRemaining(0);
                }
                return !v;
              });
            }}
            errorMsg=""
          />
        </div>
      </div>
    </>
  );
}

function useAutoSelectRef() {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.select();
  }, [ref.current]);
  return ref;
}
