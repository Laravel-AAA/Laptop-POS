import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
/**
 * check out [react-icons](https://react-icons.github.io/react-icons/) for more info...
 */
import GuestLayout from "@/Layouts/GuestLayout";
import Hero from "./Partials/Hero";

export default function Welcome({
  auth,
  laravelVersion,
  phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
  return (
    <GuestLayout auth={auth}>
      <Head title="Welcome" />
      <Hero />
    </GuestLayout>
  );
}
