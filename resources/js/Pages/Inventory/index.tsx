/**
 * CRUD all items available for this user such as Keyboard, Mouse.
 * Each item has information such as Picture, Name, Price, Quantity available, ...etc.
 */

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ILaravelPaginate, IModalAction, IProduct, PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import Product from "./Partials/Product";
import TextInput from "@/Components/Inputs/TextInput";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import Pagination from "@/Components/Pagination";
import { BsSearch } from "react-icons/bs";
import CreateEditProductModal from "@/Components/Modals/CreateEdit/ProductModal/CreateEditProductModal";

export default function Inventory({
  auth,
  products: paginateProducts,
}: PageProps<{ products: ILaravelPaginate<IProduct> }>) {
  const [searchValue, setSearch] = useState("");
  const products: IProduct[] = paginateProducts.data;
  const [modalAction, setModalAction] = useState<IModalAction<IProduct>>({
    state: "create",
    open: false,
  });

  console.log(products);

  return (
    <>
      <CreateEditProductModal
        modalAction={modalAction}
        setModalAction={setModalAction}
      />
      <AuthenticatedLayout
        user={auth.user}
        header={
          <div className="block justify-between py-4 sm:flex">
            <label className="relative block flex-grow">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <BsSearch />
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
              <p className="m-0 mr-3 inline p-0 text-center text-gray-600">
                Total:&nbsp;
                <span className="text-gray-900">{paginateProducts.total}</span>
              </p>
              <SecondaryButton
                className="inline-flex pl-2 pr-2"
                onClick={() =>
                  setModalAction({
                    state: "create",
                    open: true,
                    data: null,
                  })
                }
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
          {products.filter((p) =>
            p.name.toLowerCase().includes(searchValue.toLowerCase()),
          ).length == 0 && (
            <div className="my-20 flex gap-4 opacity-50">
              <BsSearch className="mt-1" />
              <p>No products found!</p>
            </div>
          )}
          {products
            .filter((p) =>
              p.name.toLowerCase().includes(searchValue.toLowerCase()),
            )
            .map((p) => (
              <Product
                key={p.id}
                product={p}
                requestShow={() =>
                  setModalAction({ state: "show", open: true, data: p })
                }
                requestEdit={() =>
                  setModalAction({
                    state: "edit",
                    data: p,
                    open: true,
                  })
                }
              />
            ))}
        </div>
        <Pagination paginateItems={paginateProducts} />
      </AuthenticatedLayout>
    </>
  );
}
