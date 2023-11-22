import { InertiaLinkProps, Link } from "@inertiajs/react";

export default function A({
  children,
  className = "",
  ...props
}: InertiaLinkProps) {
  return (
    <Link
      className={
        "!inline text-blue-700 transition duration-200 hover:text-blue-500 hover:underline " +
        className
      }
      {...props}
    >
      {children}
    </Link>
  );
}
