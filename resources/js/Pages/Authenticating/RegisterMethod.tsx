import PrimaryLink from "@/Components/Buttons/PrimaryLink";
import AppName from "@/Components/Logo/AppName";
import A from "@/Components/Typography/A";
import Divider from "@/Components/Typography/Divider";
import GuestFormLayout from "@/Layouts/GuestLayout/GuestFormLayout";
import { Head, Link } from "@inertiajs/react";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

export default function RegisterMethod() {
  return (
    <GuestFormLayout>
      <Head title="Register Method" />
      <div className="p-4">
        <h2 className="mb-1 text-2xl font-bold text-primary-900 dark:text-white">
          Signing up for <AppName className="!font-extrabold" /> is fast and
          free.
        </h2>
        <div className="mt-10 grid space-y-4">
          <PrimaryLink
            href={route("register.OAuth", "google")}
            className="group h-12 !rounded-full border-2 !border-gray-300 bg-white px-6 normal-case  hover:!border-primary-800 hover:bg-white"
          >
            <div className="relative mt-0.5 flex items-center justify-center space-x-4">
              <img
                src="/assets/google-icon.png"
                className="absolute left-0 w-5"
                alt="google logo"
              />
              <span className="block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-primary-800 dark:text-white sm:text-base">
                Register with Google
              </span>
            </div>
          </PrimaryLink>
          {/* X do not provide user's email which is west of time because user then had to verify the email🤷‍♂️ <PrimaryLink
            href={route("register.OAuth", "x")}
            className="group h-12 !rounded-full border-2 !border-gray-300 bg-white px-6 normal-case  hover:!border-primary-800 hover:bg-white"
          >
            <div className="relative mt-0.5 flex items-center justify-center space-x-4">
              <FaXTwitter className="absolute left-0 h-5 w-5 text-black transition duration-300 group-hover:text-primary-800 " />
              <span className="block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-primary-800 dark:text-white sm:text-base">
                Register with X
              </span>
            </div>
          </PrimaryLink> */}
          <PrimaryLink
            href={route("register.OAuth", "github")}
            className="group h-12 !rounded-full border-2 !border-gray-300 bg-white px-6 normal-case hover:!border-primary-800 hover:bg-white"
          >
            <div className="relative mt-0.5 flex items-center justify-center space-x-4">
              <FaGithub className="absolute left-0 h-5 w-5 text-black transition duration-300 group-hover:text-primary-800 " />
              <span className="block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-primary-800 dark:text-white sm:text-base">
                Register with Github
              </span>
            </div>
          </PrimaryLink>

          <Divider>or</Divider>

          <PrimaryLink
            href={route("register")}
            className="group h-12 !rounded-full border-2 !border-gray-300 bg-white px-6 normal-case  hover:!border-primary-800 hover:bg-white"
          >
            <div className="relative mt-0.5 flex items-center justify-center space-x-4">
              <FaEnvelope className="absolute left-0 h-5 w-5 text-gray-800 transition duration-300 group-hover:text-primary-800" />
              <span className="block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-primary-800 dark:text-white sm:text-base">
                Continue with email
              </span>
            </div>
          </PrimaryLink>
        </div>
        {/* <p className="text-md mt-6 text-center text-gray-600">
          Already registered? <A href={route("login")}>Login</A>
        </p> */}

        <p className="text-base mt-6 text-center">
          <Link
            href={route("login")}
            className="text-gray-600 underline hover:text-gray-900 focus:outline-none "
          >
            Already registered?
          </Link>
        </p>

        <p className="mt-4 text-center text-xs text-gray-600">
          By creating an account, you agree to our{" "}
          <A href={route("termsAndConditions")}>Terms & Conditions</A> and
          confirm you have read our{" "}
          <A href={route("privacyPolicy")}>Privacy and Cookie Statement</A>.
        </p>
      </div>
    </GuestFormLayout>
  );
}
