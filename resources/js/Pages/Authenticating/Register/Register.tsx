import { FormEventHandler } from "react";
import GuestFormLayout from "@/Layouts/GuestLayout/GuestFormLayout";
import { Head, router } from "@inertiajs/react";
import { ICreateBusiness, ICreateUser } from "@/types";
import BusinessForm from "./Partials/BusinessForm/BusinessForm";
import UserForm from "./Partials/UserForm";
import useBetterForm from "@/Utilities/useBetterForm";

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
      route("register"),
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
      <h1 className="mx-3 mb-4 text-center text-3xl font-extrabold">
        Register
      </h1>
      <form onSubmit={submit}>
        <p className="text-center text-lg text-blue-gray-500">
          Business Information
        </p>
        <BusinessForm form={businessForm} />

        <p className="mt-4 text-center text-lg text-blue-gray-500">
          Account Information
        </p>
        <UserForm form={userForm} />
      </form>
    </GuestFormLayout>
  );
}
