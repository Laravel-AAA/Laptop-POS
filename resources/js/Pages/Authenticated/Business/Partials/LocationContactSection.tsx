import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import Input from "@/Components/Inputs/Input";
import CountryInput from "@/Pages/Authenticating/Register/Partials/BusinessForm/Partials/CountryInput";
import { PhoneInput } from "@/Pages/Authenticating/Register/Partials/BusinessForm/Partials/PhoneInput";
import useBetterForm from "@/Utilities/useBetterForm";
import { IBusiness } from "@/types";
import { Transition } from "@headlessui/react";
import { FormEventHandler } from "react";

export default function LocationContactSection({
  business,
}: {
  business: IBusiness;
}) {
  const form = useBetterForm<{
    country: IBusiness["country"];
    city: IBusiness["city"];
    address: IBusiness["address"];
    phone: IBusiness["phone"];
    countryCallingCode: IBusiness["countryCallingCode"];
  }>({
    country: business.country,
    city: business.city,
    address: business.address,
    phone: business.phone,
    countryCallingCode: business.countryCallingCode,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    form.patch(route("business.update", business.id), {
      preserveScroll: true,
    });
  };
  return (
    <form onSubmit={submit} className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
      <section className="max-w-xl">
        <header>
          <h2 className="text-lg font-medium text-gray-900">
            Location & Contact
          </h2>

          {/* <p className="text-normal mt-1 text-gray-600">Name and Logo</p> */}
        </header>
        <div className="mt-6 space-y-6">
          <CountryInput form={form} />
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
          <PhoneInput form={form} />
          <div className="flex items-center gap-4">
            <PrimaryButton type="submit" disabled={form.processing}>
              Save
            </PrimaryButton>

            <Transition
              show={form.recentlySuccessful}
              enter="transition ease-in-out"
              enterFrom="opacity-0"
              leave="transition ease-in-out"
              leaveTo="opacity-0"
            >
              <p className="text-sm text-green-500">Saved</p>
            </Transition>
          </div>{" "}
        </div>
      </section>
    </form>
  );
}
