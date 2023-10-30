import { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-dots-darker dark:bg-dots-lighter min-h-screen bg-gray-100 bg-center dark:bg-gray-900">
      {children}
    </div>
  );
}
