import { IBill } from "@/types";
import BillOptions from "./BillOptions";
import FromDate from "@/Utilities/FromDate";
type PropsProduct = {
  bill: IBill;
  requestEdit: () => void;
  requestShow: () => void;
};
export default function Product({
  bill,
  requestEdit,
  requestShow,
}: PropsProduct) {
  return (
    <div
      onClick={() => requestShow()}
      className="group relative m-4 flex cursor-pointer flex-col overflow-hidden rounded-md bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-52"
    >
      <BillOptions
        bill={bill}
        requestEdit={requestEdit}
        requestShow={requestShow}
      />
      <p>
        hi <FromDate date={bill.created_at} />
      </p>
    </div>
  );
}
