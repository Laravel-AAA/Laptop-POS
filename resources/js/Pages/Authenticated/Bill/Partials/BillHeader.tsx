import ID from "@/Utilities/ID";
import { IBill } from "@/types";
import { Link } from "@inertiajs/react";

export default function BillHeader({ bill }: { bill: IBill }) {
  return (
    <h2 className="py-5 text-xl font-semibold leading-tight text-gray-500">
      <Link
        className="text-blue-600 hover:text-blue-400 hover:underline"
        href={route("bill.index")}
      >
        Bills
      </Link>
      <span>
        &nbsp;&nbsp;/&nbsp;&nbsp;<ID id={bill.id} />
      </span>
    </h2>
  );
}
