import RowItem from "./Partials/RowItem";
import { BillOperations } from "@/Pages/Authenticated/Checkout";
import EmptyCart from "./Partials/EmptyCart";
import { useTranslation } from "react-i18next";

export default function CartInfo({
  billOperations,
}: {
  billOperations: BillOperations;
}) {

  const { t } = useTranslation();
  return (
    // margin bottom is the checkout button height
    <section className="relative mb-[50px] mt-1 h-full overflow-y-auto rounded-t-lg bg-white shadow-sm">
      <table className="mb-3 w-full table-auto text-left">
        <thead className="sticky">
          <tr className="bg-blue-gray-50 text-gray-800">
            <th className="w-14"></th>
            <th>
              <span className="sticky top-0 mx-1">{ t( "Items" ) }</span>
            </th>
            <th className="w-24 text-center" title="Quantity">
              <span className="mx-1">{ t( "Qty" ) }</span>
            </th>
            <th title="Tax included" className="w-[6ch]">
              <span className="mx-1">{ t( "Price" ) }</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {billOperations.form.data.bill_details.map((t, i) => (
            <RowItem
              key={i}
              billOperations={billOperations}
              bill_detail={t}
            />
          ))}
        </tbody>
      </table>
      <EmptyCart length={billOperations.form.data.bill_details.length} />
    </section>
  );
}
