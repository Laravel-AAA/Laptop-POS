import React from "react";
import { IModalAction, IUser } from "@/types";
import TemplateModal from "../../TemplateModal";
import Form from "./Partials/Form";

export default function CreateEditAccountModal({
  modalAction, //modal action used to determine the behavior of the modal
  setModalAction,
}: {
  modalAction: IModalAction<IUser>;
  setModalAction: React.Dispatch<React.SetStateAction<IModalAction<IUser>>>;
}) {
  return (
    <TemplateModal
      title={getTitle(modalAction.state)}
      open={modalAction.open}
      closeModal={() => setModalAction((prev) => ({ ...prev, open: false }))}
    >
      <Form modalAction={modalAction} setModalAction={setModalAction} />
    </TemplateModal>
  );
}

function getTitle(state: IModalAction<IUser>["state"]): string {
  return state === "create" ? "Create New Account" : "Edit Account";
}
