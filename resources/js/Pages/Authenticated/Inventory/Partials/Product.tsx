import { AuthPageProps, IProduct } from "@/types";
import ProductOptions from "./ProductOptions";
import Num from "@/Utilities/Num";
import { usePage } from "@inertiajs/react";
import NoImageImage from "@/Pages/Authenticated/Inventory/Partials/NoImageImage";
type PropsProduct = {
  product: IProduct;
  requestEdit: () => void;
  requestShow: () => void;
};
export default function Product({
  product,
  requestEdit,
  requestShow,
}: PropsProduct) {
  const taxPercent = usePage<AuthPageProps>().props.auth.business.taxPercent;
  return (
    <button
      onClick={() => requestShow()}
      className="div-style group relative m-4 flex cursor-pointer flex-col overflow-hidden rounded-md bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-52"
    >
      <ProductOptions
        product={product}
        requestEdit={requestEdit}
        requestShow={requestShow}
      />

      <div className="w-full">
        {product.img ? (
          <img
            src={
              product.img.startsWith("http")
                ? product.img
                : "products-images/" + product.img
            }
            alt={"Image " + (product.img ?? "") + " of product " + product.name}
          />
        ) : (
          <NoImageImage />
        )}
      </div>
      <div className="flex w-full flex-grow flex-col px-4  py-4 ">
        <h3 className="flex-grow text-lg font-semibold text-gray-600">
          {product.name}
        </h3>

        <div className="mt-2 flex justify-between">
          <p
            title={
              product.price === null ? "" : "$" + product.price + " without tax"
            }
            className="text-lg font-thin text-primary-700"
          >
            {product.price === null ? (
              "N/A"
            ) : (
              <Num
                showCurrency
                className="font-semibold"
                amount={product.price * (1 + taxPercent)}
              />
            )}
          </p>
          <div className="flex flex-col justify-center">
            {product.stock === 0 ? (
              <p className="font-thin text-red-500">Out of Stock</p>
            ) : (
              <p className="font-thin text-gray-500">
                Stock{" "}
                <span className="font-normal text-secondary-600">
                  {product.stock ?? "N/A"}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
