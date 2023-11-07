import { AuthPageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { InputProps } from "@material-tailwind/react";
import { HTMLAttributes, ReactNode } from "react";

export default function Num({
  className = "",
  amount,
  noAmount,
  showCurrency = false,
  //prefix will be shown even if amount is null
  prefix = "",
  prefixProps = {},
  fixed = 2,
}: {
  className?: string;
  fixed?: number;
  showCurrency?: boolean;
  prefix?: string;
  prefixProps?: HTMLAttributes<HTMLSpanElement>;
} & ( //if amount is possibly null then you should declare either `defaultNoAmount` or specify custom `noAmount`. Typescript will help us force such specification.
  | { amount: number; noAmount?: string }
  | ({ amount: number | null } & (
      | { noAmount: string }
      | { noAmount?: undefined; defaultNoAmount: true }
    ))
)) {
  let number: string; //number is either number or noAmount. Ex: '1123' or 'N/A'
  const currency =
    showCurrency && amount !== null ? (
      <span>
        {usePage<AuthPageProps>().props.auth.business.currency}&#8239;
      </span>
    ) : (
      ""
    );

  if (amount === null) number = noAmount ?? "N/A";
  else {
    amount = Number(amount.toFixed(fixed));

    //Welcome to javascript where (0 * -1 = -0) 😑
    //also (-0 === 0 is true)
    if (Object.is(amount, -0)) number = "0";
    else number = amount.toLocaleString();
  }

  return (
    <span className={className}>
      {prefix && <span {...prefixProps}>{prefix}&nbsp;</span>}
      {/* &#8239; is thin space */}
      {currency}
      {number}
    </span>
  );
}
