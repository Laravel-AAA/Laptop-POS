import React, { ChangeEvent, FormEvent, FormEventHandler } from "react";
import TemplateModal, { IModalButtons } from "../TemplateModal";
import { Dialog } from "@headlessui/react";
import { Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { ICreateProduct, IProduct } from "@/types";
import SecondaryButton from "@/Components/SecondaryButton";
import { ProductModalAction } from "@/Pages/Inventory";

export default function AddEditProductModal({
  open,
  setOpen,
  modalAction
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalAction: ProductModalAction; //modal action state to determine the behavior of the modal
}) {
  // const formRememberKey = 'product.'+(actionState)
  const {
    data,
    setData,
    post,
    processing,
    errors,
    reset,
    clearErrors,
    cancel,
  } = useForm<ICreateProduct>("product.create", {
    name: "",
    quantity: undefined,
    price: undefined,
    barcode: "",
    img: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    post(route("product.store"), { onSuccess: () => {setOpen(false);clearErrors();reset();} });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const key = e.target.id;
    const value = e.target.value;
    setData(key as keyof ICreateProduct, value);
  }

  return (
    <TemplateModal title={"Add New Product"} open={open} setOpen={setOpen}>
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="w-full">
          <InputLabel htmlFor="name" value="Product Name" />

          <TextInput
            id="name"
            name="name"
            value={data.name}
            className="mt-1 block w-full"
            autoComplete="name"
            isFocused={true}
            onChange={handleChange}
            required
          />

          <InputError message={errors.name} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="price" value="Price" />

          <TextInput
            id="price"
            type="number"
            name="price"
            value={data.price}
            className="mt-1 block w-full"
            autoComplete="price"
            onChange={handleChange}
          />

          <InputError message={errors.price} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="quantity" value="Quantity" />

          <TextInput
            id="quantity"
            type="number"
            name="quantity"
            value={data.quantity}
            className="mt-1 block w-full"
            autoComplete="quantity"
            onChange={handleChange}
          />

          <InputError message={errors.quantity} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="barcode" value="Barcode" />

          <TextInput
            id="barcode"
            type="number"
            name="barcode"
            value={data.barcode}
            className="mt-1 block w-full"
            autoComplete="barcode"
            onChange={handleChange}
          />

          <InputError message={errors.barcode} className="mt-2" />
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row-reverse">
          <PrimaryButton type="submit" className="" disabled={processing}>
            Create
          </PrimaryButton>
          <SecondaryButton
            type="button"
            onClick={() => {
              cancel();
              setOpen(false);
              reset();
              clearErrors();
            }}
            className=""
          >
            Cancel
          </SecondaryButton>
        </div>
      </form>
    </TemplateModal>
  );
}
