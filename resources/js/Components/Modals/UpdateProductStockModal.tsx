import React, { FormEvent, useEffect, useState } from "react";
import TemplateModal from "./TemplateModal";
import PrimaryMaterialBtn from "../Buttons/Material/PrimaryMaterialBtn";
import { IProduct } from "@/types";
import useBetterForm from "@/Utilities/useBetterForm";
import Input from "../Inputs/Input";
import SecondaryMaterialBtn from "../Buttons/Material/SecondaryMaterialBtn";

export default function UpdateProductStockModal({
  modalAction,
  close,
}: {
  close: () => void;
  modalAction:
    | { open: true; product: IProduct }
    | { open: false; product: null };
}) {
  const product = modalAction.product;
  const [increase, setIncrease] = useState<number>(0);
  const form = useBetterForm<{ stock: number }>(
    { stock: product?.stock ?? 0 },
    product?.id,
  );

  useEffect(()=>setIncrease(0),[product]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    form.patch(route(`product.update`, product?.id), {
      onSuccess: () => {
        form.clearErrors();
        form.reset();
        close();
      },
    });
  }

  return (
    <TemplateModal
      title="Update Stock"
      open={modalAction.open}
      closeModal={() => {
        close();
        form.reset();
        form.clearErrors();
      }}
    >
      <form className="mt-3" onSubmit={handleSubmit}>
        <Input
          id="stock"
          label="Add stock"
          type="number"
          name="stock"
          autoFocus
          value={increase}
          className="mt-1 block w-full"
          disabled={form.processing}
          onChange={(e) => {
            form.setData(
              "stock",
              (product?.stock ?? 0) + Number(e.target.value),
            );
            setIncrease(Number(e.target.value));
          }}
          errorMsg={form.errors.stock}
          hideError={form.isDirty("stock")}
          onFocus={(e) => e.target.select()}
          required={true}
          hint={
            <span>
              Curren stock{" "}
              <span className="font-semibold text-gray-600">
                {product?.stock ?? "N/A"}
              </span>
              . Update stock to{" "}
              <span className="font-semibold text-gray-600">
                {(product?.stock ?? 0) + increase}
              </span>
            </span>
          }
        />

        <div className="mt-4 flex flex-col gap-4 sm:flex-row-reverse">
          <PrimaryMaterialBtn type="submit" disabled={form.processing}>
            Update
          </PrimaryMaterialBtn>
          <SecondaryMaterialBtn
            type="button"
            onClick={() => {
              form.cancel();
              close();
              form.reset();
              form.clearErrors();
            }}
          >
            Cancel
          </SecondaryMaterialBtn>
        </div>
      </form>
    </TemplateModal>
  );
}
