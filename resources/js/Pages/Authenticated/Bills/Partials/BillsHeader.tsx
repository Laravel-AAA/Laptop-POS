import Input from "@/Components/Inputs/Input";
import { IFilterBill, PagePropsWithFilter } from "@/types";
import { router, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { usePrevious } from "react-use";
import { TotalResult } from "../../Inventory/Partials/InventoryHeader";

export default function BillsHeader({ totalResult }: { totalResult: number }) {
  const { filter: filterProps } =
    usePage<PagePropsWithFilter<IFilterBill>>().props;

  const [filter, setFilter] = useState<IFilterBill>({
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
        <h2 className="mr-4 text-xl font-semibold leading-tight text-gray-800">
          Bills
        </h2>

        <Input
          label="Search by ID #..."
          type="search"
          inputMode="search"
          size="md"
          autoComplete="on"
          icon={<FaSearch className="mt-[6px]" />}
          value={filter.search}
          autoFocus
          className="mt-1 md:w-72"
          labelProps={{ className: "mt-1" }}
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
      {/* <div className="mt-3 flex items-center justify-end md:my-auto md:block"> */}
      {/* {!filter.search && prevFilter?.search === filter.search && (
          <TotalResult
            className="mt-1 md:mt-0"
            text="Total"
            number={totalResult}
          />
        )} */}
      {filter.search && prevFilter?.search === filter.search && (
        <TotalResult
          className="mt-1 block md:mt-0 md:hidden"
          text="Result"
          number={totalResult}
        />
      )}
      {/* </div> */}
    </div>
  );
}
