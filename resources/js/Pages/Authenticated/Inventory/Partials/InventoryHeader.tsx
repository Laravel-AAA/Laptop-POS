import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import TextInput from "@/Components/Inputs/TextInput";
import { IFilterProduct } from "@/types";
import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { usePrevious } from "react-use";

export default function InventoryHeader({
  totalResult,
  requestCreateProduct,
}: {
  totalResult: number;
  requestCreateProduct: () => void;
}) {
  const { filter: filterProps } = usePage().props as unknown as {
    filter: IFilterProduct;
  };

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

      console.log(filter);
      router.get(route(route().current() ?? ""), query as any, {
        replace: true,
        preserveState: true,
        preserveScroll: true,
      });
    }
  }, [filter]);

  return (
    <div className="block justify-between py-4 md:flex">
      <div className="flex items-center gap-3">
        <h2 className="mr-6 text-xl font-semibold leading-tight text-gray-800">
          Inventory
        </h2>
        <label className="relative block flex-grow">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <BsSearch />
          </span>

          <TextInput
            id="search"
            type="search"
            inputMode="search"
            name="search"
            autoComplete="on"
            value={filter.search}
            isFocused={true}
            className="w-full p-1 pl-9 md:w-72 "
            placeholder="Search for products..."
            onChange={(v) =>
              setFilter((p) => ({ ...p, search: v.target.value }))
            }
          />
        </label>
        {filter.search && prevFilter?.search === filter.search && (
          <TotalResult
            className="hidden md:block"
            text="Result"
            number={totalResult}
          />
        )}
      </div>
      <div className="mt-3 flex justify-end md:mt-0 md:block">
        {!filter.search && prevFilter?.search === filter.search && (
          <TotalResult className="md:mt-0 mt-1" text="Total" number={totalResult} />
        )}
        {filter.search && prevFilter?.search === filter.search && (
          <TotalResult
            className="block md:hidden md:mt-0 mt-1"
            text="Result"
            number={totalResult}
          />
        )}
        <SecondaryButton
          className="inline-flex pl-2 pr-2"
          onClick={() => requestCreateProduct()}
        >
          <FaPlus className="mr-2" />
          <span>Add New Product</span>
        </SecondaryButton>
      </div>
    </div>
  );
}

//Ex: `Total: 23`, `Result: 3`...
function TotalResult({
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
