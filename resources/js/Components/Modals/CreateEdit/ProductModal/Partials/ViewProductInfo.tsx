import DefaultProductImg from "@/Pages/Authenticated/Inventory/Partials/DefaultProductImg";
import FromDate from "@/Utilities/FromDate";
import KeyValue from "@/Utilities/KeyValue";
import Num from "@/Utilities/Num";
import { AuthPageProps, IProduct } from "@/types";
import { usePage } from "@inertiajs/react";
import { IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

export default function ViewProductInfo({ product }: { product: IProduct }) {
  const taxPercent = usePage<AuthPageProps>().props.auth.business.taxPercent;

  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="space-y-3">
      <div className="rounded-md border border-blue-gray-100">
        {product.img ? (
          <img
            className="mx-auto h-40"
            src={
              product.img?.startsWith("http")
                ? product.img
                : "products-images/" + product.img
            }
            alt={"Image of product " + product.name}
          />
        ) : (
          <DefaultProductImg className="!my-1" />
        )}
      </div>
      <KeyValue k="Name" v={product.name} />

      <KeyValue
        k="Price (Tax included)"
        v={
          <Num
            amount={
              product.price === null ? null : product.price * (1 + taxPercent)
            }
            defaultNoAmount
            showCurrency
          />
        }
      />
      <KeyValue
        k="Price (Tax not included)"
        v={<Num amount={product.price} defaultNoAmount showCurrency />}
      />
      <KeyValue k="Stock" v={<Num amount={product.stock} defaultNoAmount />} />
      <KeyValue k="Barcode" v={product.barcode} />
      <KeyValue k="Description" v={product.description} />
      <div className="space-y-3 border-t" hidden={!showMore}>
        <KeyValue
          className="mt-3"
          k="Created by"
          v={product.created_by?.name ?? "N/A"}
        />
        <KeyValue
          title={new Date(product.created_at).toDateString()}
          className="mt-3"
          k="Created"
          v={<FromDate date={product.created_at} />}
        />
        <KeyValue
          title={new Date(product.updated_at).toDateString()}
          className="mt-3"
          k="Updated"
          v={<FromDate date={product.updated_at} />}
        />
      </div>
      <div className="flex justify-center">
        <IconButton
          title="More info"
          className="rounded-full"
          onClick={() => setShowMore((v) => !v)}
        >
          {/* Show {showMore ? "Less" : "More"}&nbsp; */}
          {showMore ? <FaChevronUp /> : <FaChevronDown />}
        </IconButton>
      </div>
    </div>
  );
}
