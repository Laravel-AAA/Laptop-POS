import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import Input from "@/Components/Inputs/Input";
import { usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormEventHandler } from "react";
import { AuthPageProps, IBusiness } from "@/types";
import useBetterForm from "@/Utilities/useBetterForm";
import Num from "@/Utilities/Num";
import TaxRateInput from "@/Pages/Authenticating/Register/Partials/BusinessForm/Partials/TaxRateInput";

export default function UpdateBusinessInformation({
  className = "",
}: {
  className?: string;
}) {
  const business = usePage<AuthPageProps>().props.auth.business;

  const form = useBetterForm<IBusiness>({
    ...business,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    form.patch(route("business.update"));
  };

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">
          Business Information
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          Update your business's information.
        </p>
      </header>

      <form onSubmit={submit} className="mt-6 space-y-6">
        <div>
          <TaxRateInput
            disabled={form.processing}
            errorMsg={form.errors.taxPercent}
            hideError={form.isDirty("taxPercent")}
            onChange={(e) =>
              form.setData(
                "taxPercent",
                Number((Number(e.target.value) / 100).toFixed(6)), //0.00001
              )
            }
            value={form.data.taxPercent * 100}
            currency={form.data.currency ?? "$"}
          />{" "}
        </div>

        <div>
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
        </div>

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
            <p className="text-sm text-green-500">Saved.</p>
          </Transition>
        </div>
      </form>
    </section>
  );
}
