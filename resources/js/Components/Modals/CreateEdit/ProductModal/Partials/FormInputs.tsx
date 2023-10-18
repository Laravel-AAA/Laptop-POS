import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import { IModalAction, IProduct } from "@/types";
import FormImage from "./FormImage";

export default function FormInputs({
  formProps: form,
  modalAction,
}: {
  formProps; //InertiaFormProps<ICreateProduct> //typescript complain while this is clearly what useForm return type :|
  modalAction: IModalAction<IProduct>;
}) {
  return (
    <div className="">
      <div className="w-full">
        <InputLabel htmlFor="name" value="Product Name" />

        <TextInput
          id="name"
          name="name"
          value={form.data.name}
          className="mt-1 block w-full"
          autoComplete="name"
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
          name="price"
          value={form.data.price}
          className="mt-1 block w-full"
          disabled={modalAction.state === "show"}
          onChange={(e) => form.setData("price", Number(e.target.value))}
        />

        <InputError message={form.errors.price} className="mt-2" />
      </div>
      <div className="mt-4">
        <InputLabel htmlFor="stock" value="Stock" />

        <TextInput
          id="stock"
          type="number"
          inputMode="numeric"
          name="stock"
          value={form.data.stock}
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
          name="barcode"
          value={form.data.barcode}
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
