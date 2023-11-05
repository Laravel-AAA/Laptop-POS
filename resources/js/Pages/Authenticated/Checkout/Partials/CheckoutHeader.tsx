import Input from "@/Components/Inputs/Input";
import { IFilterCheckout, IProduct, PagePropsWithFilter } from "@/types";
import { router, usePage } from "@inertiajs/react";
import { FormEvent, useEffect, useState } from "react";
import { FaBarcode, FaSearch } from "react-icons/fa";
import { usePrevious } from "react-use";
import { BillOperations } from "..";

export default function CheckoutHeader({
  billOperations: { increaseQty },
  products,
}: {
  billOperations: BillOperations;
  products: IProduct[];
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
    console.log(products);
    if (products.length === 1) {
      increaseQty(products[0]);
      setFilter((p) => ({ ...p, barcode: "" }));
    }
  }

  return (
    <header className="sticky top-0 z-10 my-0 bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="block justify-between py-3 sm:flex">
          <div className="flex w-full flex-col gap-3 md:flex-row">
            <Input
              id="search"
              label="Search"
              icon={<FaSearch />}
              type="search"
              name="search"
              autoComplete="on"
              className="w-full p-1 pl-9 md:w-72"
              placeholder="Search..."
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

            <form onSubmit={submitBarcode}>
              <label className="relative block">
                <span className="sr-only">Barcode</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>

                <Input
                  id="barcode"
                  label="Barcode"
                  icon={<FaBarcode />}
                  type="number"
                  name="barcode"
                  autoComplete="off"
                  inputMode="numeric"
                  autoFocus
                  className="remove-arrow w-full p-1 pl-9 md:w-44"
                  placeholder="Barcode..."
                  value={filter.barcode}
                  onChange={(v) => {
                    setFilter((p) => ({ ...p, barcode: v.target.value }));
                  }}
                  disabled={false}
                  required={false}
                  errorMsg=""
                  hideError={undefined}
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
