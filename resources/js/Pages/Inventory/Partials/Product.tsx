import { IProduct } from "@/types";
type PropsProduct = { product: IProduct };
export default function Product({ product }: PropsProduct) {
  return (
    <>
      <div className="sm:w-52 w-96 m-5 bg-white flex flex-col rounded-md overflow-hidden shadow hover:shadow-lg hover:-translate-y-1 transition duration-500 cursor-pointer">
        <div>
          <img src={product.img} alt={product.img ? product.name : ""} />
        </div>
        <div className="py-4 px-4 flex flex-col  flex-grow ">
          <h3 className="text-lg font-semibold flex-grow text-gray-600">
            {product.name}
          </h3>

          <p className="text-gray-500 mt-3 font-thin">
            Qty: {product.quantity}
          </p>
          <p className="mt-1 text-lg font-thin">
            ${/* &#xFDFC; */}&nbsp;{product.price}
          </p>
        </div>
      </div>
    </>
  );
}
