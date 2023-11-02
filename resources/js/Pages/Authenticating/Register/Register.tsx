import { FormEventHandler, Fragment, useState } from "react";
import GuestFormLayout from "@/Layouts/GuestLayout/GuestFormLayout";
import { Head, useForm } from "@inertiajs/react";
import { AuthPageProps, ICreateBusiness, ICreateUser } from "@/types";
import BusinessForm from "./Partials/BusinessForm/BusinessForm";
import UserForm from "./Partials/UserForm";
import { Tab, Transition } from "@headlessui/react";

export default function Register({ auth }: AuthPageProps) {
  const userForm = useForm<ICreateUser>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const businessForm = useForm<ICreateBusiness>({
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

    const allForms = useForm<ICreateUser & { business: ICreateBusiness }>({
      ...userForm.data,
      business: businessForm.data,
    });

    allForms.post(route("register"), {
      onError: (errors) => console.log("allForms errors", errors),
    });
  };

  const [tabIndex, setTabIndex] = useState<number>(0);
  return (
    <GuestFormLayout auth={auth}>
      <Head title="Register" />

      <form onSubmit={submit}>
        <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
          <Tab.Panels>
            <Tab.Panel>
              <Transition
                show={tabIndex === 0}
                appear
                enter="transition-opacity duration-[400ms] ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <p className="text-center text-lg opacity-70">
                  Business Information
                </p>

                <BusinessForm
                  onNext={() => setTabIndex(1)}
                  form={businessForm}
                />
              </Transition>
            </Tab.Panel>
            <Tab.Panel>
              <Transition
                show={tabIndex === 1}
                appear
                enter="transition-opacity duration-[400ms] ease-out delay-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <p className="text-center text-lg opacity-70">
                  Account Information
                </p>
                <UserForm onBack={() => setTabIndex(0)} form={userForm} />
              </Transition>
            </Tab.Panel>
          </Tab.Panels>
          {/* We need the tab list and two tabs so that Tab.Group know there are two panels */}
          <Tab.List className="h-0 w-0">
            <Tab></Tab>
            <Tab></Tab>
          </Tab.List>
        </Tab.Group>
      </form>
    </GuestFormLayout>
  );
}
