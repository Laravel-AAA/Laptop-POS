import { useState } from "react";
import AlertModal from "../../AlertModal";
import { IBill } from "@/types";
import { Inertia } from "@inertiajs/inertia";
import ID from "@/Utilities/ID";
import { router } from "@inertiajs/react";

export default function DeleteConfirmBillModal({
  bill,
  isOpen,
  requestClose,
}: {
  bill: IBill;
  isOpen: boolean;
  requestClose: (clickedButtonText?: string) => any;
}) {
  const [deleteProgress, setDeleteProgress] = useState<boolean>(false);
  return (
    <AlertModal
      icon="danger"
      title="Are you sure?"
      paragraph={
        <span>
          You are about to delete the bill <ID id={bill.id} />
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
