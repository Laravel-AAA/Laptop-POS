import { PropsWithChildren } from "react";
import AppLayout from "../AppLayout";
import Footer from "./Partials/Footer";
import Header from "./Partials/Header";

export default function GuestLayout({
  children,
}: PropsWithChildren) {
  return (
    <AppLayout>
      <div className="selection:bg-red-500 selection:text-white">
        <Header  />
        <main>{children}</main>
        <Footer />
      </div>
    </AppLayout>
  );
}
