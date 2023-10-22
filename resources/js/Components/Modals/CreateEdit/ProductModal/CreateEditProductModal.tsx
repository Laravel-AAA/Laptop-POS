import React from "react";
import { IModalAction, IProduct } from "@/types";
import Form from "./Partials/Form";
import TemplateModal from "../../TemplateModal";

export default function CreateEditProductModal({
  modalAction, //modal action used to determine the behavior of the modal
  setModalAction,
}: {
  modalAction: IModalAction<IProduct>;
  setModalAction: React.Dispatch<React.SetStateAction<IModalAction<IProduct>>>;
}) {
  console.log(modalAction.data);

  function getTitle(): string {
    if (modalAction.state === "create") return "Add New Product";
    if (modalAction.state === "edit") return "Edit Product";
    return "View Product";
  }

  return (
    <TemplateModal
      title={getTitle()}
      open={modalAction.open}
      closeModal={() => setModalAction((prev) => ({ ...prev, open: false }))}
    >
      <Form modalAction={modalAction} setModalAction={setModalAction} />
    </TemplateModal>
  );
}
