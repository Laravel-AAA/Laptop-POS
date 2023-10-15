import DangerButton from "@/Components/Buttons/DangerButton";
import TertiaryButton from "@/Components/Buttons/TertiaryButton";
import InputError from "@/Components/Inputs/InputError";
import InputHint from "@/Components/Inputs/InputHint";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import { IModalAction, IProduct } from "@/types";
import React, { useState } from "react";
import { BsImage } from "react-icons/bs";

export default function FormImage({
  formProps: form,
  modalAction,
}: {
  formProps;
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
  const imageElement = (
    <div className="mt-1  rounded-md border border-gray-300">
      <img
        className="mx-auto h-40"
        src={img?.startsWith("http") ? img : "products-images/" + img}
        alt={"Image " + (img ?? "") + " of product " + form.data.name}
      />
    </div>
  );

  const inputImage = (
    <>
      <TextInput
        id="img"
        type="file"
        name="img"
        className="mt-1 block w-full"
        hidden={img}
        disabled={state == "show"}
        onChange={(e) => {
          form.setData("imageFile", e.target.files?.[0]);
        }}
      />
      {form.progress && (
        <div className="my-1 h-2.5 w-full rounded-md bg-gray-200 dark:bg-gray-700">
          <div
            style={{ width: form.progress + "%" }}
            className="h-2.5 rounded-md bg-green-600 dark:bg-green-500"
          ></div>
        </div>
      )}
      <InputError
        message={form.errors.img || form.errors.imageFile}
        className="mt-2"
      />
      <InputHint
        message="We recommend an image with white background"
        className="mt-2"
      />
    </>
  );

  const defaultImg = (
    <BsImage className="mx-auto mt-4 h-24 w-24 text-primary-700" />
  );

  function render() {
    if (state == "create") return inputImage;
    if (state == "show") {
      if (img == null) return defaultImg;
      else return imageElement;
    }
    //if edit
    if (img == null) return inputImage;

    if (editImageState == "default")
      return (
        <>
          {imageElement}
          <div className="mb-4 mt-1 flex justify-center gap-8">
            <TertiaryButton
              onClick={() => {
                setEditImageState("change");
              }}
            >
              Change&nbsp;Image
            </TertiaryButton>
            <DangerButton
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
    return inputImage;
  }
  return (
    <>
      <InputLabel
        htmlFor="img"
        value={
          ((img == null && state == "edit") ||
          editImageState == "removed" ||
          state == "create"
            ? "Choose "
            : editImageState == "change"
            ? "Change "
            : "") + "Image"
        }
      />
      {render()}
    </>
  );
}
