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

  if (businessLogo) {
    const businessLogoPath = usePage<AuthPageProps>().props.auth.business.logo;
    if (businessLogoPath) src = "/businesses-logo/" + businessLogoPath;
  }
  if (!src) src = "/assets/logo/laptop-pos-logo.svg";

  return <img className={className} src={src} alt="Application Logo" />;
}
