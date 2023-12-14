import FromDate from "@/Utilities/FromDate";
import KeyValue from "@/Utilities/KeyValue";
import { ISubscriptionLinks } from "@/types";
import { Tooltip } from "@material-tailwind/react";
import React from "react";

export default function SubscriptionState({
  subscriptionData: { state, onTrial, lastPayment, gracePeriodExpiresAt },
}: {
  subscriptionData: ISubscriptionLinks;
}) {
  return (
    <>
      <KeyValue
        k="State"
        v={
          state === "Canceled" ? (
            <span className="text-danger-500">
              <Tooltip content="Unsubscribed">Canceled</Tooltip>
            </span>
          ) : state === "Grace Period" ? (
            <span className="text-orange-700">
              <Tooltip content="Subscription is canceled, but still active until the subscription fully expires">
                Grace Period
              </Tooltip>
            </span>
          ) : state === "Past Due" ? (
            <span className="text-orange-700">
              <Tooltip content="Payment failed, you should update your payment method">
                Past Due
              </Tooltip>
            </span>
          ) : state === "Recurring" ? (
            <span className="text-green-700">
              <Tooltip content="Subscribed">Active</Tooltip>
            </span>
          ) : onTrial ? (
            <span className="text-orange-700">
              <Tooltip content="Unsubscribed">On trial</Tooltip>
            </span>
          ) : (
            <span className="text-danger-500">
              <Tooltip content="Trial ended, you have to subscribe">
                Inactive
              </Tooltip>
            </span>
          )
        }
      />

      {onTrial && (
        <p className="text-normal text-gray-600">
          Trial ends: <FromDate className="text-orange-700" date={onTrial} />
        </p>
      )}

      {lastPayment?.date && (
        <KeyValue
          k="Last Payment"
          v={
            <span className="text-primary-600">
              {lastPayment.amount},{" "}
              <FromDate className="text-gray-900" date={lastPayment.date} />
            </span>
          }
        />
      )}

      {gracePeriodExpiresAt && (
        <KeyValue
          k="Subscription Expire"
          v={<FromDate date={gracePeriodExpiresAt} />}
        />
      )}
    </>
  );
}
