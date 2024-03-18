import PrimaryMaterialBtn from "@/Components/Buttons/Material/PrimaryMaterialBtn";
import ID from "@/Utilities/ID";
import { IBill } from "@/types";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { BsPrinterFill } from "react-icons/bs";

export default function BillHeader({ bill }: { bill: IBill }) {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between">
      <h2 className="py-5 text-xl font-semibold leading-tight text-gray-500">
        <Link
          className="text-blue-600 hover:text-blue-400 hover:underline"
          href={route("bill.index")}
        >
          {t("Bills")}
        </Link>
        <span>
          {"  /  "}
          <ID id={bill.id} />
        </span>
      </h2>
      <div className="text-md my-auto">
        <PrimaryMaterialBtn onClick={() => print()} className="inline-flex h-9">
          <BsPrinterFill className="mr-2 text-base" />
          <span>{t("Print")}</span>
        </PrimaryMaterialBtn>
      </div>
    </div>
  );
}
