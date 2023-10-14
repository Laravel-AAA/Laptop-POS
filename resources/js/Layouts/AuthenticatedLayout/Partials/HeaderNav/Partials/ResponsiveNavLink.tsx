import { Link, InertiaLinkProps } from "@inertiajs/react";

export default function ResponsiveNavLink({
  active = false,
  className = "",
  children,
  ...props
}: InertiaLinkProps & { active?: boolean }) {
  return (
    <Link
      {...props}
      className={`flex w-full items-start border-l-4 py-2 pl-3 pr-4 ${
        active
          ? "border-primary-600 bg-primary-50 text-primary-800 focus:border-primary-700 focus:bg-primary-100 focus:text-primary-600"
          : "border-transparent text-gray-600 hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600 focus:border-primary-700 focus:bg-primary-100 focus:text-primary-900"
      } text-base font-medium transition duration-150 ease-in-out focus:outline-none ${className}`}
    >
      {children}
    </Link>
  );
}
