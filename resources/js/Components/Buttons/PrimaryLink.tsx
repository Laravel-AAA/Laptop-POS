import BetterLink from "./BetterLink";
import { InertiaLinkProps } from "@inertiajs/react";

export default function PrimaryLink({
  href,
  className = "",
  children,
  disabled,
  ...props
}: InertiaLinkProps ) {
  return (
    <BetterLink
      {...props}
      href={href}
      disabled={disabled}
      className={`block items-center rounded-md border
        border-transparent bg-primary-700 px-4
        py-2 text-center text-xs font-semibold
        uppercase tracking-wider
        text-white transition duration-200
        ease-in-out hover:bg-primary-600 focus:outline-none
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600
        focus-visible:ring-offset-2 active:scale-95
        disabled:opacity-25 disabled:active:scale-100 ${
          disabled ? "cursor-not-allowed opacity-25" : "cursor-pointer"
        } ${className} `}
    >
      {children}
    </BetterLink>
  );
}
