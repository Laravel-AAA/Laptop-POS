import { ReactNode } from "react";

export default function Num({
  amount,
  className = "",
  fixed = 2,
  currency,
  noAmount,
}: {
  className?: string;
  fixed?: number;
  currency?: string;
} & ( //if amount is possibly null then you should declare what shows when it is null.
  | { amount: number; noAmount?: string }
  | { amount: number | null; noAmount: string }
)) {
  let display: string | ReactNode;
  if (amount === null) display = noAmount;
  else {
    amount = Number(amount.toFixed(fixed));
    //Welcome to javascript where (0 * -1 = -0) 😑
    //also (-0 === 0 is true)
    if (Object.is(amount, -0)) display = 0;
    else display = amount.toLocaleString();

    if (currency)
      display = (
        <>
          <span>{currency}&#8239;</span>
          {display}
        </>
      );
  }

  return <span className={className}>{display}</span>;
}
