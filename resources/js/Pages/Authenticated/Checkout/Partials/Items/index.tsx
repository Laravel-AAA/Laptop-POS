import { IProduct } from "@/types";
import ProductItem from "./Partials/ProductItem";
import { BillOperations } from "../..";

export default function Items({
  products,
  className = "",
  billOperations: { changeQty, increaseQty, decreaseQty, bill },
  taxPercent,
}: {
  products: IProduct[];
  className?: string;
  billOperations: BillOperations;
  taxPercent: number;
}) {
  return (
    <section className={className}>
      <div className="flex flex-wrap justify-center md:justify-start">
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
            taxPercent={taxPercent}
          />
        ))}
      </div>
    </section>
  );
}
