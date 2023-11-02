import React, { useEffect, useState } from "react";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import COUNTRIES, { Country } from "./COUNTRIES";
import { ICreateBusiness } from "@/types";
import { InertiaFormProps } from "@/types/global";

export function PhoneInput({
  form,
  chosenCountry: country,
}: {
  form: InertiaFormProps<ICreateBusiness>;
  chosenCountry: Country | null;
}) {
  const countries = COUNTRIES.filter((c) => c.countryCallingCode).sort(
    (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0),
  );
  const [callCodeCountry, setCallCodeCountry] = useState<Country>(
    country ?? countries[0],
  );

  useEffect(() => {
    if (!form.data.phone) setCallCodeCountry(country ?? countries[0]);
  }, [country]);

  return (
    <div className="relative flex w-full">
      <Menu placement="bottom-start">
        <MenuHandler>
          <Button
            size="lg"
            ripple={false}
            variant="text"
            color="blue-gray"
            className="flex h-11 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
          >
            <img
              src={callCodeCountry.flags.svg}
              alt={callCodeCountry.name}
              className="h-4 w-5 rounded object-cover"
            />
            {callCodeCountry.countryCallingCode}
          </Button>
        </MenuHandler>
        <MenuList className="max-h-[20rem] max-w-[18rem]">
          {countries.map((c, i) => {
            return (
              <MenuItem
                key={c.name}
                value={c.name}
                className="flex items-center gap-2"
                onClick={() => setCallCodeCountry(countries[i])}
              >
                <img
                  src={c.flags.svg}
                  alt={c.name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {c.name} <span className="ml-auto">{c.countryCallingCode}</span>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <Input
        type="tel"
        size="lg"
        placeholder="Mobile Number"
        className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
        crossOrigin={undefined}
        value={form.data.phone}
        onChange={(v) => form.setData("phone", v.target.value)}
      />
    </div>
  );
}
