import { IProduct } from "@/types";
type PropsProduct = { product: IProduct };
export default function Product({ product }: PropsProduct) {
  return (
    <>
      <div className="m-4 flex cursor-pointer flex-col overflow-hidden rounded-md bg-white shadow transition duration-500 hover:-translate-y-1 hover:shadow-lg sm:w-52">
        <div>
          <img src={product.img} alt={product.img ? product.name : ""} />
        </div>
        <div className="flex flex-grow flex-col px-4  py-4 ">
          <h3 className="flex-grow text-lg font-semibold text-gray-600">
            {product.name}
          </h3>

          <div className="mt-2 flex justify-between">
            <p className="text-lg font-thin">
              ${/* &#xFDFC; */}&nbsp;{product.price ?? "N/A"}
            </p>
            <div className="flex flex-col justify-center">
              {product.quantity == 0 ? (
                <p className="font-thin text-red-500">Out of Stock</p>
              ) : (
                <p className="font-thin text-gray-500">
                  Qty {product.quantity ?? "N/A"}{" "}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
