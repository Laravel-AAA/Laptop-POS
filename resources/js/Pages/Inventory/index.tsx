/**
 * CRUD all items available for this user such as Keyboard, Mouse.
 * Each item has information such as Picture, Name, Price, Quantity available, ...etc.
 */

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ILaravelPaginate, IProduct, PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import Product from "./Partials/Product";
import TextInput from "@/Components/TextInput";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import SecondaryButton from "@/Components/SecondaryButton";
import AddEditProductModal from "@/Components/Modals/Add-Edit/AddEditProductModal";
import Pagination from "@/Components/Pagination";

export default function Inventory({
  auth,
  products: paginateProducts
}: PageProps<{ products: ILaravelPaginate<IProduct> }>) {
  const [searchValue, setSearch] = useState("");
  const [productModalAction, setProductModalAction] =
    useState<ProductModalAction>("create");
  const [isAddEditProductModal, setAddEditProductModal] = useState(false);
  const products: IProduct[] = paginateProducts.data;
  
  return (
    <>
      <AddEditProductModal
        open={isAddEditProductModal}
        setOpen={setAddEditProductModal}
        modalAction={productModalAction}
      />
      <AuthenticatedLayout
        user={auth.user}
        header={
          <div className="block justify-between py-4 sm:flex">
            <label className="relative block flex-grow">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  className="h-5 w-5 fill-slate-500"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                >
                  <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                </svg>
              </span>
              <TextInput
                id="search"
                type="search"
                name="search"
                isFocused={true}
                className="w-full p-1 pl-9 sm:w-72 "
                placeholder="Search for products..."
                onChange={(v) => setSearch(v.target.value)}
              />
            </label>
            <div className="mt-3 self-center sm:mt-0">
              <p className="m-0 mr-3 inline p-0 text-center text-gray-500">
                Total:&nbsp;
                <span className="text-black">{paginateProducts.total}</span>
              </p>
              <SecondaryButton
                className="inline-flex pl-2 pr-2"
                onClick={() => setAddEditProductModal(true)}
              >
                <FaPlus className="mr-2" />
                <span>Add New Product</span>
              </SecondaryButton>
            </div>
          </div>
        }
      >
        <Head title="Inventory" />
        <div className="flex flex-wrap  justify-center py-6">
          {products
            .filter((p) =>
              p.name.toLowerCase().includes(searchValue.toLowerCase()),
            )
            .map((p) => (
              <Product key={p.id} product={p} />
            ))}
        </div>
        <Pagination paginateItems={paginateProducts} />
      </AuthenticatedLayout>
    </>
  );
}

export type ProductModalAction = "create" | "update" | "show";
