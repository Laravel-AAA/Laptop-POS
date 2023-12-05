import Num from "@/Utilities/Num";
import { AuthPageProps, ICreateBill,  } from "@/types";
import { usePage } from "@inertiajs/react";

export default function TotalInfo({ bill }: { bill: ICreateBill }) {
  const taxPercent = usePage<AuthPageProps>().props.auth.business.taxPercent;

  /**Total without Taxes */
  function subTotal() {
    return bill.bill_details.reduce(
      (sum, t) => (t.product.price ?? 0) * t.quantity + sum,
      0,
    );
  }

  return (
    <section className="rounded-lg border-y-2 border-gray-200 bg-gray-50 px-2 py-3 font-body text-gray-700 shadow-sm">
      <div className="flex justify-between">
        <div>
          Sub total:{" "}
          <Num
            className="text-xl font-semibold text-secondary-700"
            amount={subTotal()}
          />
        </div>
        <div>
          Taxes:{" "}
          <Num
            className="text-base font-semibold text-danger-700"
            amount={subTotal() * taxPercent}
          />
        </div>
      </div>
      <div className="mt-3 flex items-center">
        <span>Total:&nbsp;</span>
        <Num
          className="mx-auto text-4xl font-bold text-primary-700"
          amount={subTotal() * (1 + taxPercent)}
        />
      </div>
    </section>
  );
}
