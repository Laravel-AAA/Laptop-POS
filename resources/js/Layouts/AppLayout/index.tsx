import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import Flash from "./Partials/Flash";

export default function AppLayout({ children }: PropsWithChildren) {
  const flash = usePage<PageProps>().props.flash;
  return (
    <>
      <div className="relative min-h-screen print:bg-white bg-gray-100 bg-center">
        {children}
      </div>
      <div className="fixed print:hidden bottom-5 z-50 right-3">
        <Flash flash={flash} />
      </div>
    </>
  );
}
