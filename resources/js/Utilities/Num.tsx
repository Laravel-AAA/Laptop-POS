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
} & (//if amount is possibly null then you should declare what shows when it is null.
  | { amount: number; noAmount?: string }
  | { amount: number | null; noAmount: string }
)) {
  return (
    <span className={className}>
      {amount == null ? (
        noAmount
      ) : (
        <>
          {currency && <span>{currency}&#8239;</span>}
          {Number(amount.toFixed(fixed)).toLocaleString()}
        </>
      )}
    </span>
  );
}
