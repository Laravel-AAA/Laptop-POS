import { useMemo, useState } from "react";
import AlertModal from "../../AlertModal";
import { AuthPageProps, IBill } from "@/types";
import { router, usePage } from "@inertiajs/react";
import KeyValue from "@/Utilities/KeyValue";
import FromDate from "@/Utilities/FromDate";
import Num from "@/Utilities/Num";

export default function DeleteConfirmBillModal({
  bill,
  isOpen,
  requestClose,
}: {
  bill: IBill;
  isOpen: boolean;
  requestClose: (clickedButtonText?: string) => any;
}) {
  const taxPercent = usePage<AuthPageProps>().props.auth.business.taxPercent;

  const [deleteProgress, setDeleteProgress] = useState<boolean>(false);

  const subTotalPrice = useMemo(
    () =>
      bill.transactions.reduce(
        (v, t) => v + (t.product.price ?? 0) * t.quantity,
        0,
      ),
    [bill.transactions],
  );

  const totalPrice = subTotalPrice * (1 + taxPercent);

  return (
    <AlertModal
      icon="danger"
      title="Are you sure?"
      paragraph={
        <span className="space-y-1">
          You are about to delete the bill with this information:
          <br />
          <KeyValue k="Date" v={<FromDate date={bill.created_at} />} />
          <KeyValue
            k="Sub Total Price"
            v={<Num amount={subTotalPrice} defaultNoAmount showCurrency />}
          />
          <KeyValue
            k="Total Price"
            v={<Num amount={totalPrice} defaultNoAmount showCurrency />}
          />
          <KeyValue
            k="Received"
            v={
              <Num
                amount={bill.cashReceived}
                showCurrency
                noAmount="Digital Payment"
              />
            }
          />
        </span>
      }
      buttons={{
        danger: {
          text: "Delete",
          props: {
            onClick: () => {
              setDeleteProgress(true);
              router.delete(route("bill.destroy", bill.id), {
                preserveScroll: true,
                preserveState: true,
              });
            },
            disabled: deleteProgress,
          },
        },
        secondary: { text: "Cancel" },
      }}
      isOpen={isOpen}
      requestClose={(clickedButtonText) => requestClose(clickedButtonText)}
    />
  );
}
