import DangerButton from "@/Components/Buttons/DangerButton";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import { IModalAction, IProduct } from "@/types";
import React, { useState } from "react";
import DeleteConfirmProductModal from "../DeleteConfirmProductModal";
import TertiaryButton from "@/Components/Buttons/TertiaryButton";

export default function FormActions({
  modalAction,
  setModalAction,
  formProps: form,
}: {
  modalAction: IModalAction<IProduct>;
  setModalAction: React.Dispatch<React.SetStateAction<IModalAction<IProduct>>>;
  formProps;
}) {
  const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false);
  //change modalAction to edit
  const editButton = (
    <TertiaryButton
      type="button"
      onClick={() => {
        setModalAction((prev) => ({
          data: prev.data as IProduct,
          open: true,
          state: "edit",
        }));
      }}
      disabled={form.processing}
    >
      Edit
    </TertiaryButton>
  );

  const deleteButton = (
    <DangerButton
      disabled={form.processing}
      onClick={() => setOpenConfirmDelete(true)}
    >
      Delete
    </DangerButton>
  );

  const createButton = (
    <PrimaryButton type="submit" disabled={form.processing}>
      Create
    </PrimaryButton>
  );

  const cancelButton = (
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

  //submit edit
  const saveButton = (
    <PrimaryButton type="submit" disabled={form.processing}>
      Save
    </PrimaryButton>
  );

  function getButtons() {
    if (modalAction.state === "create")
      return (
        <>
          {createButton} {cancelButton}
        </>
      );
    if (modalAction.state === "edit")
      return (
        <>
          {saveButton} {cancelButton}
        </>
      );
    //if show
    return (
      <>
        {editButton} {deleteButton} {cancelButton}
      </>
    );
  }

  return (
    <div className="mt-4 flex flex-col gap-4 sm:flex-row-reverse">
      {getButtons()}
      <DeleteConfirmProductModal
        isOpen={openConfirmDelete}
        requestClose={(clickedButton) => {
          setOpenConfirmDelete(false);
          if (clickedButton?.toLowerCase().trim() === "delete")
            setModalAction((p) => ({ ...p, open: false }));
        }}
        product={form.data}
      />
    </div>
  );
}
