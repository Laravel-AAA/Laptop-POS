import { IBill } from "@/types";
import BillOptions from "./BillOptions";
import FromDate from "@/Utilities/FromDate";
import Number from "@/Utilities/Number";
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
          <Number
            amount={bill.transactions.reduce(
              (v, t) => v + (t.product.price ?? 0),
              0,
            )}
          />
        </p>
      </td>
      <td className="p-3">
        <p className="text-sm font-normal text-blue-gray-800">
          <Number amount={bill.cashReceived}/>
        </p>
      </td>
      <td className="p-3">
        <p className="text-sm font-normal text-blue-gray-800">
          <Number
            amount={bill.transactions.reduce((v, t) => v + t.quantity, 0)}
          />
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
