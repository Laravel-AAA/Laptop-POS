import { PropsWithChildren } from "react";
import { GuestPageProps } from "@/types";
import GuestLayout from ".";
import FormLayout from "./FormLayout";

export default function GuestFormLayout({
  children,
  auth,
}: PropsWithChildren<GuestPageProps>) {
  return (
    <GuestLayout auth={auth}>
      <FormLayout>
        {children}
      </FormLayout>
    </GuestLayout>
  );
}
