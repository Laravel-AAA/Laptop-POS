import PrimaryMaterialBtn from "@/Components/Buttons/Material/PrimaryMaterialBtn";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import Input from "@/Components/Inputs/Input";
import { IFilterProduct, PagePropsWithFilter } from "@/types";
import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { usePrevious } from "react-use";

export default function InventoryHeader({
  totalResult,
  requestCreateProduct,
}: {
  totalResult: number;
  requestCreateProduct: () => void;
}) {
  const { filter: filterProps } =
    usePage<PagePropsWithFilter<IFilterProduct>>().props;

  const [filter, setFilter] = useState<IFilterProduct>({
    search: filterProps.search ?? "",
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

  return (
    <div className="block justify-between py-2 md:flex">
      <div className="flex items-center gap-3">
        <h2 className="mr-6 text-xl font-semibold leading-tight text-gray-800">
          Inventory
        </h2>
        <Input
          id="search"
          label="Search for products..."
          type="search"
          inputMode="search"
          name="search"
          size="md"
          autoComplete="on"
          icon={<FaSearch />}
          value={filter.search}
          autoFocus
          className=" md:w-72 "
          onChange={(v) => setFilter((p) => ({ ...p, search: v.target.value }))}
          errorMsg={undefined}
          hideError={undefined}
          required={false}
          disabled={false}
        />
        {filter.search && prevFilter?.search === filter.search && (
          <TotalResult
            className="hidden md:block"
            text="Result"
            number={totalResult}
          />
        )}
      </div>
      <div className="mt-3 flex items-center justify-end md:my-auto md:block">
        {!filter.search  && (
          <TotalResult
            className="mt-1 md:mt-0"
            text="Total"
            number={totalResult}
          />
        )}
        {filter.search && prevFilter?.search === filter.search && (
          <TotalResult
            className="mt-1 block md:mt-0 md:hidden"
            text="Result"
            number={totalResult}
          />
        )}
        <PrimaryMaterialBtn
          className="inline-flex pl-2 pr-2"
          onClick={() => requestCreateProduct()}
        >
          <FaPlus className="mr-2" />
          <span>Add New Product</span>
        </PrimaryMaterialBtn>
      </div>
    </div>
  );
}

//Ex: `Total: 23`, `Result: 3`...
export function TotalResult({
  text,
  number,
  className = "",
}: {
  text: "Total" | "Result";
  number: number;
  className?: string;
}) {
  return (
    <p className={"m-0 mr-3 inline p-0 text-center text-gray-600 " + className}>
      {text}:&nbsp;
      <span className="text-gray-900">{number}</span>
    </p>
  );
}
