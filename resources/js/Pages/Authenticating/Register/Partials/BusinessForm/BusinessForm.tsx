import Input from "@/Components/Inputs/Input";
import { ICreateBusiness } from "@/types";
import { PhoneInput } from "./Partials/PhoneInput";
import CountryInput from "./Partials/CountryInput";
import COUNTRIES, { Country } from "./Partials/COUNTRIES";
import { useEffect, useState } from "react";
import CurrencyInput from "./Partials/CurrencyInput";
import { UseBetterForm } from "@/Utilities/useBetterForm";
import TaxRateInput from "./Partials/TaxRateInput";

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
      if (c.tax) form.setData("taxPercent", c.tax);
    }
  }, [form.data.country]);

  return (
    <>
      <div>
        <Input
          label="Business Name"
          type="text"
          value={form.data.name}
          errorMsg={form.errors.name}
          hideError={form.isDirty("name")}
          className="mt-1 block w-full"
          autoComplete="off"
          autoFocus
          maxLength={50}
          onChange={(e) => form.setData("name", e.target.value)}
          required
          disabled={form.processing}
        />
      </div>

      <div className="mt-4">
        <CountryInput form={form} />
      </div>

      <div className="mt-4">
        <Input
          label="City"
          type="text"
          errorMsg={form.errors.city}
          hideError={form.isDirty("city")}
          value={form.data.city}
          className="mt-1 block w-full"
          autoComplete="city"
          onChange={(e) => form.setData("city", e.target.value)}
          required
          disabled={form.processing}
        />
      </div>

      <div className="mt-4">
        <Input
          label="Address"
          type="text"
          value={form.data.address}
          errorMsg={form.errors.address}
          hideError={form.isDirty("address")}
          className="mt-1 block w-full"
          autoComplete="address"
          onChange={(e) => form.setData("address", e.target.value)}
          required
          disabled={form.processing}
        />
      </div>

      <div className="mt-4">
        <CurrencyInput form={form} chosenCountry={country} />
      </div>

      <div className="mt-4">
        <TaxRateInput
          disabled={form.processing}
          errorMsg={form.errors.taxPercent}
          hideError={form.isDirty("taxPercent")}
          onChange={(e) =>
            form.setData("taxPercent", Number(e.target.value) / 100)
          }
          value={form.data.taxPercent * 100}
          currency={form.data.currency ?? "$"}
        />
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
