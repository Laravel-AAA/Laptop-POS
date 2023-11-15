import { InertiaLinkProps, Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function BetterLink({
  children,
  disabled,
  ...props
}: PropsWithChildren<InertiaLinkProps>) {
  return (
    <div className="relative">
      {disabled && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute z-10 h-full w-full cursor-not-allowed"
        ></div>
      )}
      <Link disabled={disabled} {...props}>
        {children}
      </Link>
    </div>
  );
}
