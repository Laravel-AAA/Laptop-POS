import BetterLink from "@/Components/Buttons/BetterLink";
import CreateEditProductModal from "@/Components/Modals/CreateEdit/ProductModal/CreateEditProductModal";
import UpdateProductStockModal from "@/Components/Modals/UpdateProductStockModal";
import A from "@/Components/Typography/A";
import Product from "@/Pages/Authenticated/Inventory/Partials/Product";
import { ILaravelPaginate, IModalAction, IProduct } from "@/types";
import { Card, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaBoxesStacked, FaChevronRight } from "react-icons/fa6";

export default function OutOfStock({
  paginate,
}: {
  paginate: ILaravelPaginate<IProduct>;
}) {
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
      <CreateEditProductModal
        modalAction={modalAction}
        setModalAction={setModalAction}
      />
      <UpdateProductStockModal
        modalAction={updateStockAction}
        close={() => setUpdateStockAction({ product: null, open: false })}
      />
      <Card className="rounded-none shadow sm:rounded-lg">
        <div className="p-6">
          <header>
            <Typography variant="h6" color="blue-gray">
              Products out of stock
            </Typography>
            <A
              href={route("product.index", { stock: "out" })}
              className="font-normal"
            >
              Viw all products out of stock
            </A>
          </header>
          <section>
            {paginate.total > 0 ? (
              <div className="relative flex overflow-hidden">
                  <div className="pointer-events-none absolute right-0 z-10 flex h-full w-52 justify-end bg-gradient-to-l from-white to-transparent">
                {paginate.total > 5 && (
                    <div className="mb-2 self-center">
                      <span className="pointer-events-auto">
                        <BetterLink
                          title="Viw all products out of stock"
                          className="inline-block self-center rounded-[50%] p-2 align-middle text-gray-700 transition duration-200 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-900 focus:outline-none"
                          href={route("product.index", { stock: "out" })}
                        >
                          <FaChevronRight className="text-lg" />
                        </BetterLink>
                      </span>
                    </div>
                )}
                  </div>
                {paginate.data.map((p) => (
                  <Product
                    key={p.id}
                    product={p}
                    requestEdit={function (): void {
                      setModalAction({ data: p, open: true, state: "edit" });
                    }}
                    requestShow={function (): void {
                      setModalAction({ data: p, open: true, state: "show" });
                    }}
                    requestChangeStock={function (): void {
                      setUpdateStockAction({ open: true, product: p });
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="my-20 flex justify-center gap-4 opacity-60">
                <FaBoxesStacked className="mt-1" />
                <p>You have no products with empty stock</p>
              </div>
            )}
          </section>
        </div>
      </Card>
    </>
  );
}
