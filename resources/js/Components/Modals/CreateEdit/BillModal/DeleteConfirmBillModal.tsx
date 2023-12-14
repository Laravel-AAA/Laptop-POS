import { useState } from "react";
import AlertModal from "../../AlertModal";
import { IBill } from "@/types";
import { router } from "@inertiajs/react";
import ID from "@/Utilities/ID";

export default function DeleteConfirmBillModal({
  bill,
  isOpen,
  requestClose,
}: {
  bill: IBill;
  isOpen: boolean;
  requestClose: (clickedButtonText?: string) => any;
}) {
  // const taxPercent = usePage<AuthPageProps>().props.auth.business.taxPercent;

  const [deleteProgress, setDeleteProgress] = useState<boolean>(false);

  // const subTotalPrice = useMemo(
  //   () =>
  //     bill.bill_details.reduce(
  //       (v, t) => v + (t.product.price ?? 0) * t.quantity,
  //       0,
  //     ),
  //   [bill.bill_details],
  // );

  // const totalPrice = subTotalPrice * (1 + taxPercent);

  return (
    <AlertModal
      icon="danger"
      title="Are you sure?"
      paragraph={
        <span className="space-y-1">
          You are about to delete the bill <ID id={bill.id} />
        </span>
      }
      buttons={[
        {
          type: "danger",
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
        { type: "secondary", text: "Cancel" },
      ]}
      isOpen={isOpen}
      requestClose={(clickedButtonText) => requestClose(clickedButtonText)}
    />
  );
}
