import { AuthPageProps, ICreateProduct, ICreateBillDetail, IProduct } from "@/types";
import ItemOptions from "./ItemOptions";
import Num from "@/Utilities/Num";
import { usePage } from "@inertiajs/react";

export default function ProductItem({
  requestChanged,
  requestIncrease,
  requestDecrease,
  bill_detail,
  changeStockNumber,
}: {
  requestChanged: (qty: number) => any;
  requestIncrease: () => any;
  requestDecrease: () => any;
  bill_detail: ICreateBillDetail;
  changeStockNumber: boolean;
}) {
  const taxPercent = usePage<AuthPageProps>().props.auth.business.taxPercent;
  const product = bill_detail.product;

  return (
    <div className="group relative m-1 my-4 flex w-3/4 flex-col overflow-hidden rounded-md bg-white shadow-sm transition duration-300 ease-in-out hover:shadow-lg sm:my-1 sm:w-52">
      <ItemOptions
        product={product}
        requestChanged={requestChanged}
        requestDecrease={requestDecrease}
        requestIncrease={requestIncrease}
        bill_detail={bill_detail}
      />
      <div>
        {product.img && (
          <img
            src={
              product.img.startsWith("http")
                ? product.img
                : "/products-images/" + product.img
            }
            alt={"Image of product: " + product.name}
          />
        )}
      </div>
      <div
        className={` bottom-0 flex w-full  flex-grow flex-col bg-black px-2 pb-1 ${
          product.img ? "absolute bg-opacity-50" : "h-full bg-opacity-80 pt-2"
        }`}
      >
        <h3
          className={`flex-grow text-center text-lg font-semibold text-white ${
            product.img ? "" : "mt-10"
          }`}
        >
          {product.name}
        </h3>

        <div className="flex justify-between font-light">
          <p
            title={
              product.price === null ? "" : "$" + product.price + " without tax"
            }
            className="text-lg text-gray-100"
          >
            <span className="font-normal">
              {product.price === null ? (
                "N/A"
              ) : (
                <Num
                  showCurrency
                  className="text-primary-100"
                  amount={product.price * (1 + taxPercent)}
                />
              )}
            </span>
          </p>
          <div className="flex flex-col justify-center">
            {product.stock === 0 ? (
              <p className="font-normal text-danger-400">Out of Stock</p>
            ) : bill_detail.quantity >= (product.stock || Infinity) ? (
              <p className="font-normal text-danger-400">
                Stock{" "}
                {product.stock === null
                  ? "N/A"
                  : product.stock}
              </p>
            ) : (
              <p className="text-gray-200">
                Stock&nbsp;
                <Num
                  amount={
                    product.stock === null
                      ? null
                      : product.stock
                  }
                  defaultNoAmount
                  className="font-normal text-secondary-100"
                />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
