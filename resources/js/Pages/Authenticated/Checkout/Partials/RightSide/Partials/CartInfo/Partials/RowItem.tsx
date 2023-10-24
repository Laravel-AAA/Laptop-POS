import { BillOperations } from "@/Pages/Authenticated/Checkout";
import Num from "@/Utilities/Num";
import { ICreateTransaction, PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { BsDash, BsPlusLg } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

export default function RowItem({
  transaction,
  billOperations: { increaseQty, decreaseQty, removeTransaction },
}: {
  transaction: ICreateTransaction;
  billOperations: BillOperations;
}) {
  const taxPercent = usePage<PageProps>().props.business.taxPercent;

  return (
    <tr className="group h-10 max-h-10 border-y">
      <td className="flex h-10 w-14 items-center justify-center">
        {transaction.product.img && (
          <img
            className="max-w-14 max-h-10 group-hover:hidden"
            src={
              transaction.product.img.startsWith("http")
                ? transaction.product.img
                : "products-images/" + transaction.product.img
            }
            alt={"Image of Product " + transaction.product.name}
          />
        )}
        <RemoveBtn
          className="max-w-14 hidden h-10 max-h-14 text-right group-hover:block "
          onClick={() => removeTransaction(transaction.product_id)}
        />
      </td>
      <td title={transaction.product.name}>
        <span
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
          }}
          className="mx-1 inline-block overflow-hidden"
        >
          {transaction.product.name}
        </span>
      </td>
      <td className="h-10">
        <Quantity
          decreaseQty={decreaseQty}
          increaseQty={increaseQty}
          transaction={transaction}
        />
      </td>
      <td title={transaction.product.price ? "Tax included" : ""}>
        {/* `ch` is a unit to measure the character `0` width relative to font family and size (e.g., `6ch` means width of `000000` (six zeros) ) */}
        <span className="mx-1 inline-block w-[6ch]">
          {transaction.product.price == null ? (
            <span className="text-danger-600">N/A</span>
          ) : (
            <Num
              currency="$"
              className="font-semibold text-primary-700"
              amount={transaction.product.price * (1 + taxPercent)}
            />
          )}
        </span>
      </td>
    </tr>
  );
}

function Quantity({
  decreaseQty,
  increaseQty,
  transaction,
}: {
  decreaseQty: BillOperations["decreaseQty"];
  increaseQty: BillOperations["increaseQty"];
  transaction: ICreateTransaction;
}) {
  return (
    <div className="mx-1 flex h-10 w-24 justify-between">
      <IncDecQtyBtn
        className="rounded-s-md"
        title="Decrease quantity"
        onClick={() => decreaseQty(transaction.product)}
        icon={<BsDash className="m-auto" />}
      />
      <div className="flex grow border-x border-gray-800 border-opacity-10 bg-secondary-400">
        <Num
          className="grow self-center text-center"
          amount={transaction.quantity}
        />
      </div>
      <IncDecQtyBtn
        className="rounded-e-md"
        title={
          transaction.product.stock != null &&
          transaction.quantity >= transaction.product.stock
            ? "Stock is empty!"
            : "Increase quantity"
        }
        onClick={() => increaseQty(transaction.product)}
        disabled={
          transaction.product.stock != null &&
          transaction.quantity >= transaction.product.stock
        }
        icon={<BsPlusLg className="m-auto" />}
      />
    </div>
  );
}

function IncDecQtyBtn({
  icon,
  disabled,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { icon: ReactNode }) {
  return (
    <button
      type="button"
      className={`w-9 items-center border border-transparent
      bg-secondary-400  font-semibold text-gray-900 text-opacity-80
        transition duration-200
        ease-in-out hover:bg-secondary-300 hover:bg-opacity-90
      hover:text-black focus:outline-none
      active:scale-95 disabled:opacity-25 disabled:active:scale-100 ${className} ${
        disabled && "opacity-25"
      } `}
      disabled={disabled}
      {...props}
    >
      {icon}
    </button>
  );
}

function RemoveBtn({
  disabled,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      title="Remove item"
      type="button"
      className={`flex-inline w-full items-center rounded
      bg-danger-600 bg-opacity-80 text-white transition
      duration-200 ease-in-out  hover:bg-danger-700
      hover:bg-opacity-90 focus:outline-none
      active:scale-95 disabled:opacity-25 disabled:active:scale-100 ${className} ${
        disabled && "opacity-25"
      } `}
      disabled={disabled}
      {...props}
    >
      <FaTrash className="mx-auto shadow hover:shadow-md" />
    </button>
  );
}
