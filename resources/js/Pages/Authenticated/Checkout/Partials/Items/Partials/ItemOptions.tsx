import { ButtonHTMLAttributes, ReactNode } from "react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { ICreateBillDetail, IProduct } from "@/types";
import { MAX_QUANTITY } from "@/Utilities/Constant";

export default function ItemOptions({
  product,
  requestChanged,
  requestIncrease,
  requestDecrease,
  bill_detail,
}: {
  product: IProduct;
  requestChanged: (qty: number) => any;
  requestIncrease: () => any;
  requestDecrease: () => any;
  bill_detail: ICreateBillDetail;
}) {
  return (
    <div
      style={{ zIndex: 1 }}
      onClick={(e) => e.stopPropagation()}
      className="absolute left-0 top-2 hidden w-full group-hover:block"
    >
      <div className="mx-2 flex justify-between">
        <ItemBtn
          onClick={() => requestDecrease()}
          disabled={bill_detail.quantity <= 0}
          icon={<BsDashLg className="text-2xl" />}
        />
        <input
          type="number"
          name="quantity"
          maxLength={4}
          max={MAX_QUANTITY}
          className={`remove-arrow mx-5 block min-w-0 rounded-md border border-transparent bg-white bg-opacity-90 p-2 text-center font-semibold shadow  ${
            bill_detail.quantity > (product.stock ?? Infinity)
              ? "text-danger-600 focus:border-danger-500 focus:ring-danger-500"
              : " text-black focus:border-gray-700 focus:ring-gray-700"
          }`}
          value={bill_detail.quantity}
          onFocus={(e) => e.target.select()}
          onChange={(e) => {
            const n = Number(e.target.value);
            if ((n === 0 || n) && n <= MAX_QUANTITY) requestChanged(n);
          }}
        />
        <ItemBtn
          onClick={() => requestIncrease()}
          disabled={
            product.stock != null && bill_detail.quantity >= product.stock
          }
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
      hover:text-black hover:shadow-md focus:outline-none
       focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-blue-600 focus-visible:ring-offset-2
      active:scale-95 disabled:opacity-25 disabled:active:scale-100 ${
        disabled && "opacity-25"
      } `}
      disabled={disabled}
      {...props}
    >
      {icon}
    </button>
  );
}
