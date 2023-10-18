import { HTMLAttributes } from "react";

export default function InputHint({
  message,
  className = "",
  ...props
}: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
  return message ? (
    <p {...props} className={"text-sm text-gray-600 " + className}>
      {message}
    </p>
  ) : null;
}
