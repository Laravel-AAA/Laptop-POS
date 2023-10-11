import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Hero() {
  return (
    <section className="relative" id="hero">
      {/* Illustration behind hero content */}
      <div
        className="-z-1 pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="leading-tighter mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl"
              data-aos="zoom-y-out"
            >
              <span className="bg-gradient-to-r from-secondary-500 to-teal-400 bg-clip-text text-transparent">
                Simplify{" "}
              </span>
              your sales process and{" "}
              <span className="bg-gradient-to-r from-secondary-500 to-teal-400 bg-clip-text text-transparent">
                boost{" "}
              </span>
              your productivity
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Streamline your business operations with our user-friendly Point
                of Sale app
              </p>
              <div
                className="mx-auto max-w-xs flex justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                  <SecondaryButton
                    onClick={() => alert("Work in progress...")}
                    className="normal-case shadow-lg"
                  >
                    <span className="text-sm tracking-wide">
                      Start free trial
                    </span>
                  </SecondaryButton>
                  <Link
                    href="./#"
                    className="flex items-center px-5 py-3 pt-2 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                  >
                    Learn more
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
