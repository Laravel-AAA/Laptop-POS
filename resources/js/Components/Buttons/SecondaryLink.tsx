import { AnchorHTMLAttributes } from "react";
import BetterLink from "./BetterLink";
import { InertiaLinkProps } from "@inertiajs/react";

export default function SecondaryLink({
  href,
  className = "",
  children,
  disabled,
  ...props
}: InertiaLinkProps & { disabled?: boolean }) {
  return (
    <BetterLink
      {...props}
      href={href}
      className={
        `block items-center rounded-md border
        border-transparent bg-secondary-400 px-4
        py-2 text-center  text-xs font-semibold
        uppercase tracking-wider
        text-gray-900 transition duration-200
        ease-in-out hover:bg-secondary-300 focus:outline-none
       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600
        focus-visible:ring-offset-2 active:scale-95
        disabled:opacity-25 disabled:active:scale-100 ${
          disabled ? "cursor-default opacity-25" : "cursor-pointer"
        } ` + className
      }
    >
      {children}
    </BetterLink>
  );
}
