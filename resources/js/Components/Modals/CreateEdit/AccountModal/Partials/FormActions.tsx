import { ICreateUser, IModalAction, IUser } from "@/types";
import React from "react";
import { UseBetterForm } from "@/Utilities/useBetterForm";
import PrimaryMaterialBtn from "@/Components/Buttons/Material/PrimaryMaterialBtn";
import SecondaryMaterialBtn from "@/Components/Buttons/Material/SecondaryMaterialBtn";
import { useTranslation } from "react-i18next";

export default function FormActions({
  modalAction,
  setModalAction,
  form,
}: {
  modalAction: IModalAction<IUser>;
  setModalAction: React.Dispatch<React.SetStateAction<IModalAction<IUser>>>;
  form: UseBetterForm<ICreateUser | IUser>;
}) {
  const { t } = useTranslation();
  return (
    <div className="mt-4 flex flex-col gap-4 sm:flex-row-reverse">
      <PrimaryMaterialBtn type="submit" disabled={form.processing}>
        {t(modalAction.state === "create" ? "Create" : "Save")}
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
        {t("Cancel")}
      </SecondaryMaterialBtn>
    </div>
  );
}
