import { FormEventHandler, useState } from "react";
import GuestFormLayout from "@/Layouts/GuestLayout/GuestFormLayout";
import { Head, router } from "@inertiajs/react";
import { ICreateBusiness, ICreateUser } from "@/types";
import BusinessForm from "./Partials/BusinessForm/BusinessForm";
import UserForm from "./Partials/UserForm";
import useBetterForm from "@/Utilities/useBetterForm";
import RegisterAction from "./Partials/RegisterAction";

export default function Register() {
  const params = new URLSearchParams(window.location.search);

  const userForm = useBetterForm<ICreateUser>({
    name: params.get("name") ?? "",
    email: params.get("email") ?? "",
    password: "",
    password_confirmation: "",
    role: "Owner",
  });

  const businessForm = useBetterForm<ICreateBusiness>({
    name: "",
    logo: null,
    logoFile: null,
    country: "",
    city: "",
    address: "",
    currency: "$",
    taxPercent: 0,
    phone: "",
    countryCallingCode: "",
    taxIdentificationNumber: null,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    router.post(
      route("register", {
        email: params.get("email") ?? "",
        expires: params.get("expires") ?? "",
        signature: params.get("signature") ?? "",
        plan: params.get("plan") ?? "",
        period: params.get("period") ?? "",
      }),
      {
        ...userForm.data,
        business: businessForm.data,
      } as any,
      {
        onStart: () => {
          businessForm.clearErrors();
          userForm.clearErrors();
          userForm.setProcessing(true);
          businessForm.setProcessing(true);
        },
        onFinish: () => {
          userForm.setProcessing(false);
          businessForm.setProcessing(false);
        },
        onError: (e) => {
          console.log(e);
          for (let k in e) {
            if (k.startsWith("business."))
              businessForm.setError(k.substring(9) as any, e[k]);
            else userForm.setError(k as any, e[k]);
          }
        },
      },
    );
  };

  return (
    <GuestFormLayout>
      <Head title="Register" />
      <main className="space-y-4">
        <header>
          <h1 className="mx-3 text-center text-3xl font-extrabold">Register</h1>
        </header>
        <section>
          <form className="space-y-4" onSubmit={submit}>
            <section>
              <p className="text-center text-lg text-blue-gray-500">
                Account Details
              </p>
              <UserForm form={userForm} />
            </section>
            <section>
              <p className="text-center text-lg text-blue-gray-500">
                Business Details
              </p>
              <BusinessForm form={businessForm} />
            </section>
            <footer>
              <RegisterAction processing={userForm.processing} />
            </footer>
          </form>
        </section>
      </main>
    </GuestFormLayout>
  );
}
