import React from "react";
import { useTranslation } from "react-i18next";

export default function AppName({
  className = "",
  laptopClassName = "",
  POSClassName = "",
}: {
  className?: string;
  laptopClassName?: string;
  POSClassName?: string;
}) {
  const { t } = useTranslation();
  return (
    <>
      <span
        className={
          "font-semibold text-gray-800 " + className + " " + laptopClassName
        }
      >
        {t("Laptop")}
      </span>
      {/*narrow space*/}
      &#8239;
      <span
        className={
          "font-semibold text-primary-700 " + className + " " + POSClassName
        }
      >
        {t("POS")}
      </span>
    </>
  );
}
