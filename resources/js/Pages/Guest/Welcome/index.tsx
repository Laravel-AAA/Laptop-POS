import { Head } from "@inertiajs/react";
/**
 * check out [react-icons](https://react-icons.github.io/react-icons/) for more info...
 */
import GuestLayout from "@/Layouts/GuestLayout";
import Hero from "./Partials/Hero";
import Features from "./Partials/Features";
import { GuestPageProps } from "@/types";

export default function Welcome({
  auth,
  laravelVersion,
  phpVersion,
}: GuestPageProps<{ laravelVersion: string; phpVersion: string }>) {
  return (
    <GuestLayout auth={auth}>
      <Head title="Welcome" />
      <Hero />
      <Features />
      {/* todo segment about the flexibility */}
    </GuestLayout>
  );
}
