import Input from "@/Components/Inputs/Input";
import BusinessLogoInput from "./BusinessLogoInput";
import { Transition } from "@headlessui/react";
import useBetterForm from "@/Utilities/useBetterForm";
import { IBusiness } from "@/types";
import { FormEventHandler } from "react";
import PrimaryMaterialBtn from "@/Components/Buttons/Material/PrimaryMaterialBtn";

export default function IdentitySection({ business }: { business: IBusiness }) {
  const form = useBetterForm<{
    name: IBusiness["name"];
    logo: IBusiness["logo"];
    logoFile: IBusiness["logoFile"];
  }>({
    name: business.name,
    logo: business.logo,
    logoFile: business.logoFile,
    ['_method' as any]: "patch", // this is because FormData is available only in post method. Web garbage specification...
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log("data", form.data);
    form.post(route("business.update", business.id), {
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
            Business Identity
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

          <BusinessLogoInput form={form} />

          <div className="flex items-center gap-4">
            <PrimaryMaterialBtn type="submit" disabled={form.processing}>
              Save
            </PrimaryMaterialBtn>

            <Transition
              show={form.recentlySuccessful}
              enter="transition ease-in-out"
              enterFrom="opacity-0"
              leave="transition ease-in-out"
              leaveTo="opacity-0"
            >
              <p className="text-sm text-green-500">Saved</p>
            </Transition>
          </div>
        </div>
      </section>
    </form>
  );
}
