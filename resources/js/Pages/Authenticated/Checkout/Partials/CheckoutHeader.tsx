import TextInput from "@/Components/Inputs/TextInput";
import { FaBarcode } from "react-icons/fa";

export default function CheckoutHeader() {
  return (
    <header className="my-0 bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="block justify-between py-3 sm:flex">
          <div className="flex items-center gap-3">
            <label className="relative block flex-grow">
              <span className="sr-only">Barcode</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <FaBarcode />
              </span>

              <TextInput
                id="barcode"
                type="text"
                name="barcode"
                autoComplete="off"
                isFocused={true}
                className="w-full p-1 pl-9 sm:w-72 "
                placeholder="Barcode..."
                onChange={
                  (v) => {}
                  // setFilter((p) => ({ ...p, search: v.target.value }))
                }
              />
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
