import { PropsWithChildren } from "react";

export default function LI({ children }: PropsWithChildren) {
  return <li className="my-1  ml-6 list-disc text-gray-700">{children}</li>;
}