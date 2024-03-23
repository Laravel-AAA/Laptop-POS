import FromDate from "@/Utilities/FromDate";
import KeyValue from "@/Utilities/KeyValue";
import { ISubscriptionLinks } from "@/types";
import { Tooltip } from "@material-tailwind/react";
import React from "react";
import { useTranslation } from "react-i18next";

export default function SubscriptionState({
  subscriptionData: {
    state,
    onTrial,
    lastPayment,
    nextPayment,
    gracePeriodExpiresAt,
  },
}: {
  subscriptionData: ISubscriptionLinks;
}) {
  const { t } = useTranslation();
  return (
    <>
      <KeyValue
        k={t("State")}
        v={
          state === "Canceled" ? (
            <span className="text-danger-500">
              <Tooltip content={t("Unsubscribed")}>{t("Canceled")}</Tooltip>
            </span>
          ) : state === "Grace Period" ? (
            <span className="text-orange-700">
              <Tooltip
                content={t(
                  "Subscription is paused, but still active until the subscription fully expires",
                )}
              >
                {t("Grace Period")}
              </Tooltip>
            </span>
          ) : state === "Past Due" ? (
            <span className="text-orange-700">
              <Tooltip
                content={t(
                  "Payment failed, you should update your payment method",
                )}
              >
                {t("Past Due")}
              </Tooltip>
            </span>
          ) : state === "Recurring" ? (
            <span className="text-green-700">
              <Tooltip content={t("Subscribed")}>{t("Active")}</Tooltip>
            </span>
          ) : state === "Paused" ? (
            <span className="text-danger-500">
              <Tooltip content={t("Subscription paused")}>
                {t("Paused")}
              </Tooltip>
            </span>
          ) : onTrial ? (
            <span className="text-orange-700">
              <Tooltip content={t("Unsubscribed")}>{t("On trial")}</Tooltip>
            </span>
          ) : (
            <span className="text-danger-500">
              <Tooltip content={t("Trial ended, you have to subscribe")}>
                {t("Inactive")}
              </Tooltip>
            </span>
          )
        }
      />

      {onTrial && (
        <KeyValue
          k={t("Trial ends")}
          v={<FromDate className="text-orange-700" date={onTrial} />}
        />
      )}

      {lastPayment?.date && (
        <KeyValue
          k={t("Last Payment")}
          v={
            <span className="text-primary-600">
              {lastPayment.amount},{" "}
              <FromDate className="text-gray-900" date={lastPayment.date} />
            </span>
          }
        />
      )}

      <KeyValue
        k={t("Next billing cycle")}
        v={
          nextPayment ? (
            <span className="text-primary-600">
              {nextPayment.amount},{" "}
              <FromDate className="text-gray-900" date={nextPayment.date} />
            </span>
          ) : (
            <span className="text-danger-500">{t("N/A")}</span>
          )
        }
      />

      {gracePeriodExpiresAt && (
        <KeyValue
          k={t("Subscription Expire")}
          v={<FromDate date={gracePeriodExpiresAt} />}
        />
      )}
    </>
  );
}
