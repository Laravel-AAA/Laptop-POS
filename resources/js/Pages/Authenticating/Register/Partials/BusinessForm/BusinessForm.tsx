import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import { ICreateBusiness } from "@/types";
import { InertiaFormProps } from "@/types/global";
import { PhoneInput } from "./Partials/PhoneInput";
import CountryInput from "./Partials/CountryInput";
import COUNTRIES, { Country } from "./Partials/COUNTRIES";
import { useEffect, useState } from "react";
import CurrencyInput from "./Partials/CurrencyInput";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import { FaArrowRight } from "react-icons/fa6";

export default function BusinessForm({
  form,
  onNext,
}: {
  form: InertiaFormProps<ICreateBusiness>;
  onNext: () => void;
}) {
  let initial: Country | null = null;
  if (form.data.country)
    initial = COUNTRIES.find((c) => c.name === form.data.country) ?? null;
  const [country, setCountry] = useState<Country | null>(initial);

  useEffect(() => {
    const c = COUNTRIES.find((c) => c.name === form.data.country);
    if (c) {
      setCountry(c);
    }
  }, [form.data.country]);

  return (
    <>
      <div>
        <InputLabel htmlFor="name" value="Business Name" />

        <TextInput
          id="businessName"
          name="businessName"
          value={form.data.name}
          className="mt-1 block w-full"
          autoComplete="off"
          isFocused={true}
          maxLength={50}
          onChange={(e) => form.setData("name", e.target.value)}
          required
        />

        <InputError message={form.errors.name} className="mt-2" />
      </div>

      {/* <div className="mt-4">
        <InputLabel htmlFor="logo" value="Business Logo" />

        <TextInput
          id="logo"
          name="logo"
          value={form.data.name}
          className="mt-1 block w-full"
          autoComplete="off"
          onChange={(e) => form.setData("name", e.target.value)}
          required
        />

        <InputError message={form.errors.name} className="mt-2" />
      </div> */}

      <div className="mt-4">
        <CountryInput form={form} />
        <InputError message={form.errors.country} className="mt-2" />
      </div>

      <div className="mt-4">
        <InputLabel htmlFor="city" value="city" />
        <TextInput
          id="city"
          name="city"
          value={form.data.city}
          className="mt-1 block w-full"
          autoComplete="city"
          onChange={(e) => form.setData("city", e.target.value)}
          required
        />
        <InputError message={form.errors.city} className="mt-2" />
      </div>

      <div className="mt-4">
        <InputLabel htmlFor="address" value="address" />
        <TextInput
          id="address"
          name="address"
          value={form.data.address}
          className="mt-1 block w-full"
          autoComplete="address"
          onChange={(e) => form.setData("address", e.target.value)}
          required
        />
        <InputError message={form.errors.address} className="mt-2" />
      </div>

      <div className="mt-4">
        <CurrencyInput form={form} chosenCountry={country} />
        <InputError message={form.errors.country} className="mt-2" />
      </div>

      <div className="mt-4">
        <PhoneInput chosenCountry={country} form={form} />
        <InputError message={form.errors.country} className="mt-2" />
      </div>

      <div className="mt-4 flex items-center justify-end">
        <Link
          href={route("login")}
          className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Already registered?
        </Link>

        <PrimaryButton
          type="button"
          className="ml-4 flex !border-primary bg-white !text-primary hover:bg-primary hover:bg-opacity-10"
          disabled={form.processing}
          onClick={() => onNext()}
        >
          <span>Next&nbsp;</span>
          <FaArrowRight />
        </PrimaryButton>
      </div>
    </>
  );
}
