import { AuthPageProps, IBill } from "@/types";
import BillOptions from "./BillOptions";
import FromDate from "@/Utilities/FromDate";
import Num from "@/Utilities/Num";
import ID from "@/Utilities/ID";
import { PropsWithChildren } from "react";
import { usePage } from "@inertiajs/react";
type PropsProduct = {
  bill: IBill;
};
export default function Product({ bill }: PropsProduct) {
  const auth = usePage<AuthPageProps>().props.auth;
  const taxPercent = auth.business.taxPercent;
  const loggedInId = auth.user.id;

  const subTotalPrice = bill.transactions.reduce(
    (v, t) => v + (t.product.price ?? 0) * t.quantity,
    0,
  );
  const totalPrice = subTotalPrice * (1 + taxPercent);

  return (
    <tr className="even:bg-blue-gray-50/50">
      <TD>
        {/* <ID id={bill.id} /> */}

        {bill.createdBy_id === loggedInId ? (
          <span className="select-none text-gray-600">You</span>
        ) : (
          bill.created_by?.name ?? "N/A"
        )}
      </TD>
      <TD>
        <FromDate date={bill.created_at} />
      </TD>
      <TD>
        <Num
          className="text-secondary-700"
          showCurrency
          amount={subTotalPrice}
        />
      </TD>
      <TD>
        <Num className="text-primary-700" showCurrency amount={totalPrice} />
      </TD>
      <TD>
        <Num
          className={bill.cashReceived === null ? "text-primary-700" : ""}
          showCurrency
          amount={bill.cashReceived}
          noAmount="Digital Payment"
        />
      </TD>
      <TD>
        <Num
          className="text-indigo-700"
          showCurrency
          amount={bill.cashReceived ? bill.cashReceived - totalPrice : null}
          noAmount=""
        />
      </TD>
      <TD>
        <Num amount={bill.transactions.reduce((v, t) => v + t.quantity, 0)} />
      </TD>
      <td>
        <BillOptions bill={bill} />
      </td>
    </tr>
  );
}

function TD({
  children,
  className = "", //You ain't gonna need it
}: PropsWithChildren<{ className?: string }>) {
  return (
    <td className="p-3">
      <p className="text-sm font-normal text-blue-gray-800">{children}</p>
    </td>
  );
}
