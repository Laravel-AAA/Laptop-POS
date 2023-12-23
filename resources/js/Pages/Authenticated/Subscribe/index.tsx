import FullLogo from "@/Components/Logo/FullLogo";
import Logo from "@/Components/Logo/Logo";
import {
  ADVANCED_ANNUAL_PRICE,
  ADVANCED_MONTHLY_PRICE,
  AdvancedPlanBenefits,
} from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/AdvancedPlan";
import {
  BASIC_ANNUAL_PRICE,
  BASIC_MONTHLY_PRICE,
  BasicPlanBenefits,
} from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/BasicPlan";
import {
  ENHANCED_ANNUAL_PRICE,
  ENHANCED_MONTHLY_PRICE,
  EnhancedPlanBenefits,
} from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/EnhancedPlan";
import { PlanPeriod } from "@/Pages/Guest/Welcome/Partials/PricingCards/Partials/Plan";
import Num from "@/Utilities/Num";
import { AuthPageProps, CheckoutOptions, Plan } from "@/types";
import { Link } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Subscribe({
  planOption,
}: AuthPageProps<{ planOption: CheckoutOptions }>) {
  const params = new URLSearchParams(window.location.search);
  const period: PlanPeriod = params.get("period") as PlanPeriod;
  const plan: Plan = params.get("plan") as Plan;

  useEffect(() => {
    // (window as any).Paddle.Environment.set("sandbox");
    (window as any).Paddle.Setup({
      eventCallback: function (e) {
        console.log(e);
      },
    });
    (window as any).Paddle.Checkout.open(planOption);
  }, []);
  console.log(planOption, period, plan);
  return (
    <>
      <section className="block px-5 !text-gray-900 sm:px-10 md:px-16 xl:hidden">
        <div className="my-5 flex justify-center">
          <FullLogo />
        </div>
        <Link
          href={route("subscription.plans")}
          className="text-md group relative mb-2 w-full justify-center text-center inline-flex items-center overflow-hidden  rounded-md border border-primary-600 px-8 py-2 font-medium text-primary-600 hover:bg-gray-50 hover:text-gray-100"
        >
          <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-gradient-to-r from-primary-600 to-primary-800 opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
          <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
            <svg
              className="ml-3 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative">Change Plan</span>
        </Link>
        <header className="mb-6 text-4xl font-bold leading-tight text-gray-900">
          {plan} Plan
          <p className="text-lg font-semibold">
            {<Num prefix="$" amount={getPrice(period, plan)} />}, billed{" "}
            {period.toLowerCase()}
          </p>
        </header>
        <div className="text-md font-normal text-gray-800">
          <ul className="ml-auto space-y-2 text-center">
            {plan === "Basic" ? (
              <BasicPlanBenefits />
            ) : plan === "Enhanced" ? (
              <EnhancedPlanBenefits />
            ) : (
              <AdvancedPlanBenefits />
            )}
          </ul>
        </div>
      </section>
      <main className="relative flex">
        <div className="flex min-w-0 flex-auto flex-col items-start justify-center sm:flex-row xl:items-center xl:justify-start">
          <div className="relative  hidden h-full flex-auto items-center justify-start overflow-hidden p-10 xl:flex xl:w-2/5">
            <div className="absolute  inset-0 z-0 bg-gradient-to-b from-primary-600 to-secondary-500 opacity-80"></div>
            <div className="triangle absolute right-0 min-h-screen w-16"></div>
            <div className="absolute left-full top-5 z-50 flex -translate-x-[150%] text-center">
              <FullLogo />
            </div>
            {/* <img
              src="https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/bd2253a9671dac36a95faf821b52e78935050140be1718ce001f6aace45cf25c.png"
              className="absolute right-5 mr-5 h-96"
            /> */}
            <section className="z-10 -mt-52 w-full max-w-md">
              <Link
                href={route("subscription.plans")}
                className="text-md group relative mb-2 inline-flex items-center overflow-hidden  rounded-md border border-secondary-400 px-8 py-2 font-medium text-secondary-400 hover:bg-secondary-300 hover:text-gray-900"
              >
                <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-gradient-to-r from-secondary-400 to-secondary-500 opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
                <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
                  <svg
                    className="ml-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Change Plan</span>
              </Link>
              <header className="mb-6 text-4xl font-bold leading-tight text-gray-50">
                {plan} Plan
                <p className="text-lg font-semibold">
                  {<Num prefix="$" amount={getPrice(period, plan)} />}, billed{" "}
                  {period.toLowerCase()}
                </p>
              </header>
              <div className="text-md font-normal text-gray-100">
                <ul className="ml-auto space-y-2 text-center">
                  {plan === "Basic" ? (
                    <BasicPlanBenefits />
                  ) : plan === "Enhanced" ? (
                    <EnhancedPlanBenefits />
                  ) : (
                    <AdvancedPlanBenefits />
                  )}
                </ul>
              </div>
            </section>

            {/* <!---remove custom style--> */}
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <section className="flex w-full items-center justify-center px-8 md:h-full md:px-10 lg:px-14  xl:w-2/5 ">
            <div className="min-h-[870px] w-full max-w-md ">
              <div className="checkout-container mt-8 space-y-6">
                {/* Checkout form will render here */}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

function getPrice(period: PlanPeriod, plan: Plan): number {
  if (period === "Annually" && plan === "Advanced")
    return ADVANCED_ANNUAL_PRICE;
  if (period === "Monthly" && plan === "Advanced")
    return ADVANCED_MONTHLY_PRICE;
  if (period === "Annually" && plan === "Enhanced")
    return ENHANCED_ANNUAL_PRICE;
  if (period === "Monthly" && plan === "Enhanced")
    return ENHANCED_MONTHLY_PRICE;
  if (period === "Annually" && plan === "Basic") return BASIC_ANNUAL_PRICE;
  if (period === "Monthly" && plan === "Basic") return BASIC_MONTHLY_PRICE;
  throw (
    "Unexpected combination of period and plan. period=" +
    period +
    ", plan=" +
    plan
  );
}
