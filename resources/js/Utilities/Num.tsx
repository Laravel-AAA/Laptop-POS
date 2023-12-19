import { AuthPageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { HTMLAttributes } from "react";
export type NumProps = {
  className?: string;
  fixed?: number;
  showCurrency?: boolean;
  prefix?: string;
  suffix?: string;
  prefixProps?: HTMLAttributes<HTMLSpanElement>;
  suffixProps?: HTMLAttributes<HTMLSpanElement>;
  currency?: string;
  /**
   * compact will format large number such as 50000 to 50K
   */
  compact?: boolean;
} & ( //if amount is possibly null then you should declare either `defaultNoAmount` or specify custom `noAmount`. Typescript will help us force such specification.
  | { amount: number; noAmount?: string }
  | ({ amount: number | null } & (
      | { noAmount: string }
      | { noAmount?: undefined; defaultNoAmount: true }
    ))
);

export default function Num({
  className = "",
  amount,
  noAmount,
  showCurrency = false,
  currency: currencySymbol, //when user is not authorized then showCurrency will throw an exception in usePage hook. So, you should provide the currency symbol.
  //prefix will be shown even if amount is null
  prefix = "",
  suffix = "",
  prefixProps = {},
  suffixProps = {},
  fixed = 2,
  compact = false,
}: NumProps) {
  let number: string; //number is either number or noAmount. Ex: '1123' or 'N/A'
  const currency =
    showCurrency && amount !== null ? (
      <span>
        {currencySymbol
          ? currencySymbol
          : usePage<AuthPageProps>().props.auth.business.currency}
        &#8239;
      </span>
    ) : (
      ""
    );

  if (amount === null) number = noAmount ?? "N/A";
  else if (compact && amount !== 0) {
    let formatter = new Intl.NumberFormat("en", { notation: "compact" });
    number = formatter.format(amount);
  } else {
    amount = Number(Number(amount).toFixed(fixed));

    //Welcome to javascript where (0 * -1 = -0) 😑
    //also (-0 === 0 is true)
    if (Object.is(amount, -0)) number = "0";
    else number = amount.toLocaleString();
  }

  return (
    <span className={className}>
      {/* &#8239; is thin space */}
      {prefix && <span {...prefixProps}>{prefix}&#8239;</span>}
      {currency}
      {number}
      {suffix && <span {...suffixProps}>&#8239;{suffix}</span>}
    </span>
  );
}
