import React, { useState } from "react";
import AlertModal from "../../AlertModal";
import { IProduct } from "@/types";
import { Inertia, Method } from "@inertiajs/inertia";
import { router } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function DeleteConfirmProductModal({
  product,
  isOpen,
  requestClose,
}: {
  product: IProduct;
  isOpen: boolean;
  requestClose: (clickedButtonText?: string) => any;
}) {
  const [deleteProgress, setDeleteProgress] = useState<boolean>(false);

  const { t } = useTranslation();
  return (
    <AlertModal
      key="createEditProductDeleteConfirmProductModal"
      icon="danger"
      title="Are you sure?"
      paragraph={
        <span>
          {t("You are about to delete the product")}{" "}
          <strong>{product.name}</strong>
        </span>
      }
      buttons={[
        {
          type: "danger",
          text: "Delete",
          props: {
            onClick: () => {
              setDeleteProgress(true);
              router.delete(route("product.destroy", product.id), {
                preserveScroll: true,
                preserveState: true,
                onError: (e) => {
                  if (e.serverError) alert(e.serverError);
                },
              });
            },
            disabled: deleteProgress,
          },
        },
        { type: "secondary", text: "Cancel" },
      ]}
      isOpen={isOpen}
      requestClose={(clickedButtonText) => requestClose(clickedButtonText)}
    />
  );
}
