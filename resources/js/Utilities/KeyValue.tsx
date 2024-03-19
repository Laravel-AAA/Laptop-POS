import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export default function KeyValue({
  k: key,
  v: value,
  className = "",
  keyClassName = "",
  valueClassName = "",
  title = "",
  noColon = false,
}: {
  k: string;
  className?: string;
  keyClassName?: string;
  valueClassName?: string;
  title?: string;
  v?: ReactNode | string | null | undefined;
  noColon?: boolean;
}) {
  const { t } = useTranslation();
  return (
    <p className={className}>
      <span className={"text-blue-gray-500 " + keyClassName}>{t(key)}</span>
      {!noColon && ":"}&nbsp;
      <span className={"text-gray-800 " + valueClassName} title={t(title)}>
        {value ?? t("N/A")}
      </span>
    </p>
  );
}
