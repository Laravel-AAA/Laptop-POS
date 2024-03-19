import { ButtonHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";

export default function DangerButton({
  type = "button",
  className = "",
  disabled,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { t } = useTranslation();
  return (
    <button
      type={type}
      {...props}
      className={
        `inline-block items-center rounded-md
        border border-transparent bg-danger-600 px-4
        py-2 text-center text-xs font-semibold uppercase text-white
        duration-200 ease-in-out hover:bg-danger-500
        focus:outline-none
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600
        focus-visible:ring-offset-2 active:scale-95
        active:bg-danger-700 disabled:opacity-25 disabled:active:scale-100 ${
          disabled ? "cursor-default opacity-25" : "cursor-pointer"
        } ` + className
      }
      disabled={disabled}
    >
      {typeof children === "string" ? t(children) : children}
    </button>
  );
}
