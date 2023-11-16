import { PropsWithChildren } from "react";
import GuestLayout from ".";
import FormLayout from "./FormLayout";

export default function GuestFormLayout({
  children,
}: PropsWithChildren) {
  return (
    <GuestLayout>
      <FormLayout>
        {children}
      </FormLayout>
    </GuestLayout>
  );
}
