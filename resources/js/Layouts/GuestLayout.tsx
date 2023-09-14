import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import Card from "./CardLayout";
import HeaderFooter from "./HeaderFooterLayout/HeaderFooterLayout";
import { PageProps, User } from "@/types";

export default function Guest({
  children,
  auth
}: PropsWithChildren<PageProps>) {
  return (
    <HeaderFooter auth={auth}>
      <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
          <Link href="/">
            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
          </Link>
        </div>

        <Card>{children}</Card>
      </div>
    </HeaderFooter>
  );
}
