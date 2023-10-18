import { PropsWithChildren, ReactElement } from "react";
import { IUser } from "@/types";
import AppLayout from "../AppLayout";
import HeaderNav from "./Partials/HeaderNav";
import HeaderAction from "./Partials/HeaderAction";

export const ROUTES: { link: string; name: string }[] = [
  { name: "Checkout", link: "checkout.index" },
  { name: "Inventory", link: "product.index" },
  { name: "Bills", link: "bill.index" },
  { name: "Dashboard", link: "dashboard" },
];
export default function Authenticated({
  user,
  header,
  children,
}: PropsWithChildren<{
  user: IUser;
  //empty string is for NO header, because null/undefined means default header.
  header?: ReactElement | " ";
}>) {
  return (
    <AppLayout>
      <div className="min-h-screen">
        <HeaderNav user={user} />
        <HeaderAction header={header} />

        <main>{children}</main>
      </div>
    </AppLayout>
  );
}
