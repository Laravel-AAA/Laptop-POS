import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
  AuthPageProps,
  IFilterProduct,
  ILaravelPaginate,
  IModalAction,
  IProduct,
} from "@/types";
import { Head } from "@inertiajs/react";
import Product from "./Partials/Product";
import { useState } from "react";
import Pagination from "@/Components/Pagination";
import { BsSearch } from "react-icons/bs";
import CreateEditProductModal from "@/Components/Modals/CreateEdit/ProductModal/CreateEditProductModal";
import InventoryHeader from "./Partials/InventoryHeader";
import Footer from "@/Layouts/GuestLayout/Partials/Footer";
import UpdateProductStockModal from "@/Components/Modals/UpdateProductStockModal";

export default function Inventory({
  auth,
  products: paginateProducts,
}: AuthPageProps<{
  products: ILaravelPaginate<IProduct>;
  filter: IFilterProduct;
}>) {
  const products: IProduct[] = paginateProducts.data;
  const [modalAction, setModalAction] = useState<IModalAction<IProduct>>({
    state: "create",
    open: false,
    data: null,
  });
  const [updateStockAction, setUpdateStockAction] = useState<
    { open: true; product: IProduct } | { open: false; product: null }
  >({ open: false, product: null });

  return (
    <>
      <Head title="Inventory" />
      <CreateEditProductModal
        modalAction={modalAction}
        setModalAction={setModalAction}
      />
      <UpdateProductStockModal
        modalAction={updateStockAction}
        close={() => setUpdateStockAction({ product: null, open: false })}
      />
      <AuthenticatedLayout
        user={auth.user}
        header={
          <InventoryHeader
            totalResult={paginateProducts.total}
            requestCreateProduct={() =>
              setModalAction({
                state: "create",
                open: true,
                data: null,
              })
            }
          />
        }
      >
        <div className="flex min-h-[75vh] flex-col justify-between">
          <div className="flex flex-wrap justify-center py-6">
            {products.length === 0 && (
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
                requestChangeStock={() =>
                  setUpdateStockAction({ open: true, product: p })
                }
              />
            ))}
          </div>
          <Pagination paginateItems={paginateProducts} />
          <Footer />
        </div>
      </AuthenticatedLayout>
    </>
  );
}
