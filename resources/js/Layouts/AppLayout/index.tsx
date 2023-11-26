import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import Flash from "./Partials/Flash";

export default function AppLayout({ children }: PropsWithChildren) {
  const flash = usePage<PageProps>().props.flash;
  return (
    <>
      <div className="bg-dots-darker dark:bg-dots-lighter relative min-h-screen bg-gray-100 bg-center dark:bg-gray-900">
        {children}
      </div>
      <div className="fixed bottom-5 z-50 right-3">
        <Flash flash={flash} />
      </div>
    </>
  );
}
