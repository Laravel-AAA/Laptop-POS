import { Transition } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import { FaChartSimple, FaReceipt, FaShop } from "react-icons/fa6";
import Solutions from "./Partials/Solutions";

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  useEffect(() => {
    const interval = setTimeout(() => setTab((t) => (t + 1) % 4 || 1), 6000);
    return () => clearTimeout(interval);
  }, [tab]);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative overflow-hidden ">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="pointer-events-none absolute inset-0 top-10 bg-blue-gray-100 bg-opacity-20"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto h-40 w-px -translate-y-1/2 transform bg-gray-300 p-px"></div>

      <div className="relative mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="pt-12 xl:pt-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center xl:pb-16">
            <h1 className="mb-5 text-4xl font-light uppercase tracking-wide text-primary-600">
              Explore the solutions
            </h1>
            <Solutions />
          </div>

          {/* Section content */}
          <div className="xl:grid xl:grid-cols-12 xl:gap-6">
            {/* Content */}
            <div
              className="mx-auto max-w-xl xl:col-span-7 xl:mt-6 xl:w-full xl:max-w-none"
              data-aos="fade-right"
            >
              <div className="mb-8 xl:pr-16">
                <h3 className="text-center text-2xl font-semibold xl:text-left">
                  Simple yet powerful suite of tools
                </h3>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 xl:mb-0">
                <button
                  className={`div-style mb-3 flex items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
                    tab !== 1
                      ? "border-gray-200 bg-white shadow-md hover:shadow-lg"
                      : "border-transparent bg-gray-100"
                  }`}
                  // href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Organize and manage your product inventory
                    </div>
                    <div className="text-gray-600">
                      Efficiently organize product information like names,
                      descriptions, SKUs (Stock Keeping Units), and prices. Stay
                      on top of your inventory with accurate and easily updated
                      product details.
                    </div>
                  </div>
                  <div className="ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                    <FaShop />
                  </div>
                </button>
                <button
                  className={`div-style mb-3 flex items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
                    tab !== 2
                      ? "border-gray-200 bg-white shadow-md hover:shadow-lg"
                      : "border-transparent bg-gray-100"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Process and complete your customer orders
                    </div>
                    <div className="text-gray-600">
                      Quickly and easily process customer orders with features
                      like barcode, payment methods, change calculation, and
                      customizable list. Generate bills with accurate and
                      detailed information.
                    </div>
                  </div>
                  <div className="ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                    <FaReceipt />
                  </div>
                </button>
                <button
                  className={`div-style mb-3 flex items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
                    tab !== 3
                      ? "border-gray-200 bg-white shadow-md hover:shadow-lg"
                      : "border-transparent bg-gray-100"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Monitor and analyze your business
                    </div>
                    <div className="text-gray-600">
                      Gain valuable insights with a clear and simple dashboard
                      that shows your sales, bills, staff performance, and
                      inventory status. Find out which products are selling
                      well, and which ones are out of stock.
                    </div>
                  </div>
                  <div className="ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                    <FaChartSimple />
                  </div>
                </button>
              </div>
            </div>

            {/* Tabs items */}
            <div className="mx-auto mb-16 justify-items-center align-bottom xl:order-1 xl:col-span-5 xl:mb-0">
              <div className="self-end align-bottom transition-all md:mb-52">
                <div
                  className="relative flex flex-col text-center xl:mt-48 xl:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {/* Item 1  16:9*/}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <img
                        className="w-[280px]  min-w-[280px] md:w-[500px] md:min-w-[500px]"
                        src="/assets/screen-tv-mockup/index.png"
                        alt="Mockup laptop to show pages on screen"
                      />
                      <img
                        className="absolute w-[209px] md:w-[372px]"
                        src="/assets/screenshots/2023-11-26 09_43_52-Inventory - Laptop POS - Brave.png"
                        alt="Inventory page with food products"
                        style={{ top: "5.58%", left: "13.8%" }}
                      />
                    </div>
                  </Transition>
                  {/* Item 2   16:9 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <img
                        className="w-[280px]  min-w-[280px] md:w-[500px] md:min-w-[500px]"
                        src="/assets/screen-tv-mockup/index.png"
                        alt="Mockup laptop to show pages on screen"
                      />
                      <img
                        className="absolute w-[209px] md:w-[372px]"
                        src="/assets/screenshots/2023-11-26 10_05_34-Checkout - Laptop POS - Brave.png"
                        alt="Inventory page with food products"
                        style={{ top: "5.58%", left: "13.8%" }}
                      />
                    </div>
                  </Transition>
                  {/* Item 3  16:9*/}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <img
                        className="w-[280px]  min-w-[280px] md:w-[500px] md:min-w-[500px]"
                        src="/assets/screen-tv-mockup/index.png"
                        alt="Mockup laptop to show pages on screen"
                      />
                      <img
                        className="absolute w-[209px] md:w-[372px]"
                        src="/assets/screenshots/2023-11-26 10_43_36-Dashboard - Laptop POS - Brave.png"
                        alt="Inventory page with food products"
                        style={{ top: "5.58%", left: "13.8%" }}
                      />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
