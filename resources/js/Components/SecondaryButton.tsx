import { ButtonHTMLAttributes } from "react";

export default function SecondaryButton({
  type = "button",
  className = "",
  disabled,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      type={type}
      className={
        `inline-block
                cursor-pointer items-center rounded-md border
                border-secondary-400 border-transparent
                bg-white px-4 py-2 text-center shadow-sm
                text-xs font-semibold uppercase tracking-widest text-secondary-800
                transition duration-200 ease-in-out
                hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-secondary-300
                focus:ring-offset-2 focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-secondary-300 focus-visible:ring-offset-2
                active:scale-95 active:bg-secondary-200 disabled:opacity-25 ${
                  disabled && "opacity-25"
                } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
