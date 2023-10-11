import { InertiaLinkProps, Link } from "@inertiajs/react";
import React, { PropsWithChildren } from "react";

export default function TextLink({
  href,
  className = "",
  children,
  ...props
}: PropsWithChildren<{
  href: string;
  className?: string;
} & InertiaLinkProps>) {
  return (
    <Link
      href={href}
      {...props}
      className={
        "flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 " +
        className
      }
    >
      {children}
    </Link>
  );
}
