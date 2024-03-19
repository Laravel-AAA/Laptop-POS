import { HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";

export default function HintMessage({
  message, //use either message or children NOT both
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
  const { t } = useTranslation();
  return (
    <p
      {...props}
      className={"ml-2 mt-2 text-xs text-blue-gray-400 " + className}
    >
      {message ? t(message) : children}
    </p>
  );
}
