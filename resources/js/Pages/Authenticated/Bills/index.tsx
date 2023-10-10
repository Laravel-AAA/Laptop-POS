import { Card } from "@material-tailwind/react";

const TABLE_HEAD = [
  "#",
  "Date",
  "Total price",
  "Received",
  "Total Quantity",
  "",
];

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
  IBill,
  IFilterBill,
  ILaravelPaginate,
  IModalAction,
  PageProps,
} from "@/types";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
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
  const [modalAction, setModalAction] = useState<IModalAction<IBill>>({
    state: "create",
    open: false,
  });
  console.log({ bills });

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Bills" />
      <Card className="mx-auto my-6 h-full w-11/12 rounded-md">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className={
                    "border-b border-blue-gray-100 bg-blue-gray-50 p-4 " +
                    (index == 0
                      ? "rounded-tl-md"
                      : index + 1 == TABLE_HEAD.length
                      ? "rounded-tr-md"
                      : "")
                  }
                >
                  <p className="text-sm font-normal leading-none tracking-wide text-primary-700 opacity-70">
                    {head}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <Bill key={bill.id} bill={bill} requestEdit={() => {}} />
            ))}
          </tbody>
        </table>
        {bills.length == 0 && (
          <div className="my-24 flex justify-center gap-4 opacity-50">
            <BsSearch className="mt-1" />
            <p>No bills found!</p>
          </div>
        )}
      </Card>
      <Pagination paginateItems={paginateBills} />
    </AuthenticatedLayout>
  );
}
