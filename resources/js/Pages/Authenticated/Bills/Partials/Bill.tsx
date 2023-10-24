import { IBill, PageProps } from "@/types";
import BillOptions from "./BillOptions";
import FromDate from "@/Utilities/FromDate";
import Num from "@/Utilities/Num";
import ID from "@/Utilities/ID";
import { PropsWithChildren } from "react";
import { usePage } from "@inertiajs/react";
type PropsProduct = {
  bill: IBill;
  requestEdit: () => void;
  // requestShow: () => void;
};
export default function Product({
  bill,
  requestEdit, // requestShow,
}: PropsProduct) {
  const taxPercent = usePage<PageProps>().props.business.taxPercent;

  const subTotalPrice = bill.transactions.reduce(
    (v, t) => v + (t.product.price ?? 0) * t.quantity,
    0,
  );
  const totalPrice = subTotalPrice * (1 + taxPercent);

  return (
    <tr className="even:bg-blue-gray-50/50">
      <TD>
        <ID id={bill.id} />
      </TD>
      <TD>
        <FromDate date={bill.created_at} />
      </TD>
      <TD>
        <Num
          className="text-secondary-700"
          currency="$"
          amount={subTotalPrice}
        />
      </TD>
      <TD>
        <Num className="text-primary-700" currency="$" amount={totalPrice} />
      </TD>
      <TD>
        <Num
          className={bill.cashReceived === null ? "text-primary-700" : ""}
          currency="$"
          amount={bill.cashReceived}
          noAmount="Digital Payment"
        />
      </TD>
      <TD>
        <Num
          currency="$"
          amount={bill.cashReceived ? bill.cashReceived - subTotalPrice : null}
          noAmount=""
        />
      </TD>
      <TD>
        <Num amount={bill.transactions.reduce((v, t) => v + t.quantity, 0)} />
      </TD>
      <td>
        <BillOptions
          bill={bill}
          requestEdit={requestEdit}
          requestShow={() => {}}
        />
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
