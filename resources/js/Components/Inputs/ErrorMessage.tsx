import React, { HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";

export default function ErrorMessage({
  message,
  className = "",
  ...props
}: HTMLAttributes<HTMLParagraphElement> & { message: string | undefined }) {
  const { t } = useTranslation();

  return (
    message && (
      <p
        {...props}
        className={"ml-2 mt-2 text-xs text-danger-600 " + className}
      >
        {message && t(message)}
      </p>
    )
  );
}
