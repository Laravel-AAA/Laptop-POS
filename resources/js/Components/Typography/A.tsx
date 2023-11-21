import { PropsWithChildren } from "react";
import BetterLink from "../Buttons/BetterLink";
import { Link } from "@inertiajs/react";

export default function A({
  children,
  href,
}: PropsWithChildren<{ href: string }>) {
  return (
    <Link
      className="!inline transition duration-200 hover:underline hover:text-blue-500 text-blue-700"
      href={href}
    >
      {children}
    </Link>
  );
}
