import { useTranslation } from "react-i18next";
import { FaCartShopping } from "react-icons/fa6";

export default function EmptyCart({ length }: { length: number }) {

  const { t } = useTranslation();
  return (
    length === 0 && (
      <div className="flex justify-center gap-4 py-6 opacity-50">
        <FaCartShopping className="mt-1" />
        <p>{ t( "Empty cart!" ) }</p>
      </div>
    )
  );
}
