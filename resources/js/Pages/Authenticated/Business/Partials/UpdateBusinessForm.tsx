import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import TextInput from "@/Components/Inputs/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormEventHandler } from "react";
import { AuthPageProps, IBusiness } from "@/types";

export default function UpdateBusinessInformation({
  className = "",
}: {
  className?: string;
}) {
  const business = usePage<AuthPageProps>().props.business;

  const form = useForm<IBusiness>({
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
          <InputLabel htmlFor="taxPercent" value="Tax percent" />

          <TextInput
            id="taxPercent"
            className="mt-1 block w-full"
            type="number"
            value={form.data.taxPercent * 100}
            onChange={(e) =>
              form.setData("taxPercent", Number(e.target.value) / 100)
            }
            required
            isFocused
            autoComplete="off"
          />

          <InputError className="mt-2" message={form.errors.taxPercent} />
        </div>

        <div>
          <InputLabel htmlFor="currency" value="Currency" />

          <TextInput
            id="currency"
            type="text"
            className="mt-1 block w-full"
            value={form.data.currency}
            onChange={(e) => form.setData("currency", e.target.value)}
            required
            autoComplete="off"
          />

          <InputError className="mt-2" message={form.errors.currency} />
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
