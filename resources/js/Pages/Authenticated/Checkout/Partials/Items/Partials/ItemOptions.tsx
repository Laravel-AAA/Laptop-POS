import { ButtonHTMLAttributes, ReactNode } from "react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { IProduct } from "@/types";

export default function ItemOptions({
  requestAddToCart,
  requestSubFromCart,
  product,
}: {
  product: IProduct;
  requestAddToCart: () => void;
  requestSubFromCart: () => void;
}) {
  return (
    <div className="absolute left-0 top-2 hidden w-full group-hover:block">
      <div className="mx-2 flex justify-between">
        <ItemBtn
          onClick={() => requestSubFromCart()}
          icon={<BsDashLg className="text-2xl" />}
        />
        <input
          type="number"
          name="quantity"
          className="remove-arrow mx-5 block min-w-0 rounded-md border border-transparent bg-white bg-opacity-80 p-2 px-4 text-center font-semibold text-black shadow focus:border-gray-700 focus:ring-gray-700"
          inputMode="numeric"
          value={4}
          // onChange={...}
        />
        <ItemBtn
          onClick={() => requestAddToCart()}
          icon={<BsPlusLg className="text-2xl" />}
        />
      </div>
    </div>
  );
}

function ItemBtn({
  icon,
  disabled,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { icon: ReactNode }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center rounded-full border border-transparent
      bg-white bg-opacity-80 p-2 leading-4  text-gray-800 shadow transition
      duration-200 ease-in-out  hover:bg-opacity-90
      hover:text-black hover:shadow-md focus:outline-none focus:ring-2
      focus:ring-gray-700 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-gray-700 focus-visible:ring-offset-2
      active:scale-95 disabled:opacity-25 ${disabled && "opacity-25"} `}
      {...props}
    >
      {icon}
    </button>
  );
}
