import { ICreateProduct, IModalAction, IProduct } from "@/types";
import React, { useState } from "react";
import DeleteConfirmProductModal from "../DeleteConfirmProductModal";
import { UseBetterForm } from "@/Utilities/useBetterForm";
import PrimaryMaterialBtn from "@/Components/Buttons/Material/PrimaryMaterialBtn";
import SecondaryMaterialBtn from "@/Components/Buttons/Material/SecondaryMaterialBtn";

export default function FormActions({
  modalAction,
  setModalAction,
  form,
}: {
  modalAction: IModalAction<IProduct>;
  setModalAction: React.Dispatch<React.SetStateAction<IModalAction<IProduct>>>;
  form: UseBetterForm<ICreateProduct | IProduct>;
}) {
  const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false);

  return (
    <div className="mt-4 flex flex-col gap-4 sm:flex-row-reverse">
      <PrimaryMaterialBtn type="submit" disabled={form.processing}>
        {" "}
        {modalAction.state === "create" ? "Create" : "Save"}
      </PrimaryMaterialBtn>
      <SecondaryMaterialBtn
        type="button"
        onClick={() => {
          form.cancel();
          setModalAction((prev) => ({ ...prev, open: false }));
          form.reset();
          form.clearErrors();
        }}
      >
        Cancel
      </SecondaryMaterialBtn>

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
