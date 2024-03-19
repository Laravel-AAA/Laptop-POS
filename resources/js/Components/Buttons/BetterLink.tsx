import { InertiaLinkProps, Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

export default function BetterLink({
  children,
  disabled,
  ...props
}: PropsWithChildren<InertiaLinkProps>) {
  const { t } = useTranslation();
  return (
    <div className="relative">
      {disabled && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute z-10 h-full w-full cursor-default"
        ></div>
      )}
      <Link disabled={disabled} {...props}>
        {typeof children === "string" ? t(children) : children}
      </Link>
    </div>
  );
}
