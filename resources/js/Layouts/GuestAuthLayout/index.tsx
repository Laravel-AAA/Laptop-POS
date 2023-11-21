import { IUser } from "@/types";
import React, { PropsWithChildren } from "react";
import GuestLayout from "../GuestLayout";
import Authenticated from "../AuthenticatedLayout";
import { HeaderActionProps } from "../AuthenticatedLayout/Partials/HeaderAction";
import Footer from "../GuestLayout/Partials/Footer";

/**Guest or Authenticated Layout base on user session (auth props) */
export default function GuestAuthLayout({
  user,
  children,
  header,
}: PropsWithChildren<{
  user: IUser | null;
  header: HeaderActionProps["header"];
}>) {
  return user === null ? (
    <GuestLayout>{children}</GuestLayout>
  ) : (
    <Authenticated user={user} header={header}>
      {children}
      <Footer/>
    </Authenticated>
  );
}
