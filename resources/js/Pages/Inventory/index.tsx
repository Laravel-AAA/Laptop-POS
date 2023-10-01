/**
 * CRUD all items available for this user such as Keyboard, Mouse.
 * Each item has information such as Picture, Name, Price, Quantity available, ...etc.
 */

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
  IFilterProduct,
  ILaravelPaginate,
  IModalAction,
  IProduct,
  PageProps,
} from "@/types";
import { Head } from "@inertiajs/react";
import Product from "./Partials/Product";
import { useState } from "react";
import Pagination from "@/Components/Pagination";
import { BsSearch } from "react-icons/bs";
import CreateEditProductModal from "@/Components/Modals/CreateEdit/ProductModal/CreateEditProductModal";
import InventoryHeader from "./Partials/InventoryHeader";

export default function Inventory({
  auth,
  products: paginateProducts,
}: PageProps<{
  products: ILaravelPaginate<IProduct>;
  filter: IFilterProduct;
}>) {
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
          <InventoryHeader
          totalResult={paginateProducts.total}
            requestCreateProduct={()=>setModalAction({
              state: "create",
              open: true,
              data: null,
            })}
          />
        }
      >
        <Head title="Inventory" />
        <div className="flex flex-wrap  justify-center py-6">
          {products.length == 0 && (
            <div className="my-20 flex gap-4 opacity-50">
              <BsSearch className="mt-1" />
              <p>No products found!</p>
            </div>
          )}
          {products.map((p) => (
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
