import { PropsWithChildren } from "react";

export default function UL({ children }: PropsWithChildren) {
  return <ul className="my-2">{children}</ul>;
}