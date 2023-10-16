import { ICreateBill, IProduct } from "@/types";
import ProductItem from "./Partials/ProductItem";
import { BillOperation } from "../..";

export default function Items({
  products,
  className = "",
  billOperation: { changeQty, increaseQty, decreaseQty, bill },
}: {
  products: IProduct[];
  className?: string;
  billOperation: BillOperation;
}) {
  return (
    <section className={className}>
      <div className="flex flex-wrap justify-center md:justify-start">
        {products.map((v, i) => (
          <ProductItem
            transaction={
              bill.transactions.find((t) => t.product_id == v.id) ?? {
                product: v,
                product_id: v.id,
                quantity: 0,
              }
            }
            requestChanged={(qty) => changeQty(v.id, qty)}
            requestDecrease={() => decreaseQty(v.id)}
            requestIncrease={() => increaseQty(v.id)}
            key={i}
            product={v}
          />
        ))}
      </div>
    </section>
  );
}
