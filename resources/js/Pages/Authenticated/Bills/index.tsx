import { Card } from "@material-tailwind/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
  IBill,
  IFilterBill,
  ILaravelPaginate,
  IModalAction,
  PageProps,
} from "@/types";
import { Head } from "@inertiajs/react";
import { HTMLAttributes, PropsWithChildren, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Bill from "./Partials/Bill";
import Pagination from "@/Components/Pagination";

export default function Bills({
  auth,
  bills: paginateBills,
  business: { taxPercent },
}: PageProps<{
  bills: ILaravelPaginate<IBill>;
  filter: IFilterBill;
  business: { taxPercent: number }; //todo business model with taxPercent field
}>) {
  const bills: IBill[] = paginateBills.data;
  const [modalAction, setModalAction] = useState<IModalAction<IBill>>({
    state: "create",
    open: false,
    data: null,
  });
  console.log({ bills });
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Bills" />
        <Card className="mx-auto pb-12 overflow-x-auto overflow-y-hidden block my-6 h-full w-11/12 rounded-md">

          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                <TH className="w-[11ch] rounded-tl-md">#</TH>
                <TH>Date</TH>
                <TH title="Sub total price (tax is NOT included)">Sub total</TH>
                <TH title="Total price (tax is included)">Total price</TH>
                <TH>Received</TH>
                <TH>Remaining</TH>
                <TH>Total Quantity</TH>
                <TH title="Bill options" className="max-w-fit rounded-tr-md">
                  {/* Options button */}
                </TH>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill) => (
                <Bill
                  key={bill.id}
                  taxPercent={taxPercent}
                  bill={bill}
                  requestEdit={() => {}}
                />
              ))}
            </tbody>
          </table>
          {bills.length === 0 && (
            <div className="mt-10 flex justify-center gap-4 opacity-50">
              <BsSearch className="mt-1" />
              <p>No bills found!</p>
            </div>
          )}

        </Card>
      <Pagination paginateItems={paginateBills} />
    </AuthenticatedLayout>
  );
}

function TH({
  className = "",
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<{ className?: string }>>) {
  return (
    <th
      {...props}
      className={
        "border-b border-blue-gray-100 bg-blue-gray-50 p-4 " + className
      }
    >
      <p className="text-sm font-semibold leading-none tracking-wide text-primary-900 opacity-80">
        {children}
      </p>
    </th>
  );
}
