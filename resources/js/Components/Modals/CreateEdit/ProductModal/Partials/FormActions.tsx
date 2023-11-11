import DangerButton from "@/Components/Buttons/DangerButton";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import { ICreateProduct, IModalAction, IProduct } from "@/types";
import React, { useState } from "react";
import DeleteConfirmProductModal from "../DeleteConfirmProductModal";
import TertiaryButton from "@/Components/Buttons/TertiaryButton";
import { UseBetterForm } from "@/Utilities/useBetterForm";

export default function FormActions({
  modalAction,
  setModalAction,
  form,
}: {
  modalAction: IModalAction<IProduct>;
  setModalAction: React.Dispatch<React.SetStateAction<IModalAction<IProduct>>>;
  form: UseBetterForm<ICreateProduct |IProduct>;
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
          <EditButton setModalAction={setModalAction} form={form} />
          <DangerButton
            disabled={form.processing}
            onClick={() => setOpenConfirmDelete(true)}
          >
            Delete
          </DangerButton>
          <CancelButton setModalAction={setModalAction} form={form} />
        </>
      )}

      <DeleteConfirmProductModal
        isOpen={openConfirmDelete}
        requestClose={(clickedButton) => {
          setOpenConfirmDelete(false);
          if (clickedButton?.toLowerCase().trim() === "delete")
            setModalAction((p) => ({ ...p, open: false }));
        }}
        product={form.data as IProduct}
      />
    </div>
  );
}

type SetModalAction_Form = {
  setModalAction: React.Dispatch<React.SetStateAction<IModalAction<IProduct>>>;
  form: UseBetterForm<IProduct | ICreateProduct>;
};

function EditButton({ setModalAction, form }: SetModalAction_Form) {
  return (
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
