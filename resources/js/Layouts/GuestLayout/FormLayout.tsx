import FullLogo from "@/Components/Logo/FullLogo";
import Logo from "@/Components/Logo/Logo";
import { PropsWithChildren } from "react";

export default function FormLayout({
  children,
  businessLogo,
}: PropsWithChildren<{ businessLogo?: string | null }>) {
  return (
    <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
      <div>
        {businessLogo === undefined ? (
          <FullLogo size="xl" />
        ) : (
          <Logo className="h-14 rounded w-auto" businessLogo={businessLogo} />
        )}
      </div>
      <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
        {children}
      </div>
    </div>
  );
}
