import Input from "@/Components/Inputs/Input";
import { IFilterCheckout, IProduct, PagePropsWithFilter } from "@/types";
import { router, usePage } from "@inertiajs/react";
import { FormEvent, useEffect, useState } from "react";
import { FaBarcode, FaSearch } from "react-icons/fa";
import { usePrevious } from "react-use";
import { BillOperations } from "..";
import OptionsMenu from "./OptionsMenu";

export default function CheckoutHeader({
  billOperations: { increaseQty },
  products,
  productItemSize,
  setProductItemSize,
}: {
  billOperations: BillOperations;
  products: IProduct[];
  productItemSize: number;
  setProductItemSize: (px: number) => any;
}) {
  const { filter: filterProps } =
    usePage<PagePropsWithFilter<IFilterCheckout>>().props;

  const [filter, setFilter] = useState<IFilterCheckout>({
    search: filterProps.search ?? "",
    barcode: filterProps.barcode ?? "",
  });

  const prevFilter = usePrevious(filter);

  useEffect(() => {
    if (prevFilter) {
      //prevent empty query such as `/url?search=` so it will be `/url`
      const truthyKeys = Object.keys(filter).filter((k) => filter[k]);
      let query = {};
      for (const k of truthyKeys) query[k] = filter[k];

      router.get(route(route().current() ?? ""), query as any, {
        replace: true,
        preserveState: true,
        preserveScroll: true,
      });
      return () => router.cancel();
    }
  }, [filter]);

  function submitBarcode(e: FormEvent) {
    e.preventDefault();
    if (products.length === 1) {
      increaseQty(products[0]);
      setFilter((p) => ({ ...p, barcode: "" }));
    }
  }

  return (
    <header className="sticky top-0 z-10 my-0 bg-white shadow">
      <div className="flex w-full flex-col gap-4 p-2 md:flex-row">
        <div>
          <Input
            id="search"
            label="Search..."
            icon={<FaSearch />}
            type="search"
            name="search"
            size="md"
            autoComplete="on"
            className="w-full md:w-72"
            disabled={false}
            inputMode="search"
            value={filter.search}
            onChange={(v) => {
              setFilter((p) => ({ ...p, search: v.target.value }));
            }}
            required={false}
            errorMsg={undefined}
            hideError={undefined}
          />
        </div>
        {/* <form> to allow Submit behavior such as Submit when Enter pressed */}
        <div className="flex grow justify-between gap-4">
          <form className="" onSubmit={submitBarcode}>
            <Input
              id="barcode"
              label="Barcode"
              icon={<FaBarcode />}
              type="number"
              name="barcode"
              size="md"
              inputMode="numeric"
              autoFocus
              className="remove-arrow w-full md:w-52 "
              value={filter.barcode}
              onChange={(v) => {
                setFilter((p) => ({ ...p, barcode: v.target.value }));
                // setTimeout(() => {
                //   if (products.length === 1 && filter.barcode.length > 3) {
                //     increaseQty(products[0]);
                //     setFilter((p) => ({ ...p, barcode: "" }));
                //   }
                // }, 100);
              }}
              errorMsg=""
              hideError={undefined}
              disabled={false}
              required={false}
            />
          </form>
          <OptionsMenu
            productItemSize={productItemSize}
            setProductItemSize={setProductItemSize}
          />
        </div>
      </div>
    </header>
  );
}
