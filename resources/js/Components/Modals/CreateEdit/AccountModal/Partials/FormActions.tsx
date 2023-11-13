import DangerButton from "@/Components/Buttons/DangerButton";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import {
  ICreateUser,
  IModalAction,
  IUser,
} from "@/types";
import React, { useState } from "react";
import TertiaryButton from "@/Components/Buttons/TertiaryButton";
import { UseBetterForm } from "@/Utilities/useBetterForm";
import PermanentDeleteConfirmAccountModal from "../PermanentDeleteConfirmAccountModal";

export default function FormActions({
  modalAction,
  setModalAction,
  form,
}: {
  modalAction: IModalAction<IUser>;
  setModalAction: React.Dispatch<React.SetStateAction<IModalAction<IUser>>>;
  form: UseBetterForm<ICreateUser | IUser>;
}) {
  const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false);

  return (
    <div className="mt-4 flex flex-col gap-4 sm:flex-row-reverse">
      {modalAction.state === "create" ? (
        <>
          <PrimaryButton type="submit" disabled={form.processing}>
            Create
          </PrimaryButton>
          <CancelButton setModalAction={setModalAction} form={form} />
        </>
      ) : modalAction.state === "edit" ? (
        <>
          <PrimaryButton type="submit" disabled={form.processing}>
            Save
          </PrimaryButton>
          <CancelButton setModalAction={setModalAction} form={form} />
        </>
      ) : (
        <>
          {/* <EditButton setModalAction={setModalAction} form={form} />
          <DangerButton
            disabled={form.processing}
            onClick={() => setOpenConfirmDelete(true)}
          >
            Delete
          </DangerButton>
          <CancelButton setModalAction={setModalAction} form={form} /> */}
        </>
      )}

      {/* <PermanentDeleteConfirmAccountModal
        isOpen={openConfirmDelete}
        requestClose={(clickedButton) => {
          setOpenConfirmDelete(false);
          if (clickedButton?.toLowerCase().trim() === "delete")
            setModalAction((p) => ({ ...p, open: false }));
        }}
        account={form.data as IUser}
      /> */}
    </div>
  );
}

type SetModalAction_Form = {
  setModalAction: React.Dispatch<React.SetStateAction<IModalAction<IUser>>>;
  form: UseBetterForm<IUser | ICreateUser>;
};

function EditButton({ setModalAction, form }: SetModalAction_Form) {
  return (
    <TertiaryButton
      type="button"
      onClick={() => {
        setModalAction((prev) => ({
          data: prev.data as IUser,
          open: true,
          state: "edit",
        }));
      }}
      disabled={form.processing}
    >
      Edit
    </TertiaryButton>
  );
}

function CancelButton({ setModalAction, form }: SetModalAction_Form) {
  return (
    <SecondaryButton
      type="button"
      onClick={() => {
        form.cancel();
        setModalAction((prev) => ({ ...prev, open: false }));
        form.reset();
        form.clearErrors();
      }}
    >
      Cancel
    </SecondaryButton>
  );
}
