import { PropsWithChildren } from "react";
import { PageProps } from "@/types";
import GuestLayout from ".";
import FullLogo from "@/Components/Logo/FullLogo";

export default function GuestFormLayout({
  children,
  auth,
}: PropsWithChildren<PageProps>) {
  return (
    <GuestLayout auth={auth}>
      <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
        <div>
          <FullLogo size="xl" />
        </div>
        <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
          {children}
        </div>
      </div>
    </GuestLayout>
  );
}
