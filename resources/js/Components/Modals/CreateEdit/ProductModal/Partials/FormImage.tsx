import DangerButton from "@/Components/Buttons/DangerButton";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import Input from "@/Components/Inputs/Input";
import DefaultProductImg from "@/Pages/Authenticated/Inventory/Partials/DefaultProductImg";
import { UseBetterForm } from "@/Utilities/useBetterForm";
import { ICreateProduct, IModalAction, IProduct } from "@/types";
import { Progress } from "@material-tailwind/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FormImage({
  formProps: form,
  modalAction,
}: {
  formProps: UseBetterForm<ICreateProduct>;
  modalAction: IModalAction<IProduct>;
}) {
  const state = modalAction.state;
  const img = form.data.img;
  /** In edit modalAction.state the image can be change/removed/default.
   * - change when user click change.
   * - removed when user click remove.
   * - default is when user never click on either change/remove.
   */
  const [editImageState, setEditImageState] = useState<
    "removed" | "change" | "default"
  >(() => "default");

  if (state === "create")
    return (
      <InputImage
        img={img}
        state={state}
        editImageState={editImageState}
        form={form}
      />
    );

  if (state === "show") {
    if (img === null) return <DefaultProductImg />;
    else return <ImageElement img={img} productName={form.data.name} />;
  }

  //if edit
  if (img === null)
    return (
      <InputImage
        img={img}
        state={state}
        editImageState={editImageState}
        form={form}
      />
    );

  if (editImageState === "default")
    return (
      <>
        <ImageElement img={img} productName={form.data.name} />
        <div className="mb-4 mt-1 flex justify-center gap-8">
          <SecondaryButton
            disabled={form.processing}
            onClick={() => {
              setEditImageState("change");
            }}
          >
            Change&nbsp;Image
          </SecondaryButton>
          <DangerButton
            disabled={form.processing}
            onClick={() => {
              setEditImageState("removed");
              form.setData("img", null);
            }}
          >
            Remove&nbsp;Image
          </DangerButton>
        </div>
      </>
    );
  //if editImageState is `change` OR `removed`
  return (
    <InputImage
      img={img}
      state={state}
      editImageState={editImageState}
      form={form}
    />
  );
}

function ImageElement({
  img,
  productName,
}: {
  img: string | null;
  productName: string;
}) {
  return (
    <div className="mt-1  rounded-md border border-gray-300">
      <img
        className="mx-auto h-40"
        src={img?.startsWith("http") ? img : "products-images/" + img}
        alt={"Image " + (img ?? "") + " of product " + productName}
      />
    </div>
  );
}

function InputImage({
  img,
  state,
  editImageState,
  form,
}: {
  img: string | null;
  state: IModalAction<ICreateProduct>["state"];
  editImageState: "removed" | "change" | "default";
  form: UseBetterForm<ICreateProduct>;
}) {
  const { t } = useTranslation();
  return (
    <>
      <Input
        label={
          ((img === null && state === "edit") ||
          editImageState === "removed" ||
          state === "create"
            ? t("Choose")
            : editImageState === "change"
              ? t("Change")
              : "") +
          " " +
          t("Image")
        }
        type="file"
        className="mt-1 block w-full"
        accept="image/*"
        hidden={!!img}
        disabled={state === "show" || form.processing}
        required={false}
        onChange={(e) => {
          form.setData("imageFile", e.target.files?.[0] ?? null);
        }}
        errorMsg={form.errors.img || form.errors.imageFile}
        hideError={form.isDirty("img") || form.isDirty("imageFile")}
        hint={t("We recommend an image with white background")}
      />
      {/* {form.progress && <Progress value={50}/>} */},
    </>
  );
}
