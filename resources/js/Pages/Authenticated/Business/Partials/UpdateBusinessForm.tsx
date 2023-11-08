import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import Input from "@/Components/Inputs/Input";
import { usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormEventHandler } from "react";
import { AuthPageProps, IBusiness } from "@/types";
import useBetterForm from "@/Utilities/useBetterForm";
import TaxRateInput from "@/Pages/Authenticating/Register/Partials/BusinessForm/Partials/TaxRateInput";
import CountryInput from "@/Pages/Authenticating/Register/Partials/BusinessForm/Partials/CountryInput";
import { PhoneInput } from "@/Pages/Authenticating/Register/Partials/BusinessForm/Partials/PhoneInput";

export default function UpdateBusinessForm() {
  const business = usePage<AuthPageProps>().props.auth.business;

  const form = useBetterForm<IBusiness>({
    ...business,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    form.patchDirty(route("business.update", business.id), {
      preserveScroll: true,
    });
  };

  return (
    <>
      <form onSubmit={submit} className="space-y-6">
        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
          <section className="max-w-xl">
            <header>
              <h2 className="text-lg font-medium text-gray-900">
                Business Details
              </h2>

              <p className="text-normal mt-1 text-gray-600">Name and Logo</p>
            </header>
            <div className="mt-6 space-y-6">
              <Input
                label="Business Name"
                type="text"
                value={form.data.name}
                errorMsg={form.errors.name}
                hideError={form.isDirty("name")}
                className="mt-1 block w-full"
                autoComplete="off"
                maxLength={50}
                onChange={(e) => form.setData("name", e.target.value)}
                required
                disabled={form.processing}
              />
              <p className="text-normal !mt-9 text-gray-600">
                Location and Contact
              </p>
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
        </div>

        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
          <section className="max-w-xl">
            <header>
              <h2 className="text-lg font-medium text-gray-900">
                Financial Details
              </h2>

              <p className="text-normal mt-1 text-gray-600">
                Currency and Tax.
              </p>
            </header>
            <div className="mt-6 space-y-6">
              <Input
                id="currency"
                label="Currency"
                type="text"
                className="mt-1 block w-full"
                value={form.data.currency}
                onChange={(e) => form.setData("currency", e.target.value)}
                disabled={form.processing}
                required
                autoComplete="off"
                errorMsg={form.errors.currency}
                hideError={form.isDirty("currency")}
                hint={
                  <span>
                    You can use any Unicode symbol ({" "}
                    <span className="font-semibold text-blue-gray-600">$</span>,{" "}
                    <span className="font-semibold text-blue-gray-600">£</span>,{" "}
                    <span className="font-semibold text-blue-gray-600">¥</span>,{" "}
                    <span className="font-semibold text-blue-gray-600">€</span>,
                    ...etc)
                  </span>
                }
              />
              <TaxRateInput
                disabled={form.processing}
                errorMsg={form.errors.taxPercent}
                hideError={form.isDirty("taxPercent")}
                onChange={(e) =>
                  form.setData(
                    "taxPercent",
                    Number((Number(e.target.value) / 100).toFixed(6)),
                  )
                }
                value={form.data.taxPercent * 100}
                currency={form.data.currency ?? "$"}
              />
              <Input
                type="text"
                label="Tax Identification Number"
                value={form.data.taxIdentificationNumber ?? ""}
                onChange={(e) =>
                  form.setData("taxIdentificationNumber", e.target.value)
                }
                disabled={form.processing}
                required={false}
                errorMsg={form.errors.taxIdentificationNumber}
                hideError={form.isDirty("taxIdentificationNumber")}
              />
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
        </div>
      </form>
    </>
  );
}
