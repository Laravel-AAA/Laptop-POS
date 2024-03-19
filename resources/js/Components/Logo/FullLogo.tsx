import { Link } from "@inertiajs/react";
import React from "react";
import Logo from "./Logo";
import { useTranslation } from "react-i18next";

export default function FullLogo({
  size = "lg",
}: {
  size?: "lg" | "xl"; //add other sizes when you need it
}) {
  const logoSize = {
    lg: "w-16",
    xl: "w-20",
  }[size];
  const textSize = {
    lg: "text-2xl",
    xl: "text-2xl",
  }[size];

  const { t } = useTranslation();
  return (
    <Link href="/" className="flex shrink-0 items-center self-stretch">
      <Logo className={logoSize} />
      <h1 className={"px-1 font-extrabold text-primary-950 " + textSize}>
        {t("Laptop")}&nbsp;
        <span className="-ml-1 font-black text-primary-600">{t("POS")}</span>
      </h1>
    </Link>
  );
}
