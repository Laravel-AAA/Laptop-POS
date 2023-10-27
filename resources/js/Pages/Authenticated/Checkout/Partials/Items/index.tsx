import { ILaravelPaginate, IProduct } from "@/types";
import ProductItem from "./Partials/ProductItem";
import { BillOperations } from "../..";
import Pagination from "@/Components/Pagination";
import { BsSearch } from "react-icons/bs";
import Footer from "@/Layouts/GuestLayout/Partials/Footer";

export default function Items({
  className = "",
  paginateProducts,
  billOperations: {
    changeQty,
    increaseQty,
    decreaseQty,
    form: { data: bill },
  },
}: {
  paginateProducts: ILaravelPaginate<IProduct>;
  className?: string;
  billOperations: BillOperations;
}) {
  const products = paginateProducts.data;
  return (
    <section className={className}>
      <div className="flex min-h-screen flex-wrap justify-center md:justify-start">
        {products.map((v, i) => (
          <ProductItem
            key={i}
            transaction={
              bill.transactions.find((t) => t.product_id === v.id) ?? {
                product: v,
                product_id: v.id,
                quantity: 0,
              }
            }
            requestChanged={(qty) => changeQty(v, qty)}
            requestDecrease={() => decreaseQty(v)}
            requestIncrease={() => increaseQty(v)}
          />
        ))}
        {products.length === 0 && (
          <div className="my-20 mx-auto flex gap-4 opacity-50">
            <BsSearch className="mt-1" />
            <p>No products found!</p>
          </div>
        )}
      </div>
      <Pagination
        style={{ paddingBottom: "0" }}
        className="mt-4"
        paginateItems={paginateProducts}
      />
      <Footer/>
    </section>
  );
}
