import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/Inputs/InputError";
import InputHint from "@/Components/Inputs/InputHint";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import TotalInfo from "@/Pages/Authenticated/Checkout/Partials/RightSide/Partials/TotalInfo";
import Num from "@/Utilities/Num";
import { ICreateBill } from "@/types";
import { InertiaFormProps } from "@/types/global";
import { useEffect, useState } from "react";

export default function FormFields({
  form,
  taxPercent,
}: {
  form: InertiaFormProps<ICreateBill>;
  taxPercent: number;
}) {
  const [isDigitalPayment, setDigitalPayment] = useState<boolean>(false);
  const [remaining, setRemaining] = useState<number>(0);

  function subTotal() {
    return form.data.transactions.reduce(
      (sum, t) => (t.product.price ?? 0) * t.quantity + sum,
      0,
    );
  }

  function total() {
    return subTotal() * (1 + taxPercent);
  }

  useEffect(() => {
    form.setData("cashReceived", Number(total().toFixed(2)));
  }, []);

  return (
    <>
      <TotalInfo bill={form.data} taxPercent={taxPercent} />
      <div className="mt-3 w-full">
        <InputLabel htmlFor="cashReceived" value="Cash Received" />

        <TextInput
          id="cashReceived"
          name="cashReceived"
          type="number"
          value={form.data.cashReceived ?? 0}
          className="mt-1 block w-full"
          isFocused={true}
          inputMode="numeric"
          onFocus={(e) => e.target.select()}
          // onFocusCapture={(e) => e.target.select()}
          disabled={form.processing || isDigitalPayment}
          onChange={(e) => {
            const v = Number(e.target.value);
            form.setData("cashReceived", v);
            setRemaining(Number(Number(-total() + (v ?? 0)).toFixed(2)));
          }}
        />

        <InputError message={form.errors.cashReceived} className="mt-2" />
        <InputHint
          message={
            !isDigitalPayment && (
              <p className="ml-2 mt-1 text-gray-800">
                Remaining:&nbsp;
                <Num
                  currency="$"
                  className="text-primary-800"
                  amount={remaining}
                />
              </p>
            )
          }
        />

        <label className="ml-2 mt-1 flex items-center">
          <Checkbox
            name="isDigitalPayment"
            checked={isDigitalPayment}
            disabled={form.processing}
            onChange={(e) => {
              setDigitalPayment((v) => {
                if (!isDigitalPayment) {
                  form.setData("cashReceived", "");
                  setRemaining(
                    Number(
                      Number(-total() + (form.data.cashReceived ?? 0)).toFixed(
                        2,
                      ),
                    ),
                  );
                } else {
                  form.setData("cashReceived", total());
                  setRemaining(0);
                }
                return !v;
              });
            }}
          />
          <span className="ml-2 text-sm text-gray-600">Digital payment</span>
        </label>
      </div>
    </>
  );
}
