import {
  AuthPageProps,
  IBill,
  IFilterBill,
  ILaravelPaginate,
  IUser,
} from "@/types";
import React from "react";
import BillInfo from "./Partials/BillInfo";
import { PageProps } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import AppLayout from "@/Layouts/AppLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import GuestFormLayout from "@/Layouts/GuestLayout/GuestFormLayout";
import FormLayout from "@/Layouts/GuestLayout/FormLayout";
import Footer from "@/Layouts/GuestLayout/Partials/Footer";
import { Link } from "@inertiajs/react";
import ID from "@/Utilities/ID";
import BillHeader from "./Partials/BillHeader";

export default function Bill({
  auth: { user },
  bill,
}: PageProps & {
  bill: IBill;
  auth: { user: IUser | null };
}) {
  console.log("bill", bill);
  console.log("user", user);
  return (
    <>
      {user !== null ? (
        <Authenticated
          user={user}
          header={
            <BillHeader bill={bill}/>
          }
        >
          <div className="mt-6">
            <FormLayout businessLogo={bill.business?.logo}>
              <BillInfo bill={bill} />
            </FormLayout>
            <Footer />
          </div>
        </Authenticated>
      ) : (
        <GuestLayout>
          <FormLayout businessLogo={bill.business?.logo}>
            <BillInfo bill={bill} />
          </FormLayout>
        </GuestLayout>
      )}
    </>
  );
}
