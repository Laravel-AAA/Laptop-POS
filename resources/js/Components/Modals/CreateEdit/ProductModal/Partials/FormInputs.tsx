import Input from "@/Components/Inputs/Input";
import { AuthPageProps, ICreateProduct, IModalAction, IProduct } from "@/types";
import FormImage from "./FormImage";
import Checkbox from "@/Components/Checkbox";
import { useState } from "react";
import Num from "@/Utilities/Num";
import { usePage } from "@inertiajs/react";
import { UseBetterForm } from "@/Utilities/useBetterForm";

export default function FormInputs({
  formProps: form,
  modalAction,
}: {
  formProps: UseBetterForm<ICreateProduct>;
  modalAction: IModalAction<IProduct>;
}) {
  const [priceIncludeTax, setPriceIncludeTax] = useState<boolean>(false);
  const [inputPrice, setInputPrice] = useState<number | null>(form.data.price);
  const taxPercent = usePage<AuthPageProps>().props.auth.business.taxPercent;

  function numbering(n: number | string | null) {
    return n == null ? n : Number(Number(n).toFixed(8)); //database decimal type accept at most 8 fraction digits
  }
  return (
    <div className="">
      <div className="w-full">
        <Input
          id="name"
          label="Product Name"
          name="name"
          value={form.data.name ?? undefined}
          className="mt-1 block w-full"
          autoComplete="off"
          autoFocus
          disabled={modalAction.state === "show" || form.processing}
          onChange={(e) => form.setData("name", e.target.value)}
          required
          errorMsg={form.errors.name}
          hideError={form.isDirty("name")}
        />
      </div>
      <div className="mt-4">
        <Input
          id="price"
          label="Price"
          type="number"
          inputMode="decimal"
          autoComplete="off"
          name="price"
          value={inputPrice ?? undefined}
          className="mt-1 block w-full"
          disabled={modalAction.state === "show" || form.processing}
          onChange={(e) => {
            const v = numbering(e.target.value);
            setInputPrice(v);
            form.setData(
              "price",
              numbering(priceIncludeTax ? (v ?? 0) / (1 + taxPercent) : v),
            );
          }}
          errorMsg={form.errors.price}
          hideError={form.isDirty("price")}
          required={false}
        />

        <label className="mt-2 flex items-center">
          <Checkbox
            name="remember"
            label={
              <span className="ml-2 text-sm text-gray-600">
                Price includes tax (
                {<Num showCurrency amount={form.data.price ?? 0} />} without
                tax)
              </span>
            }
            checked={priceIncludeTax}
            errorMsg={undefined}
            disabled={form.processing}
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
        </label>
      </div>
      <div className="mt-4">
        <Input
          id="stock"
          label="Stock"
          type="number"
          inputMode="numeric"
          autoComplete="off"
          name="stock"
          value={form.data.stock ?? undefined}
          className="mt-1 block w-full"
          disabled={modalAction.state === "show" || form.processing}
          onChange={(e) => form.setData("stock", Number(e.target.value))}
          errorMsg={form.errors.stock}
          hideError={form.isDirty("stock")}
          required={false}
        />
      </div>
      <div className="mt-4">
        <Input
          id="barcode"
          label="Barcode"
          type="number"
          inputMode="numeric"
          autoComplete="off"
          name="barcode"
          value={form.data.barcode ?? undefined}
          className="remove-arrow mt-1 block w-full"
          disabled={modalAction.state === "show" || form.processing}
          onChange={(e) => form.setData("barcode", e.target.value)}
          errorMsg={form.errors.barcode}
          hideError={form.isDirty("barcode")}
          required={false}
        />
      </div>

      <div className="mt-4">
        <FormImage formProps={form} modalAction={modalAction} />
      </div>
    </div>
  );
}
