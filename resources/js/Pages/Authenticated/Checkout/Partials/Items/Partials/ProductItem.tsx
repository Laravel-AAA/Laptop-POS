import { IBill, ICreateBill, ICreateTransaction, IProduct } from "@/types";
import ItemOptions from "./ItemOptions";

export default function ProductItem({
  product,
  requestChanged,
  requestIncrease,
  requestDecrease,
  transaction,
}: {
  product: IProduct;
  requestChanged: (qty: number) => any;
  requestIncrease: () => any;
  requestDecrease: () => any;
  transaction: ICreateTransaction;
}) {
  return (
    <div className="group relative m-1 my-4 flex w-3/4 cursor-pointer flex-col overflow-hidden rounded-md bg-white shadow transition duration-300 ease-in-out hover:shadow-lg sm:my-1 sm:w-52">
      <ItemOptions
        product={product}
        requestChanged={requestChanged}
        requestDecrease={requestDecrease}
        requestIncrease={requestIncrease}
        transaction={transaction}
      />
      <div>
        {product.img ? (
          <img
            src={
              product.img.startsWith("http")
                ? product.img
                : "products-images/" + product.img
            }
            alt={"Image of product: " + product.name}
          />
        ) : (
          <p>{product.name}</p>
        )}
      </div>
      <div className="absolute bottom-0 flex w-full  flex-grow flex-col bg-black bg-opacity-50 px-2 pb-1">
        <h3 className="flex-grow text-center text-lg font-semibold text-white">
          {product.name}
        </h3>

        <div className="flex justify-between font-thin">
          <p className="text-lg text-gray-100">
            ${/* &#xFDFC; */}&#8239;{product.price ?? "N/A"}
          </p>
          <div className="flex flex-col justify-center">
            {product.stock == 0 ? (
              <p className="text-red-500">Out of Stock</p>
            ) : transaction.quantity > (product.stock || Infinity) ? (
              <p className="text-red-500">Qty {product.stock ?? "N/A"}</p>
            ) : (
              <p className="text-gray-200">Qty {product.stock ?? "N/A"}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
