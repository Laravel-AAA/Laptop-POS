import { IBill, IUser } from "@/types";
import BillInfo from "./Partials/BillInfo";
import { PageProps } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";
import BillHeader from "./Partials/BillHeader";
import GuestAuthLayout from "@/Layouts/GuestAuthLayout";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

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
      }, 800);
    }
    return () => {
      if (printTimeout !== undefined) clearTimeout(printTimeout);
    };
  }, []);

  const { t } = useTranslation();
  return (
    <>
      <Head title={t("Simplified Invoice")} />
      <GuestAuthLayout user={user} header={<BillHeader bill={bill} />}>
        <BillInfo bill={bill} />
      </GuestAuthLayout>
    </>
  );
}
