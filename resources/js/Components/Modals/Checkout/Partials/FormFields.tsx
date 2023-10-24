import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/Inputs/InputError";
import InputHint from "@/Components/Inputs/InputHint";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import TotalInfo from "@/Pages/Authenticated/Checkout/Partials/RightSide/Partials/TotalInfo";
import Num from "@/Utilities/Num";
import { ICreateBill, PageProps } from "@/types";
import { InertiaFormProps } from "@/types/global";
import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function FormFields({
  form,
}: {
  form: InertiaFormProps<ICreateBill>;
}) {
  const [isDigitalPayment, setDigitalPayment] = useState<boolean>(false);
  const [remaining, setRemaining] = useState<number>(0);
  const taxPercent = usePage<PageProps>().props.business.taxPercent;

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
      <TotalInfo bill={form.data} />
      <div className="mt-3 w-full">
        <InputLabel htmlFor="cashReceived" value="Cash Received" />

        <TextInput
          id="cashReceived"
          name="cashReceived"
          type="number"
          value={form.data.cashReceived ?? 0}
          className="mt-1 block w-full text-xl"
          inputMode="numeric"
          isFocused={true}
          isSelect={true}
          onClick={(e) => e.currentTarget.select()}
          disabled={form.processing || isDigitalPayment}
          onChange={(e) => {
            const v = Number(e.target.value);
            form.setData("cashReceived", v);
            setRemaining(Number(Number((v ?? 0) - total()).toFixed(2)));
          }}
        />

        <InputError message={form.errors.cashReceived} className="mt-2" />
        <InputHint
          message={
            <p
              style={{ visibility: !isDigitalPayment ? "visible" : "hidden" }}
              className="ml-2 mt-1 text-lg text-gray-800"
            >
              Remaining:&nbsp;
              <Num
                currency="$"
                className="text-indigo-700"
                amount={remaining}
              />
            </p>
          }
        />

        <label className="ml-2 mt-2 flex items-center">
          <Checkbox
            name="isDigitalPayment"
            className="h-5 w-5"
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
                  form.setData("cashReceived", Number(total().toFixed(2)));
                  setRemaining(0);
                }
                return !v;
              });
            }}
          />
          <span className="ml-2 text-lg text-gray-600">Digital payment</span>
        </label>
      </div>
    </>
  );
}
