import React, { ChangeEvent, FormEvent, Key } from "react";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import InputError from "@/Components/Inputs/InputError";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import { ICreateProduct, IModalAction, IProduct } from "@/types";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import DangerButton from "@/Components/Buttons/DangerButton";
import Form from "./Partials/Form";
import TemplateModal from "../../TemplateModal";

export default function CreateEditProductModal({
  modalAction, //modal action used to determine the behavior of the modal
  setModalAction,
}: {
  modalAction: IModalAction<IProduct>;
  setModalAction: React.Dispatch<React.SetStateAction<IModalAction<IProduct>>>;
}) {
  // if (modalAction != "create" && !previewProduct)//typescript will prevent such case
  //   throw `Error: AddEditProductModal expected to have previewProduct when modalAction=${modalAction}`;
  console.log(modalAction.data);

  function getTitle(): string {
    if (modalAction.state == "create") return "Add New Product";
    if (modalAction.state == "edit") return "Edit Product";
    return "View Product";
  }
  if (modalAction.open)
    document.getElementById("templateModal")?.scrollTo({ top: 0 });
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
