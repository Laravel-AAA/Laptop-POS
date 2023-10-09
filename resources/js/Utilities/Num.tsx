
export default function Num({ amount }: { amount: number }) {
  return <span>{amount.toLocaleString()}</span>;
}
