import { Transition } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";

export default function Solutions() {
  const businesses = [
    "grocery store",
    "bookstore",
    "clothing boutique",
    "electronics store",
    "gift shop",
    "café",
    "ice cream truck",
    "hair salon",
    "Restaurant",
    "food truck",
    "street vendor",
    "florist",
    "pharmacy",
    "pet store",
    "souvenir shop",
  ];
  const [business, setBusiness] = useState<string>("grocery store");

  useEffect(() => {
    const interval = setInterval(() => {
      setBusiness(
        (b) => businesses[(businesses.indexOf(b) + 1) % businesses.length],
      );
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-6 justify-center text-xl text-gray-600 md:-ml-20">
      {/*The reason for the complexity is when using class 'text-center' with a changing width sentence (hence: dynamic list of businesses) will make the whole sentence re-align to center every time which is a bad thing */}
      <span>Whatever your use case,&nbsp;</span>
      <div className="block md:inline ">
        <div className="-ml-20 inline md:ml-0">
          <span className="font-semibold text-gray-800">Laptop</span>
          &thinsp;
          <span className="font-semibold text-primary-700">POS</span> built
          for&nbsp;
          {/* <div
            ref={solutionsContainer}
            className="absolute inline min-w-full text-left text-secondary-500 "
          > */}
            {businesses.map((b, i) => (
              <Transition
                key={i}
                appear={true}
                show={b == business}
                enter="transition ease-in-out duration-700 transform order-first"
                enterFrom="opacity-0 translate-y-12"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-12"
                unmount={false}
                className="absolute inline min-w-full text-left text-secondary-600 "
              >
                {b}
              </Transition>
            ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
