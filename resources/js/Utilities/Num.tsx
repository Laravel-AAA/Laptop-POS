import { AuthPageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { ReactNode } from "react";

export default function Num({
  amount,
  className = "",
  fixed = 2,
  showCurrency=false,
  noAmount,
}: {
  className?: string;
  fixed?: number;
  showCurrency?: boolean;
} & ( //if amount is possibly null then you should declare what shows when it is null.
  | { amount: number; noAmount?: string }
  | { amount: number | null; noAmount: string }
)) {
  let display: string | ReactNode;
  const currencySymbol = usePage<AuthPageProps>().props.auth.business.currency;
  if (amount === null) display = noAmount;
  else {
    amount = Number(amount.toFixed(fixed));
    //Welcome to javascript where (0 * -1 = -0) 😑
    //also (-0 === 0 is true)
    if (Object.is(amount, -0)) display = 0;
    else display = amount.toLocaleString();

    if (showCurrency)
      display = (
        <>
          <span>{currencySymbol}&#8239;</span>
          {display}
        </>
      );
  }

  return <span className={className}>{display}</span>;
}
