import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import PrimaryLink from "@/Components/Buttons/PrimaryLink";
import { InertiaLinkProps } from "@inertiajs/react";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

export type PlanPeriod = 'Monthly' | 'Annually';

export interface PlanItemProps {
  period: PlanPeriod;
  planProps?:Partial<PlanProps> ;
}

export interface PlanProps {
  title: string;
  desc: string;
  price: number;
  periodText: "month" | "year";
  benefits: ReactNode[];
  actionText?: string;
  actionProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function Plan({
  title,
  desc,
  price,
  periodText,
  benefits,
  actionText = "Get Started",
  actionProps = {},
}: PlanProps) {
  return (
    <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500">{desc}</p>
      <div className="my-8 flex items-baseline justify-center">
        <span className="mr-2 text-5xl font-extrabold">${price}</span>
        <span className="text-gray-500">/{periodText}</span>
      </div>
      {/* <!-- List --> */}
      <ul role="list" className="mb-8 space-y-4 text-left">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-center space-x-3">
            {/* <!-- Icon --> */}
            <svg
              className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            {b}
          </li>
        ))}
      </ul>

      <PrimaryButton
        {...actionProps}
        className={
          "border-none bg-gradient-to-r from-primary-600 to-primary-800 !text-base normal-case shadow hover:shadow-lg " +
          (actionProps?.className ? actionProps.className : "")
        }
      >
        {actionText}
      </PrimaryButton>
    </div>
  );
}
