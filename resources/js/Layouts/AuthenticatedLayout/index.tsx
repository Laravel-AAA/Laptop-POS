import { useState, PropsWithChildren, ReactNode, ReactElement } from "react";
import Logo from "@/Components/Logo/Logo";
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Layouts/AuthenticatedLayout/Partials/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { IUser } from "@/types";
import NavLink from "./Partials/NavLink";
import AppLayout from "../AppLayout";

export const ROUTES: { link: string; name: string }[] = [
  { name: "Checkout", link: "checkout.index" },
  { name: "Inventory", link: "product.index" },
  { name: "Bills", link: "bill.index" },
  { name: "Dashboard", link: "dashboard" },
];
export default function Authenticated({
  user,
  header,
  children,
}: PropsWithChildren<{ user: IUser; header?: ReactElement }>) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);
  return (
    <AppLayout>
      <div className="min-h-screen">
        <nav className="border-b border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-12 justify-between">
              <div className="flex">
                <div className="flex shrink-0 items-center">
                  <Link href="/">
                    <Logo className="h-9" />
                  </Link>
                </div>

                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                  {ROUTES.map((r) => (
                    <NavLink
                      key={r.link}
                      href={route(r.link)}
                      active={route().current(r.link)}
                    >
                      {r.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <div className="relative ml-3">
                  <Dropdown>
                    <Dropdown.Trigger>
                      <span className="inline-flex rounded-md">
                        <button
                          type="button"
                          className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                        >
                          {user.name}

                          <svg
                            className="-mr-0.5 ml-2 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                      <Dropdown.Link href={route("profile.edit")}>
                        Profile
                      </Dropdown.Link>
                      <Dropdown.Link
                        href={route("logout")}
                        method="post"
                        as="button"
                      >
                        Log Out
                      </Dropdown.Link>
                    </Dropdown.Content>
                  </Dropdown>
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <button
                  onClick={() =>
                    setShowingNavigationDropdown(
                      (previousState) => !previousState,
                    )
                  }
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className={
                        !showingNavigationDropdown ? "inline-flex" : "hidden"
                      }
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                    <path
                      className={
                        showingNavigationDropdown ? "inline-flex" : "hidden"
                      }
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            className={
              (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden"
            }
          >
            <div className="space-y-1 pb-3 pt-2">
              {ROUTES.map((r) => (
                <ResponsiveNavLink
                  key={r.link}
                  href={route(r.link)}
                  active={route().current(r.link)}
                >
                  {r.name}
                </ResponsiveNavLink>
              ))}
            </div>

            <div className="border-t border-gray-200 pb-1 pt-4">
              <div className="px-4">
                <div className="text-base font-medium text-gray-800">
                  {user.name}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {user.email}
                </div>
              </div>

              <div className="mt-3 space-y-1">
                <ResponsiveNavLink href={route("profile.edit")}>
                  Profile
                </ResponsiveNavLink>
                <ResponsiveNavLink
                  method="post"
                  href={route("logout")}
                  as="button"
                >
                  Log Out
                </ResponsiveNavLink>
              </div>
            </div>
          </div>
        </nav>

        <header className="my-0 bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {header || (
              <h2 className="py-5 text-xl font-semibold leading-tight text-gray-800">
                {ROUTES.find((r) => r.link == route().current())?.name ??
                  route().current()?.toString()[0].toUpperCase() +
                    (route()
                      .current()
                      ?.substring(1)
                      .toLowerCase()
                      .split(".")?.[0] ?? "")}
              </h2>
            )}
          </div>
        </header>

        <main>{children}</main>
      </div>
    </AppLayout>
  );
}
