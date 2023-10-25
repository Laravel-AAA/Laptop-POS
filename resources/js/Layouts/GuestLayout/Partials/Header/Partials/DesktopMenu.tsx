import PrimaryLink from "@/Components/Buttons/PrimaryLink";
import Dropdown from "@/Components/Dropdown";
import TextLink from "@/Components/TextLink";
import { ROUTES } from "@/Layouts/AuthenticatedLayout";
import { FaArrowRight } from "react-icons/fa";
import {GuestPageProps} from '@/types'

export default function DesktopMenu({
  auth,
}: GuestPageProps) {
  return (
    <nav className="hidden md:flex md:grow">
      <ul className="flex grow flex-wrap items-center justify-end">
        {auth?.user ? (
          <>
            {ROUTES.map((r, i) => (
              <li key={i}>
                <TextLink href={route(r.link)}>{r.name}</TextLink>
              </li>
            ))}
            <li>
              <div className="hidden sm:flex sm:items-center">
                <div className="relative ml-3">
                  <Dropdown>
                    <Dropdown.Trigger>
                      <span className="inline-flex rounded-md">
                        <button
                          type="button"
                          className="inline-flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                        >
                          {auth.user.name}

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
                        className="font-bold"
                      >
                        Log Out
                      </Dropdown.Link>
                    </Dropdown.Content>
                  </Dropdown>
                </div>
              </div>
            </li>
          </>
        ) : (
          <>
            <li>
              <TextLink href={route("login")}>Login</TextLink>
            </li>
            <li>
              <PrimaryLink
                className="ml-5 flex normal-case"
                href={route("register")}
              >
                <span>Register&nbsp;</span>
                <FaArrowRight />
              </PrimaryLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
