import { HTMLAttributes, ReactNode } from "react";

export default function InputHint({
  message,
  className = "",
  ...props
}: HTMLAttributes<HTMLParagraphElement> & { message?: string | ReactNode }) {
  if (!message) return null;
  else if (typeof message === "object") return message;
  else
    return (
      <p {...props} className={"text-sm text-gray-600 " + className}>
        {message}
      </p>
    );
}
