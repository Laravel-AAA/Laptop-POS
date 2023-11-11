import { useState } from "react";
import AlertModal from "../../AlertModal";
import { IUser } from "@/types";
import ID from "@/Utilities/ID";
import { router } from "@inertiajs/react";

export default function DeleteConfirmBillModal({
  account,
  isOpen,
  requestClose,
}: {
  account: IUser;
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
          You are about to delete the following account:
          <br />
          Name:{" "}
          <span className="font-semibold text-gray-600">{account.name}</span><br/>
          Email:{" "}
          <span className="font-semibold text-gray-600">{account.email}</span>
        </span>
      }
      buttons={{
        danger: {
          text: "Delete",
          props: {
            onClick: () => {
              setDeleteProgress(true);
              router.delete(route("account.destroy", account.id), {
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
