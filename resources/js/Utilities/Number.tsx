
export default function Number({ amount }: { amount: number }) {
  return <span>{amount.toLocaleString()}</span>;
}
