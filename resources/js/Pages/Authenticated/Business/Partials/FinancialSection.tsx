import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import Input from "@/Components/Inputs/Input";
import { Transition } from "@headlessui/react";
import useBetterForm from "@/Utilities/useBetterForm";
import { IBusiness } from "@/types";
import { FormEventHandler } from "react";
import TaxRateInput from "@/Pages/Authenticating/Register/Partials/BusinessForm/Partials/TaxRateInput";

export default function FinancialSection({
  business,
}: {
  business: IBusiness;
}) {
  const form = useBetterForm<{
    currency: IBusiness["currency"];
    taxPercent: IBusiness["taxPercent"];
    taxIdentificationNumber: IBusiness["taxIdentificationNumber"];
  }>({
    currency: business.currency,
    taxPercent: business.taxPercent,
    taxIdentificationNumber: business.taxIdentificationNumber,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    form.patch(route("business.update", business.id), {
      preserveScroll: true,
    });
  };
  return (
    <form
      onSubmit={submit}
      className="bg-white p-4 shadow sm:rounded-lg sm:p-8"
    >
      <section className="max-w-xl">
        <header>
          <h2 className="text-lg font-medium text-gray-900">
            Financial Details
          </h2>

          <p className="text-normal mt-1 text-gray-600">Currency and Tax</p>
        </header>
        <div className="mt-6 space-y-6">
          <Input
            id="currency"
            label="Currency Symbol"
            type="text"
            className="mt-1 block w-full"
            maxLength={5}
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
              leaveTo="opacity-0"
              leave="transition ease-in-out"
            >
              <p className="text-sm text-green-500">Saved</p>
            </Transition>
          </div>{" "}
        </div>
      </section>
    </form>
  );
}
