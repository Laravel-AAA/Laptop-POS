import ProgressWithLabel from "@/Components/ProgressWithLabel";
import Num from "@/Utilities/Num";
import { ISubscriptionLinks } from "@/types";
import React from "react";
import { useTranslation } from "react-i18next";

export default function SubscriptionProgress({
  progress,
}: {
  progress: NonNullable<ISubscriptionLinks["progress"]>;
}) {
  const { accounts, products, bills } = progress;
  const accountsPercentage = Number(
    ((accounts.reached / accounts.max) * 100).toFixed(2),
  );
  const productsPercentage = Number(
    ((products.reached / products.max) * 100).toFixed(2),
  );
  const billsPercentage = Number(
    ((bills.reached / bills.max) * 100).toFixed(2),
  );

  const { t } = useTranslation();
  return (
    <div className="space-y-3">
      <ProgressWithLabel
        leftLabel={t("Accounts")}
        progressColor={colorBaseOnPercentage(accountsPercentage)}
        rightLabel={
          <span>
            <Num amount={accounts.reached} />
            {" / "}
            <Num amount={accounts.max} />
          </span>
        }
        progressLabel={" "}
        progress={accountsPercentage}
      />
      <ProgressWithLabel
        leftLabel={t("Products")}
        progressColor={colorBaseOnPercentage(productsPercentage)}
        progressLabel={" "}
        rightLabel={
          <span>
            <Num amount={products.reached} />
            {" / "}
            <Num amount={products.max} />
          </span>
        }
        progress={productsPercentage}
      />
      <ProgressWithLabel
        leftLabel={t("Bills")}
        progressLabel={" "}
        progressColor={colorBaseOnPercentage(billsPercentage)}
        rightLabel={
          <span>
            <Num amount={bills.reached} />
            {" / "}
            <Num amount={bills.max} />
          </span>
        }
        progress={billsPercentage}
      />
    </div>
  );
}

function colorBaseOnPercentage(
  percentage: number,
): "orange" | "deep-orange" | "red" | undefined {
  return percentage >= 90
    ? "red"
    : percentage >= 80
      ? "deep-orange"
      : percentage >= 70
        ? "orange"
        : undefined;
}
