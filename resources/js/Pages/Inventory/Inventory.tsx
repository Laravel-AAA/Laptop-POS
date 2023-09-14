/**
 * CRUD all items available for this user such as Keyboard, Mouse.
 * Each item has information such as Picture, Name, Price, Quantity available, ...etc.
 */

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Inventory({ auth }: PageProps) {
  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Head title="Inventory" />


    </AuthenticatedLayout>
  );
}
