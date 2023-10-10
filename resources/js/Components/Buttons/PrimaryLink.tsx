import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export default function PrimaryLink({
  href,
  className = "",
  children,
  disabled,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { disabled?: boolean }) {
  return (
    <a
      {...props}
      href={href}
      className={`inline-block cursor-pointer items-center rounded-md border
        border-transparent bg-primary-700 px-4
        py-2 text-center  text-xs font-semibold
        uppercase tracking-widest
        text-white transition
        duration-200 ease-in-out hover:bg-primary-800 focus:outline-none  focus:ring-2
        focus:ring-primary-400 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-primary-400 focus-visible:ring-offset-2
        active:scale-95 disabled:opacity-25 ${
          disabled && "opacity-25"
        } ${className} `}
    >
      {children}
    </a>
  );
}
