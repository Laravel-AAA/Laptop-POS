import { FormEventHandler, useState } from "react";
import GuestFormLayout from "@/Layouts/GuestLayout/GuestFormLayout";
import { Head, router } from "@inertiajs/react";
import { AuthPageProps, ICreateBusiness, ICreateUser } from "@/types";
import BusinessForm from "./Partials/BusinessForm/BusinessForm";
import UserForm from "./Partials/UserForm";
import useBetterForm from "@/Utilities/useBetterForm";

export default function Register({ auth }: AuthPageProps) {
  const userForm = useBetterForm<ICreateUser>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "Admin",
  });

  const businessForm = useBetterForm<ICreateBusiness>({
    address: "",
    city: "",
    country: "",
    currency: null,
    logo: null,
    logoFile: null,
    name: "",
    phone: "",
    taxIdentificationNumber: null,
    taxPercent: 0,
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

  // const [tabIndex, setTabIndex] = useState<number>(0);
  return (
    <GuestFormLayout auth={auth}>
      <Head title="Register" />

      <form onSubmit={submit}>
        {/* <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
          <Tab.Panels>
            <Tab.Panel>
              <Transition
                show={tabIndex === 0}
                appear
                enter="transition-opacity absolute duration-[400ms] ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              > */}
        <p className="text-center text-lg text-blue-gray-500">
          Business Information
        </p>
        <BusinessForm
          onNext={() => {
            // setTabIndex(1)
          }}
          form={businessForm}
        />
        {/* </Transition>
            </Tab.Panel>
            <Tab.Panel>
              <Transition
                show={tabIndex === 1}
                appear
                enter="transition-opacity duration-[400ms] ease-out delay-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              > */}
        <p className="mt-4 text-center text-lg text-blue-gray-500">
          Account Information
        </p>
        <UserForm
          onBack={() => {
            // setTabIndex(0)
          }}
          form={userForm}
        />
        {/* </Transition>
            </Tab.Panel>
          </Tab.Panels> */}
        {/* We need the tab list and two tabs so that Tab.Group know there are two panels */}
        {/* <Tab.List className="h-0 w-0">
            <Tab></Tab>
            <Tab></Tab>
          </Tab.List>
        </Tab.Group> */}
      </form>
    </GuestFormLayout>
  );
}
