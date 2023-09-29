import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import { IModalAction, IProduct } from "@/types";
import FormImage from "./FormImage";

export default function FormInputs({
  formProps: form,
  modalAction,
}: {
  formProps;//InertiaFormProps<ICreateProduct> //typescript complain while this is clearly what useForm return type :|
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
          disabled={modalAction.state == "show"}
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
          name="price"
          value={form.data.price}
          className="mt-1 block w-full"
          disabled={modalAction.state == "show"}
          onChange={(e) => form.setData("price", Number(e.target.value))}
        />

        <InputError message={form.errors.price} className="mt-2" />
      </div>
      <div className="mt-4">
        <InputLabel htmlFor="quantity" value="Quantity" />

        <TextInput
          id="quantity"
          type="number"
          name="quantity"
          value={form.data.quantity}
          className="mt-1 block w-full"
          disabled={modalAction.state == "show"}
          onChange={(e) => form.setData("quantity", Number(e.target.value))}
        />

        <InputError message={form.errors.quantity} className="mt-2" />
      </div>
      <div className="mt-4">
        <InputLabel htmlFor="barcode" value="Barcode" />

        <TextInput
          id="barcode"
          type="number"
          name="barcode"
          value={form.data.barcode}
          className="mt-1 block w-full"
          disabled={modalAction.state == "show"}
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
