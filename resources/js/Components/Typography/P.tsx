import { PropsWithChildren } from "react";

export default function P({ children }: PropsWithChildren) {
  return <p className="mb-1 mt-2 text-gray-700">{children}</p>;
}