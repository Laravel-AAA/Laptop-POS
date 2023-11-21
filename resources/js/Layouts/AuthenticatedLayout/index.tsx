import { PropsWithChildren } from "react";
import { IUser } from "@/types";
import AppLayout from "../AppLayout";
import HeaderNav from "./Partials/HeaderNav";
import HeaderAction, { HeaderActionProps } from "./Partials/HeaderAction";

export type AuthenticatedLayoutProps = PropsWithChildren<{
  user: IUser;
  header: HeaderActionProps["header"];
}>;

export const ROUTES: { link: string; name: string }[] = [
  { name: "Checkout", link: "bill.create" },
  { name: "Inventory", link: "product.index" },
  { name: "Bills", link: "bill.index" },
  { name: "Dashboard", link: "dashboard" },
];

export default function Authenticated({
  user,
  header,
  children,
}: AuthenticatedLayoutProps) {
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
