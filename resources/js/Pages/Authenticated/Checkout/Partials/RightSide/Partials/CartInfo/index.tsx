import RowItem from "./Partials/RowItem";
import { BillOperations } from "@/Pages/Authenticated/Checkout";
import EmptyCart from "./Partials/EmptyCart";

export default function CartInfo({
  billOperations,
  taxPercent,
}: {
  billOperations: BillOperations;
  taxPercent: number;
}) {
  return (
    // margin bottom is the checkout button height
    <section className="relative mb-[50px] mt-1 h-full overflow-y-auto rounded-t-lg bg-white shadow-sm">
      <table className="mb-3 w-full table-auto text-left">
        <thead className="sticky">
          <tr className="bg-blue-gray-50 text-gray-800">
            <th className="w-14"></th>
            <th>
              <span className="sticky top-0 mx-1">Items</span>
            </th>
            <th className="w-24 text-center" title="Quantity">
              <span className="mx-1">Qty</span>
            </th>
            <th title="Tax included" className="w-[6ch]">
              <span className="mx-1">Price</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {billOperations.bill.transactions.map((t, i) => (
            <RowItem
              key={i}
              billOperations={billOperations}
              transaction={t}
              taxPercent={taxPercent}
            />
          ))}
        </tbody>
      </table>
      <EmptyCart length={billOperations.bill.transactions.length} />
    </section>
  );
}
