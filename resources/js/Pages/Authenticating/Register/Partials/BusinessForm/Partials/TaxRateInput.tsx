import Input, { InputProps } from "@/Components/Inputs/Input";
import Num from "@/Utilities/Num";
import React from "react";

export default function TaxRateInput({
  value,
  onChange,
  disabled,
  errorMsg,
  hideError,
  currency,
}: {
  value: number;
  onChange: InputProps["onChange"];
  disabled: boolean;
  errorMsg: InputProps["errorMsg"];
  hideError: InputProps["hideError"];
  currency?: string; //when registering the <Num showCurrency /> component can't figure out the currency
}) {
  return (
    <Input
      id="taxPercent"
      label="Tax Rate"
      className="mt-1 block w-full"
      max={100}
      min={0}
      type="number"
      icon={<span>%</span>}
      value={Number(value.toFixed(2))}
      onChange={(e) => onChange?.(e)}
      disabled={disabled}
      required
      errorMsg={errorMsg}
      hideError={hideError}
      hint={
        <span>
          <span className="font-semibold text-blue-gray-600">
            <Num amount={value} />%
          </span>{" "}
          tax on{" "}
          <span className="font-semibold text-blue-gray-600">
            {currency && <span>{currency}&thinsp;</span>}
            <Num amount={50} showCurrency={!currency} />
          </span>{" "}
          is{" "}
          <span className="font-semibold text-blue-gray-600">
            {currency && <span>{currency}&thinsp;</span>}
            <Num amount={(value / 100) * 50} showCurrency={!currency} />
          </span>
        </span>
      }
    />
  );
}
