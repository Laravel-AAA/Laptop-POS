import { useState, PropsWithChildren, ReactNode, ReactElement } from "react";
import Logo from "@/Components/Logo/Logo";
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Layouts/AuthenticatedLayout/Partials/HeaderNav/Partials/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { IUser } from "@/types";
import NavLink from "./Partials/HeaderNav/Partials/NavLink";
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
}: PropsWithChildren<{ user: IUser; header?: ReactElement }>) {
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
