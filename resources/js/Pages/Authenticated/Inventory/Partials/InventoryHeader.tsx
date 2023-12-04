import PrimaryMaterialBtn from "@/Components/Buttons/Material/PrimaryMaterialBtn";
import { Option } from "@material-tailwind/react";
import Input from "@/Components/Inputs/Input";
import SelectInput from "@/Components/Inputs/SelectInput";
import { IFilterProduct, PagePropsWithFilter } from "@/types";
import { router, usePage } from "@inertiajs/react";
import React from "react";
import { useEffect, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { usePrevious } from "react-use";

const OrderByInventoryOptions = {
  name: "Name (A-Z)",
  "name-desc": "Name (Z-A)",
  created_at: "Created At (Newest First)",
  "created_at-desc": "Created At (Oldest First)",
  updated_at: "Updated At (Newest First)",
  "updated_at-desc": "Updated At (Oldest First)",
  "stock-highest": "Stock (Highest First)",
  "stock-lowest": "Stock (Lowest First)",
};

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
    stock: filterProps.stock ?? null,
    orderBy: filterProps.orderBy ?? "created_at",
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
      console.log(filter);
      return () => router.cancel();
    }
  }, [filter]);

  return (
    <div className="block justify-between py-2 md:flex">
      <div className="flex items-center gap-3">
        <h2 className="mb-1 mr-4 text-xl font-semibold leading-tight text-gray-800">
          {filter.stock === "out" ? (
            <>
              <span className="text-danger-600">Out of Stock</span> Products
            </>
          ) : (
            "Inventory"
          )}
        </h2>
        <Input
          id="search"
          label="Search for products..."
          type="search"
          inputMode="search"
          name="search"
          size="md"
          autoComplete="on"
          icon={<FaSearch className="mt-[6px]" />}
          value={filter.search}
          autoFocus
          className="mt-1 md:w-72 "
          labelProps={{ className: "mt-1" }}
          onChange={(v) => setFilter((p) => ({ ...p, search: v.target.value }))}
          errorMsg={undefined}
          hideError={undefined}
          required={false}
          disabled={false}
        />
        {filter.search && prevFilter?.search === filter.search && (
          <TotalResult
            className=""
            text="Result"
            number={totalResult}
          />
        )}
      </div>
      <div className="flex flex-col items-center justify-end gap-6 md:my-auto md:flex-row">
        {!filter.search && (
          <TotalResult
            className="!mx-0 md:mt-0 mt-4"
            text="Total"
            number={totalResult}
          />
        )}
        <SelectInput
          label="Order By"
          size="md"
          className="!w-56"
          labelProps={{ className: "!w-56" }}
          containerProps={{ className: "!w-56" }}
          value={filter.orderBy}
          errorMsg={undefined}
          hideError={undefined}
          onChange={(v) =>
            setFilter((p) => ({
              ...p,
              orderBy: (v as IFilterProduct["orderBy"]) ?? "created_at",
            }))
          }
          required={false}
          selected={(element) =>
            element &&
            React.cloneElement(element, {
              disabled: true,
              className:
                "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
            })
          }
        >
          {Object.entries(OrderByInventoryOptions).map(([k, v]) => (
            <Option
              key={k}
              value={k}
              disabled={filter.stock === 'out' && k.includes('stock')}
              className="flex items-center"
            >
              {v}
            </Option>
          ))}
        </SelectInput>
        {filter.stock !== "out" && (
          <PrimaryMaterialBtn
            className="inline-flex  h-9"
            onClick={() => requestCreateProduct()}
          >
            <FaPlus className="mr-2" />
            <span>Add New Product</span>
          </PrimaryMaterialBtn>
        )}
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
