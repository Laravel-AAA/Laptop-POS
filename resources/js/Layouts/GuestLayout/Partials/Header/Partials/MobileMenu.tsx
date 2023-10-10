import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import PrimaryLink from "@/Components/Buttons/PrimaryLink";
import { FaArrowRight } from "react-icons/fa";
import { PageProps } from "@/types";
import { ROUTES } from "@/Layouts/AuthenticatedLayout";

export default function MobileMenu({ auth }: PageProps | { auth: null }) {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="h-6 w-6 fill-current text-gray-900"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute left-0 top-full z-20 h-screen bg-gray-50 w-full overflow-auto pb-16 backdrop-blur-sm"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            {auth?.user ? (
              ROUTES.map((r, i) => (
                <li>
                  <Link
                    href={route(r.link)}
                    className="flex w-full justify-center py-2 font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {r.name}
                  </Link>
                </li>
              ))
            ) : (
              <>
                <li>
                  <Link
                    href={route("login")}
                    className="flex w-full justify-center py-2 font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <PrimaryLink
                    href={route("register")}
                    className="flex w-full justify-center py-2 font-medium normal-case"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    <span>Register&nbsp;</span>
                    <FaArrowRight />
                  </PrimaryLink>
                </li>
              </>
            )}
          </ul>
        </Transition>
      </div>
    </div>
  );
}
