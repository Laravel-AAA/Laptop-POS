import { PropsWithChildren } from "react";
import AppLayout from "../AppLayout";
import Footer from "./Partials/Footer";
import Header from "./Partials/Header";
import { GuestPageProps } from "@/types";

export default function GuestLayout({
  children,
  auth,
}: PropsWithChildren<GuestPageProps>) {
  return (
    <AppLayout>
      <div className="selection:bg-red-500 selection:text-white">
        <Header auth={auth} />
        <main>{children}</main>
        <Footer />
      </div>
    </AppLayout>
  );
}
