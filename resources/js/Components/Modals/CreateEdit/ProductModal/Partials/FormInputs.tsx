import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import { ICreateProduct, IModalAction, IProduct, PageProps } from "@/types";
import FormImage from "./FormImage";
import Checkbox from "@/Components/Checkbox";
import { InertiaFormProps } from "@/types/global";
import { useState } from "react";
import Num from "@/Utilities/Num";
import { usePage } from "@inertiajs/react";

export default function FormInputs({
  formProps: form,
  modalAction,
}: {
  formProps: InertiaFormProps<ICreateProduct>;
  modalAction: IModalAction<IProduct>;
}) {
  const [priceIncludeTax, setPriceIncludeTax] = useState<boolean>(false);
  const [inputPrice, setInputPrice] = useState<number | null>(form.data.price);
  const taxPercent = usePage<PageProps>().props.business.taxPercent;

  function numbering(n: number | string | null) {
    return n == null ? n : Number(Number(n).toFixed(8)); //database decimal type accept at most 8 fraction digits
  }
  return (
    <div className="">
      <div className="w-full">
        <InputLabel htmlFor="name" value="Product Name" />

        <TextInput
          id="name"
          name="name"
          value={form.data.name ?? undefined}
          className="mt-1 block w-full"
          autoComplete="off"
          isFocused={true}
          disabled={modalAction.state === "show"}
          onChange={(e) => form.setData("name", e.target.value)}
          required
        />

        <InputError message={form.errors.name} className="mt-2" />
      </div>
      <div className="mt-4">
        <InputLabel htmlFor="price" value="Price" />

        <TextInput
          id="price"
          type="number"
          inputMode="decimal"
          autoComplete="off"
          name="price"
          value={inputPrice ?? undefined}
          className="mt-1 block w-full"
          disabled={modalAction.state === "show"}
          onChange={(e) => {
            const v = numbering(e.target.value);
            setInputPrice(v);
            form.setData(
              "price",
              numbering(priceIncludeTax ? (v ?? 0) / (1 + taxPercent) : v),
            );
          }}
        />

        <InputError message={form.errors.price} className="mt-2" />
        <label className="mt-2 flex items-center">
          <Checkbox
            name="remember"
            checked={priceIncludeTax}
            onChange={(e) => {
              setPriceIncludeTax((v) => {
                form.setData(
                  "price",
                  numbering(
                    inputPrice != null && !v
                      ? inputPrice / (1 + taxPercent)
                      : inputPrice,
                  ),
                );
                return !v;
              });
            }}
          />
          <span className="ml-2 text-sm text-gray-600">
            Price includes tax (
            {<Num currency="$" amount={form.data.price ?? 0} />} without tax)
          </span>
        </label>
      </div>
      <div className="mt-4">
        <InputLabel htmlFor="stock" value="Stock" />

        <TextInput
          id="stock"
          type="number"
          inputMode="numeric"
          autoComplete="off"
          name="stock"
          value={form.data.stock ?? undefined}
          className="mt-1 block w-full"
          disabled={modalAction.state === "show"}
          onChange={(e) => form.setData("stock", Number(e.target.value))}
        />

        <InputError message={form.errors.stock} className="mt-2" />
      </div>
      <div className="mt-4">
        <InputLabel htmlFor="barcode" value="Barcode" />

        <TextInput
          id="barcode"
          type="number"
          inputMode="numeric"
          autoComplete="off"
          name="barcode"
          value={form.data.barcode ?? undefined}
          className="remove-arrow mt-1 block w-full"
          disabled={modalAction.state === "show"}
          onChange={(e) => form.setData("barcode", e.target.value)}
        />

        <InputError message={form.errors.barcode} className="mt-2" />
      </div>

      <div className="mt-4">
        <FormImage formProps={form} modalAction={modalAction} />
      </div>
    </div>
  );
}
