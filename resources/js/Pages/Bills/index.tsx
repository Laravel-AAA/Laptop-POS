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

  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Head title="Bills" />
      <div className="flex flex-wrap  justify-center py-6">
        {bills.length == 0 && (
          <div className="my-20 flex gap-4 opacity-50">
            <BsSearch className="mt-1" />
            <p>No bills found!</p>
          </div>
        )}
        {bills.map((b) => (
          <Bill
            key={b.id}
            bill={b}
            requestShow={() =>
              setModalAction({ state: "show", open: true, data: b })
            }
            requestEdit={() =>
              setModalAction({
                state: "edit",
                data: b,
                open: true,
              })
            }
          />
        ))}
      </div>
      <Pagination paginateItems={paginateBills} />
    </AuthenticatedLayout>
  );
}
