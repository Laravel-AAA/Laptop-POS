import SupportEmailLink from "@/Components/SupportEmailLink";
import A from "@/Components/Typography/A";

export default function Footer({ className = "" }: { className?: string }) {
  return (
    // {/* <hr className="mt-24 border-gray-300" /> */}

    <>
      {/* <hr className="mt-24 border-gray-300" /> */}
      <div className="pb-20"></div>
      <div className="absolute bottom-0 w-full">
        <footer
          className={
            "my-2 flex min-h-full w-full flex-wrap-reverse justify-center px-6 py-4 sm:items-center sm:justify-between " +
            className
          }
        >
          <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left">
            Contact us&nbsp;
            <SupportEmailLink />
          </div>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:ml-0 sm:text-right">
            &copy; {new Date().getFullYear()} Laptop POS, All Rights Reserved.
          </div>
          <div className="text-sm">
            <A className="text-gray-500 hover:text-gray-700" href={route("termsAndConditions")}>Terms</A> {" · "}
            <A className="text-gray-500 hover:text-gray-700" href={route('privacyPolicy')}>Privacy Policy</A>
          </div>
        </footer>
      </div>
    </>
  );
}
