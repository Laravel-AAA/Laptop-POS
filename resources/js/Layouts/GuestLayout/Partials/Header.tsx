import { PageProps } from "@/types";
import { Link } from "@inertiajs/react";

export default function Header({ auth }: PageProps | { auth: null }) {
  return (
    <nav className="p-6 text-right sm:fixed sm:right-0 sm:top-0">
      {auth?.user ? (
        <>
          <Link
            href={route("dashboard")}
            className="mx-2 font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-primary-500 dark:text-gray-400 dark:hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            href={route("product.index")}
            className="mx-2 font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-primary-500 dark:text-gray-400 dark:hover:text-white"
          >
            Inventory
          </Link>
        </>
      ) : (
        <>
          <Link
            href={route("login")}
            className="mx-2 font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-primary-500 dark:text-gray-400 dark:hover:text-white"
          >
            Log in
          </Link>

          <Link
            href={route("register")}
            className="mx-2 font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-primary-500 dark:text-gray-400 dark:hover:text-white"
          >
            Register
          </Link>
        </>
      )}
    </nav>
  );
}
