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
import { UseBetterForm } from "@/Utilities/useBetterForm";

export function PhoneInput<T extends ICreateBusiness>({
  form,
}: {
  form: UseBetterForm<T>;
}) {
  const countries = COUNTRIES.filter((c) => c.countryCallingCode).sort(
    (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0),
  );

  const country = form.data.countryCallingCode
    ? countries.find(
        (c) => c.countryCallingCode === form.data.countryCallingCode,
      ) ?? countries[0]
    : countries[0];

  return (
    <>
      <div className="relative flex w-full">
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button
              size="lg"
              ripple={false}
              disabled={form.processing}
              variant="text"
              color="blue-gray"
              className="flex h-11 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
            >
              <img
                src={country.flags.svg}
                alt={country.name}
                className="h-4 w-5 rounded object-cover"
              />
              {country.countryCallingCode}
            </Button>
          </MenuHandler>
          <MenuList className="max-h-[20rem] max-w-[18rem]">
            {countries.map((c, i) => {
              return (
                <MenuItem
                  key={c.name}
                  value={c.name}
                  className="flex items-center gap-2"
                  onClick={() =>
                    form.setData("countryCallingCode", c.countryCallingCode)
                  }
                >
                  <img
                    src={c.flags.svg}
                    alt={c.name}
                    className="h-5 w-7 rounded object-cover"
                  />
                  {c.name}{" "}
                  <span className="ml-auto">{c.countryCallingCode}</span>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        <Input
          label="Phone Number"
          color="teal"
          size="lg"
          type="number"
          className="remove-arrow w-full rounded-l-none focus:rounded-l-none focus:ring-0"
          value={form.data.phone}
          error={!!form.errors.phone && !form.isDirty("phone")}
          onChange={(v) => form.setData("phone", v.target.value)}
          disabled={form.processing}
          required={!form.processing}
          crossOrigin={undefined}
        />
      </div>
      {(form.errors.phone || form.errors.countryCallingCode) && (
        <p className="ml-2 mt-2 text-xs text-danger-600 ">
          {form.errors.phone || form.errors.countryCallingCode}
        </p>
      )}
    </>
  );
}
