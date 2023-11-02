import { Select, Option } from "@material-tailwind/react";
import React from "react";
import COUNTRIES from "./COUNTRIES";
import { InertiaFormProps } from "@/types/global";
import { ICreateBusiness } from "@/types";

export default function CountryInput({
  form,
}: {
  form: InertiaFormProps<ICreateBusiness>;
}) {
  const countries = COUNTRIES.filter(
    (c) => c.currencies?.[0]?.name && c.currencies?.[0]?.symbol,
  );
  return (
    <Select
      label="Country"
      size="lg"
      className="text-md"
      color="teal"
      value={form.data.country}
      onChange={(v) => form.setData("country", v)}
      selected={(element) =>
        element &&
        React.cloneElement(element, {
          disabled: true,
          className:
            "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
        })
      }
    >
      {countries
        .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
        .map((c, i) => (
          <Option key={i} value={c.name} className="flex items-center gap-2">
            <img
              src={c.flags.svg}
              alt={c.emoji}
              className="h-5 w-7 rounded object-cover"
            />
            {c.name}
          </Option>
        ))}
    </Select>
  );
}
