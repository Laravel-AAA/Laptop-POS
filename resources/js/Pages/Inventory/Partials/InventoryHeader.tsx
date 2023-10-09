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
    <div className="block justify-between py-5 sm:flex">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold mr-6 leading-tight text-gray-800">
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
            name="search"
            autoComplete="off"
            value={filter.search}
            isFocused={true}
            className="w-full p-1 pl-9 sm:w-72 "
            placeholder="Search for products..."
            onChange={(v) =>
              setFilter((p) => ({ ...p, search: v.target.value }))
            }
          />
        </label>
        {filter.search && prevFilter?.search === filter.search && (
          <TotalResult text="Result" number={totalResult} />
        )}
      </div>
      <div className="mt-3 self-center sm:mt-0">
        {!filter.search && prevFilter?.search === filter.search && (
          <TotalResult text="Total" number={totalResult} />
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
}: {
  text: "Total" | "Result";
  number: number;
}) {
  return (
    <p className="m-0 mr-3 inline p-0 text-center text-gray-600">
      {text}:&nbsp;
      <span className="text-gray-900">{number}</span>
    </p>
  );
}
