import { PropsWithChildren } from "react";
import { PageProps } from "@/types";
import AppLayout from "../AppLayout";
import Footer from "./Partials/Footer";
import Header from "./Partials/Header";

export default function GuestLayout({
  children,
  auth,
}: PropsWithChildren<PageProps>) {
  return (
    <AppLayout>
      <div className=" p-6 selection:bg-red-500 selection:text-white lg:p-8">
        <Header auth={auth} />
        <main>{children}</main>
        <Footer />
      </div>
    </AppLayout>
  );
}
