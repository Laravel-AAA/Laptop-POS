import { Head } from "@inertiajs/react";
/**
 * check out [react-icons](https://react-icons.github.io/react-icons/) for more info...
 */
import GuestLayout from "@/Layouts/GuestLayout";
import Hero from "./Partials/Hero";
import Features from "./Partials/Features";
import LastSection from "./Partials/LastSection";

export default function Welcome() {
  return (
    <GuestLayout>
      <Head title="Welcome" />
      <Hero />
      <Features />
      {/* todo segment about the flexibility */}
      <LastSection/>
    </GuestLayout>
  );
}
