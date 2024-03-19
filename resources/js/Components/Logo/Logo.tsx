import { useTranslation } from "react-i18next";

export default function Logo({
  className,
  businessLogo,
}: {
  className?: string;
  businessLogo?: string | null;
}) {
  let src: string | null = null;

  if (businessLogo) {
    src = businessLogo.startsWith("http")
      ? businessLogo
      : "/businesses-logo/" + businessLogo;
  } else src = "/assets/logo/laptop-pos-logo.svg";

  const { t } = useTranslation();
  return <img className={className} src={src} alt={t("Application Logo")} />;
}
