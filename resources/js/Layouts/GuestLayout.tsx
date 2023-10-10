import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import FormCard from "./FormCardLayout";
import HeaderFooter from "./HeaderFooterLayout";
import { PageProps } from "@/types";

export default function Guest({
  children,
  auth
}: PropsWithChildren<PageProps>) {
  return (
    <HeaderFooter auth={auth}>
      <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div>
          <Link href="/">
            <ApplicationLogo className="w-20" />
          </Link>
        </div>

        <FormCard>{children}</FormCard>
      </div>
    </HeaderFooter>
  );
}
