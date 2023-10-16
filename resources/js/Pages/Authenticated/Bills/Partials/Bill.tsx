import { IBill } from "@/types";
import BillOptions from "./BillOptions";
import FromDate from "@/Utilities/FromDate";
import Num from "@/Utilities/Num";
import ID from "@/Utilities/ID";
type PropsProduct = {
  bill: IBill;
  requestEdit: () => void;
  // requestShow: () => void;
};
export default function Product({
  bill,
  requestEdit, // requestShow,
}: PropsProduct) {
  return (
    <tr className="even:bg-blue-gray-50/50">
      <td className="p-3">
        <p className="text-sm font-normal text-blue-gray-800">
          <ID id={bill.id} />
        </p>
      </td>
      <td className="p-3">
        <p className="text-sm font-normal text-blue-gray-800">
          <FromDate date={bill.created_at} />
        </p>
      </td>
      <td className="p-3">
        <p className="text-sm font-normal text-blue-gray-800">
          <Num
            amount={bill.transactions.reduce(
              (v, t) => v + (t.product.price ?? 0),
              0,
            )}
          />
        </p>
      </td>
      <td className="p-3">
        <p className="text-sm font-normal text-blue-gray-800">
          {bill.cashReceived ? <Num amount={bill.cashReceived} />:<span>N/A</span>}
        </p>
      </td>
      <td className="p-3">
        <p className="text-sm font-normal text-blue-gray-800">
          <Num amount={bill.transactions.reduce((v, t) => v + t.quantity, 0)} />
        </p>
      </td>
      <td className="p-3">
        <BillOptions
          bill={bill}
          requestEdit={requestEdit}
          requestShow={() => {}}
        />
      </td>
    </tr>
  );
}
