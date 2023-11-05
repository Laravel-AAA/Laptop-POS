import Input from "@/Components/Inputs/Input";
import { ICreateBusiness } from "@/types";
import { PhoneInput } from "./Partials/PhoneInput";
import CountryInput from "./Partials/CountryInput";
import COUNTRIES, { Country } from "./Partials/COUNTRIES";
import { useEffect, useState } from "react";
import CurrencyInput from "./Partials/CurrencyInput";
import { UseBetterForm } from "@/Utilities/useBetterForm";

export default function BusinessForm({
  form,
  onNext,
}: {
  form: UseBetterForm<ICreateBusiness>;
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
        <Input
          label="Business Name"
          name="businessName"
          value={form.data.name}
          errorMsg={form.errors.name}
          hideError={form.isDirty('name')}
          className="mt-1 block w-full"
          autoComplete="off"
          autoFocus
          maxLength={50}
          onChange={(e) => form.setData('name', e.target.value)}
          required
        />
      </div>

      <div className="mt-4">
        <CountryInput form={form} />
      </div>

      <div className="mt-4">
        <Input
          label="City"
          errorMsg={form.errors.city}
          hideError={form.isDirty('city')}
          name="city"
          value={form.data.city}
          className="mt-1 block w-full"
          autoComplete="city"
          onChange={(e) => form.setData("city", e.target.value)}
          required
        />
      </div>

      <div className="mt-4">
        <Input
          label="Address"
          name="address"
          value={form.data.address}
          errorMsg={form.errors.address}
          hideError={form.isDirty('address')}
          className="mt-1 block w-full"
          autoComplete="address"
          onChange={(e) => form.setData("address", e.target.value)}
          required
        />
      </div>

      <div className="mt-4">
        <CurrencyInput form={form} chosenCountry={country} />
      </div>

      <div className="mt-4">
        <PhoneInput chosenCountry={country} form={form} />
      </div>

      {/* <div className="mt-4 flex items-center justify-end">
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
      </div> */}
    </>
  );
}
