import { AuthPageProps } from "@/types";
import { usePage } from "@inertiajs/react";

export default function Logo({
  className,
  businessLogo = false,
}: {
  className: string;
  businessLogo?: boolean;
}) {
  let src: string | null = null;
  const businessLogoPath =
    usePage<AuthPageProps>()?.props?.auth?.business?.logo;

  if (businessLogo && businessLogoPath) {
    src = businessLogoPath.startsWith("http")
      ? businessLogoPath
      : "/businesses-logo/" + businessLogoPath;
  } else src = "/assets/logo/laptop-pos-logo.svg";

  return <img className={className} src={src} alt="Application Logo" />;
}
