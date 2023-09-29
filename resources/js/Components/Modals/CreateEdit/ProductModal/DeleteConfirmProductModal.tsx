import React, { useState } from "react";
import AlertModal from "../../AlertModal";
import { IProduct } from "@/types";
import { Inertia } from "@inertiajs/inertia";

export default function DeleteConfirmProductModal({
  product,
  isOpen,
  requestClose
}: {
  product: IProduct;
  isOpen: boolean;
  requestClose:(clickedButtonText?:string)=>any;
}) {
  const [deleteProgress,setDeleteProgress] = useState<boolean>(false);
  return (
    <AlertModal
      icon="danger"
      title="Are you sure?"
      paragraph={
        <span>
          You are about to delete the product <strong>{product.name}</strong>
        </span>
      }
      buttons={{
        danger: {
          text: "Delete",
          props: {
            onClick: () => {
              setDeleteProgress(true);
              Inertia.delete(route("product.destroy", product.id));
            },
            disabled: deleteProgress,
          },
        },
        secondary: { text: "Cancel" },
      }}
      isOpen={isOpen}
      requestClose={(clickedButtonText)=>requestClose(clickedButtonText)}
    />
  );
}
