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
}: PageProps<{
  bills: ILaravelPaginate<IBill>;
  filter: IFilterBill;
}>) {
  const bills: IBill[] = paginateBills.data;

  console.log({ bills });
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Bills" />
      {/* Overflow classes will set the position to relative, and this cause a problem
      when rendering the dropdown content, it will render inside the table so
      last item will not be shown because dropdown content is display below the
      item and that is outside the table */}
      <div className="mx-auto my-6 w-full overflow-x-auto overflow-y-hidden pb-28 md:w-11/12 ">
        <Card className="w-full min-w-fit rounded-md">
          <table className="table-auto text-left">
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
                  bill={bill}
                />
              ))}
            </tbody>
          </table>
          {bills.length === 0 && (
            <div className="my-12 flex justify-center gap-4 opacity-50">
              <BsSearch className="mt-1" />
              <p>No bills found!</p>
            </div>
          )}
        </Card>
      </div>
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
      <p className="text-sm font-semibold leading-none tracking-wide text-black opacity-90">
        {children}
      </p>
    </th>
  );
}
