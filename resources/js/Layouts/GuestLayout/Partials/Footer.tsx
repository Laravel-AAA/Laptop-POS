export default function Footer() {
  return (
    <>
      {/* <hr className="mt-24 border-gray-300" /> */}
      <footer className="flex flex-wrap-reverse justify-center p-6 px-6 sm:items-center sm:justify-between">
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left">
          <div className="flex items-center gap-4">
            <a
              href="mailto:laptopPos1@gmail.com"
              className="group inline-flex items-center leading-10 hover:text-gray-700 focus:rounded-sm focus:outline focus:outline-2 focus:outline-primary-500 dark:hover:text-white"
            >
              Contact us&nbsp;
              <span className="font-bold"> laptopPos1@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:ml-0 sm:text-right">
          &copy; {new Date().getFullYear()} Laptop POS, All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
