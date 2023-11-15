import SupportEmailLink from "@/Components/SupportEmailLink";

export default function Footer({ className = "" }: { className?: string }) {
  return (
    // {/* <hr className="mt-24 border-gray-300" /> */}

    <>
       {/* <hr className="mt-24 border-gray-300" /> */}
      <div className="pb-20"></div>
      <div className="absolute bottom-0 w-full">
        <footer
          className={
            "flex min-h-full w-full my-2 flex-wrap-reverse justify-center px-6 py-4 sm:items-center sm:justify-between " +
            className
          }
        >
          <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left">

              Contact us&nbsp;
<SupportEmailLink/>
          </div>

          <div className="ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:ml-0 sm:text-right">
            &copy; {new Date().getFullYear()} Laptop POS, All Rights Reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
