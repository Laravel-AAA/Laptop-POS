import Num, { NumProps } from "@/Utilities/Num";
import React, { ReactNode } from "react";

export default function KeyValue({
  k: key,
  v: value,
  vProps,
  className = "",
  title = "",
}: {
  k: string;
  className?: string;
  title?: string;
} & ( //if value is number then you have to provide NumProps
  | { v: string | null | undefined; vProps?: undefined }
  | { v: NumProps["amount"]; vProps: Omit<NumProps, "amount" | "noAmount"> }
  | { v: ReactNode; vProps?: undefined }
)) {
  return (
    <p className={className}>
      <span className="text-blue-gray-500">{key}</span>:&nbsp;
      <span className="text-gray-800" title={title}>
        {typeof vProps !== "undefined" ? (
          <Num defaultNoAmount amount={value} {...vProps} />
        ) : (
          value ?? "N/A"
        )}
      </span>
    </p>
  );
}
