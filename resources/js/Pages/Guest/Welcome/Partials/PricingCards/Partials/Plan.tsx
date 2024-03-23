import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import A from "@/Components/Typography/A";
import Num from "@/Utilities/Num";
import { Tooltip } from "@material-tailwind/react";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { useTranslation } from "react-i18next";

export type PlanPeriod = "Monthly" | "Annually";

/**
 * Priority is to actionNode if not exist default actionProps will apply to (if actionHref exists then <a> else <button>)
 */
export interface PlanItemProps {
  period: PlanPeriod;
  planProps?: Partial<PlanProps>;
}

export type PlanProps = {
  title: string;
  desc: string;
  period: PlanPeriod;
  benefits: ReactNode;
  actionText?: string;
  actionProps?: ButtonHTMLAttributes<HTMLButtonElement>; //or Omit<InertiaLinkProps, "href"> if actionHref exist
  actionNode?: ReactNode;
  monthlyPrice: number;
  annualPrice: number;
};

export default function Plan({
  title,
  desc,
  period,
  benefits,
  actionText = "Get Started",
  actionProps,
  actionNode,
  monthlyPrice,
  annualPrice,
}: PlanProps) {
  const { t } = useTranslation();
  return (
    <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 !pb-3 text-center text-gray-900 shadow xl:p-8">
      <h3 className="mb-4 text-2xl font-semibold">{t(title)}</h3>
      <p className="font-light text-gray-500">{t(desc)}</p>
      <div className="my-8 ">
        <div className="flex items-baseline justify-center">
          <span className="mr-2 text-5xl font-extrabold">
            <Num
              prefix="$"
              amount={period === "Annually" ? annualPrice : monthlyPrice}
            />
          </span>
          <span className="text-gray-500">
            {t(period === "Annually" ? "/year" : "/month")}
          </span>
        </div>
        {period === "Annually" && (
          <div className="mt-2 text-gray-500">
            <span className="text-gray-600">
              <Num prefix="$" amount={annualPrice / 12} fixed={1} />
            </span>{" "}
            <span className="text-sm">{t("/month")}</span>{" "}
            <Tooltip content={t("Discount")}>
              <span className="ml-1 rounded-full bg-danger-50 p-1 px-2 text-sm text-danger-400">
                <Num
                  fixed={1}
                  amount={(100 * (annualPrice / 12)) / monthlyPrice - 100} //discount percentage
                  suffix="%"
                />
              </span>
            </Tooltip>
          </div>
        )}
      </div>
      {/* <!-- List --> */}
      <ul role="list" className="mb-8 space-y-4 text-left">
        {benefits}
      </ul>

      {actionNode ? (
        actionNode
      ) : (
        <PrimaryButton
          {...actionProps}
          className={
            "paddle_button paddle-checkout border-none bg-gradient-to-r from-primary-600 to-primary-800 !text-base normal-case shadow hover:shadow-lg " +
            (actionProps?.className ? actionProps.className : "")
          }
        >
          {t(actionText)}
        </PrimaryButton>
      )}

      <A
        className="mt-2 text-xs text-gray-500 hover:underline"
        href={route("paymentServicePolicy")}
      >
        {t("Payment & Refund Policy")}
      </A>
    </div>
  );
}
