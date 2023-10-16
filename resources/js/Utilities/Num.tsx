export default function Num({
  amount,
  className = "",
  fixed = 2,
  currency,
}: {
  amount: number;
  className?: string;
  fixed?: number;
  currency?: string;
}) {
  return (
    <span className={className}>
      {currency && <span>{currency}&#8239;</span>}
      {Number(amount.toFixed(fixed)).toLocaleString()}
    </span>
  );
}
