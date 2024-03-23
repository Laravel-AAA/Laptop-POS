import { IBill, ILaravelPaginate, IProduct } from "@/types";
import ProductItem from "./Partials/ProductItem";
import { BillOperations } from "../..";
import Pagination from "@/Components/Pagination";
import { BsSearch } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export default function Items({
  className = "",
  paginateProducts,
  billOperations: {
    changeQty,
    increaseQty,
    decreaseQty,
    form: { data: bill },
  },
  productItemSize,
}: {
  paginateProducts: ILaravelPaginate<IProduct>;
  className?: string;
  billOperations: BillOperations;
  productItemSize:number;
}) {
  const products = paginateProducts.data;

  const { t } = useTranslation();
  return (
    <section className={className}>
      <div className="flex flex-wrap justify-center md:justify-start">
        {products.map((v, i) => (
          <ProductItem
            key={i}
            bill_detail={
              bill.bill_details.find((t) => t.product_id === v.id) ?? {
                product: v,
                product_id: v.id,
                quantity: 0,
              }
            }
            changeStockNumber={!( bill as IBill ).id}
            requestChanged={(qty) => changeQty(v, qty)}
            requestDecrease={() => decreaseQty(v)}
            requestIncrease={() => increaseQty(v)}
            size={productItemSize}
          />
        ))}
        {products.length === 0 && (
          <div className="my-20 mx-auto flex gap-4 opacity-50">
            <BsSearch className="mt-1" />
            <p>{ t( "No products found!" ) }</p>
          </div>
        )}
      </div>
      <Pagination
        style={{ paddingBottom: "0" }}
        className="my-4"
        paginateItems={paginateProducts}
      />
    </section>
  );
}
