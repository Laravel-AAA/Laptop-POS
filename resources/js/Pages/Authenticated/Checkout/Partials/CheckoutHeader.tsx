import TextInput from "@/Components/Inputs/TextInput";
import { FaBarcode, FaSearch } from "react-icons/fa";

export default function CheckoutHeader() {
  return (
    <header className="sticky top-0 z-10 my-0 bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="block justify-between py-3 sm:flex">
          <div className="flex w-full flex-col md:flex-row gap-3">
            <label className="relative block md:w-fit w-full">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <FaSearch />
              </span>

              <TextInput
                id="search"
                type="search"
                name="search"
                autoComplete="on"
                className="p-1 pl-9 md:w-72 w-full"
                placeholder="Search..."
                onChange={
                  (v) => {}
                  // setFilter((p) => ({ ...p, search: v.target.value }))
                }
              />
            </label>
            <label className="relative block">
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
                className="p-1 md:w-44 w-full pl-9"
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
