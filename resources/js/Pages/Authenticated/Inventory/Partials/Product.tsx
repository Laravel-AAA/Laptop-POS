import { AuthPageProps, IProduct } from "@/types";
import ProductOptions from "./ProductOptions";
import Num from "@/Utilities/Num";
import { usePage } from "@inertiajs/react";
import DefaultProductImg from "@/Pages/Authenticated/Inventory/Partials/DefaultProductImg";
import { useTranslation } from "react-i18next";

type PropsProduct = {
  product: IProduct;
  requestEdit: () => void;
  requestShow: () => void;
  requestChangeStock: () => void;
};

export default function Product({
  product,
  requestEdit,
  requestShow,
  requestChangeStock,
}: PropsProduct) {

  const taxPercent = usePage<AuthPageProps>().props.auth.business.taxPercent;

  const { t } = useTranslation();
  return (
    <div
      role="button"
      onClick={(e) => {
        e.stopPropagation();
        requestShow();
      }}
      className="div-style group relative m-4 flex min-w-[200px] min-h-[212px] cursor-pointer flex-col overflow-hidden rounded-md bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-52"
    >
      <ProductOptions
        key="inventoryProductOptions"
        product={product}
        requestEdit={requestEdit}
        requestShow={requestShow}
        requestChangeStock={requestChangeStock}
      />

      <div className="w-full">
        {product.img ? (
          <img
            src={
              product.img.startsWith("http")
                ? product.img
                : "/products-images/" + product.img
            }
            alt={product.name + " image."}
          />
        ) : (
          <DefaultProductImg />
        )}
      </div>
      <div className="flex w-full flex-grow flex-col px-4  py-4 ">
        <h3 className="flex-grow text-lg font-semibold text-gray-600">
          {product.name}
        </h3>

        <div className="mt-2 flex justify-between gap-2">
          <p
            title={
              product.price === null ? "" : "$" + product.price +" "+t(  "without tax" )
            }
            className="text-lg font-thin text-primary-700"
          >
            <Num
              showCurrency
              className="font-semibold"
              amount={
                product.price === null ? null : product.price * (1 + taxPercent)
              }
              defaultNoAmount
            />
          </p>
          <div className="flex flex-col justify-center">
            {product.stock === 0 ? (
                <span
                title={ t( "Out of Stock"  )}
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 1,
                  }}
                  className="overflow-hidden text- font-thin text-red-500  "
                >
                  { t( "Out of Stock" ) }
                </span>
            ) : (
              <Num
                className="font-normal  text-secondary-600"
                amount={product.stock}
                defaultNoAmount
                prefix={ t( "Stock"  )}
                prefixProps={{ className: "text-gray-500 font-thin" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
