import {
  IBill,
  IUser,
} from "@/types";
import BillInfo from "./Partials/BillInfo";
import { PageProps } from "@inertiajs/inertia";
import { Head} from "@inertiajs/react";
import BillHeader from "./Partials/BillHeader";
import GuestAuthLayout from "@/Layouts/GuestAuthLayout";

export default function Bill({
  auth: { user },
  bill,
}: PageProps & {
  bill: IBill;
  auth: { user: IUser | null };
}) {
  return (
    <>
      <Head title="Simplified Invoice" />
      <GuestAuthLayout user={user} header={<BillHeader bill={bill} />}>
        <BillInfo bill={bill} />
      </GuestAuthLayout>
    </>
  );
}
