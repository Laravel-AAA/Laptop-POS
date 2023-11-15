import Num, { NumProps } from "@/Utilities/Num";
import React, { ReactNode } from "react";

export default function KeyValue({
  k: key,
  v: value,
  numProps,
  className = "",
  title = "",
}: {
  k: string;
  className?: string;
  title?: string;
  v?: ReactNode | string | null | undefined;
  numProps?: NumProps | undefined;
} & ( //if value is number then you have to provide NumProps
  | { v: string | null | undefined; numProps?: undefined }
  | { v: ReactNode; numProps?: undefined }
  | { v?: undefined; numProps: NumProps }
)) {
  return (
    <p className={className}>
      <span className="text-blue-gray-500">{key}</span>:&nbsp;
      <span className="text-gray-800" title={title}>
        {numProps !== undefined ? <Num {...numProps} /> : value ?? "N/A"}
      </span>
    </p>
  );
}
