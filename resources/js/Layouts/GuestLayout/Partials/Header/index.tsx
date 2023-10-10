import ApplicationLogo from "@/Components/ApplicationLogo";
import PrimaryLink from "@/Components/Buttons/PrimaryLink";
import { PageProps } from "@/types";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";
import MobileMenu from "./Partials/MobileMenu";
import { ROUTES } from "@/Layouts/AuthenticatedLayout";
import DesktopMenu from "./Partials/DesktopMenu";

export default function Header({ auth }: PageProps | { auth: null }) {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <>
      <header
        className={`fixed z-30 w-full backdrop-blur-sm transition duration-300 ease-in-out md:bg-opacity-80 ${
          !top ? "bg-gray-50 shadow-lg" : ""
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Site branding */}
            <Link href="/" className="mr-4 shrink-0">
              <ApplicationLogo className="w-16" />
            </Link>

            <DesktopMenu auth={auth} />
            <MobileMenu auth={auth} />
          </div>
        </div>
      </header>
      <div className="pb-16 md:pb-20"></div>
    </>

    // <nav className="p-6 text-right sm:fixed sm:right-0 sm:top-0">
    //   {auth?.user ? (
    //     <>
    //       <Link
    //         href={route("dashboard")}
    //         className="mx-2 font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-primary-500 dark:text-gray-400 dark:hover:text-white"
    //       >
    //         Dashboard
    //       </Link>
    //       <Link
    //         href={route("product.index")}
    //         className="mx-2 font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-primary-500 dark:text-gray-400 dark:hover:text-white"
    //       >
    //         Inventory
    //       </Link>
    //     </>
    //   ) : (
    //     <>
    //       <Link
    //         href={route("login")}
    //         className="mx-2 font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-primary-500 dark:text-gray-400 dark:hover:text-white"
    //       >
    //         Log in
    //       </Link>

    //       <Link
    //         href={route("register")}
    //         className="mx-2 font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-primary-500 dark:text-gray-400 dark:hover:text-white"
    //       >
    //         Register
    //       </Link>
    //     </>
    //   )}
    // </nav>
  );
}
