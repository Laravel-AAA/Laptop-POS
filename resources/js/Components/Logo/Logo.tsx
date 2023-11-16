
export default function Logo({
  className,
  businessLogo,
}: {
  className?: string;
  businessLogo?: string|null;
}) {
  let src: string | null = null;

  if (businessLogo) {
    src = businessLogo.startsWith("http")
      ? businessLogo
      : "/businesses-logo/" + businessLogo;
  } else src = "/assets/logo/laptop-pos-logo.svg";

  return <img className={className} src={src} alt="Application Logo" />;
}
