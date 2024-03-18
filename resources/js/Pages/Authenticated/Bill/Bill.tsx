import { IBill, IUser } from "@/types";
import BillInfo from "./Partials/BillInfo";
import { PageProps } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";
import BillHeader from "./Partials/BillHeader";
import GuestAuthLayout from "@/Layouts/GuestAuthLayout";
import { useEffect } from "react";

export default function Bill({
  auth: { user },
  bill,
}: PageProps & {
  bill: IBill;
  auth: { user: IUser | null };
}) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let printTimeout: NodeJS.Timeout;
    if (params.get("print") === "true") {
      printTimeout = setTimeout(() => {
        print();
      }, 1000);
    }
    return () => {
      if (printTimeout !== undefined) clearTimeout(printTimeout);
    };
  }, []);

  return (
    <>
      <Head title="Simplified Invoice" />
      <GuestAuthLayout user={user} header={<BillHeader bill={bill} />}>
        <BillInfo bill={bill} />
      </GuestAuthLayout>
    </>
  );
}
