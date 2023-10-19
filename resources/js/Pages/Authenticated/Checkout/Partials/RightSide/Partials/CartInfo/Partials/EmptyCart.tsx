import { FaCartShopping } from "react-icons/fa6";

export default function EmptyCart({ length }: { length: number }) {
  return (
    length === 0 && (
      <div className="flex justify-center gap-4 py-6 opacity-50">
        <FaCartShopping className="mt-1" />
        <p>Empty cart!</p>
      </div>
    )
  );
}
