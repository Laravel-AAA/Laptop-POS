import React from "react";
import { FaExpandAlt } from "react-icons/fa";
import { FaGaugeHigh, FaLock, FaShield } from "react-icons/fa6";

export default function PoweredBySection() {
  return (
    <section className="relative mt-64 bg-blue-gray-100 bg-opacity-50 pb-32 md:mt-20">
      <div
        className="absolute bottom-auto left-0 right-0 top-0 -mt-20 w-full"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="fill-current text-blue-gray-100 opacity-50"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="-mt-32 ml-auto mr-auto w-10/12 px-1 sm:px-8 md:w-6/12 md:px-4 lg:w-4/12">
            <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-primary-600 shadow-lg">
              <img
                alt="..."
                src="assets/cloud-service-cut.jpg"
                className="w-full rounded-t-lg align-middle"
              />
              <blockquote className="relative mb-4 p-8">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 block w-full"
                  style={{ height: "95px", top: "-94px" }}
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="fill-current text-primary-600"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-blue-gray-50">
                  Powered by Amazon Web Services
                </h4>
                <p className="text-md mt-2 font-light text-blue-gray-50">
                  Our system is built on the Amazon Web Services (AWS) platform,
                  the world’s most comprehensive and broadly adopted cloud
                  provider
                </p>
              </blockquote>
            </div>
          </div>
          <div className="w-full px-4 lg:w-7/12">
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mt-4 flex flex-col">
                  <div className="flex-auto px-4 py-5">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-center shadow-md">
                      <FaLock className="text-lg text-blue-gray-600" />
                    </div>
                    <h6 className="mb-1 text-xl font-semibold">Secure </h6>
                    <p className="text-blueGray-500 mb-4">
                      AWS protects our system and your data with the most
                      advanced security features, such as encryption, firewalls,
                      and access management.
                    </p>
                  </div>
                </div>
                <div className="relative flex min-w-0 flex-col">
                  <div className="flex-auto px-4 py-5">
                    <div className="text-blueGray-500 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-center shadow-md">
                      <FaGaugeHigh className="text-xl text-blue-gray-600" />
                    </div>
                    <h6 className="mb-1 text-xl font-semibold">Fast</h6>
                    <p className="text-blueGray-500 mb-4">
                      High-performance computing, networking, and database
                      services that allow us to process large amounts of data
                      and deliver results in real-time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-6/12">
                <div className="relative mt-4 flex min-w-0 flex-col">
                  <div className="flex-auto px-4 py-5">
                    <div className="text-blueGray-500 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-center shadow-md">
                      <FaShield className="text-lg text-blue-gray-600" />
                    </div>
                    <h6 className="mb-1 text-xl font-semibold">Reliable</h6>
                    <p className="text-blueGray-500 mb-4">
                      Our system is always available and resilient to failures,
                      with 99.99% uptime.
                    </p>
                  </div>
                </div>
                <div className="relative flex min-w-0 flex-col">
                  <div className="flex-auto px-4 py-5">
                    <div className="text-blueGray-500 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-center shadow-md">
                      <FaExpandAlt className="text-lg text-blue-gray-600" />
                    </div>
                    <h6 className="mb-1 text-xl font-semibold">Scalable</h6>
                    <p className="text-blueGray-500 mb-4">
                      Tools such as auto-scaling and elastic load balancing,
                      enable us to scale without compromising perfor&shy;mance,
                      availability, or security
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 top-auto -mt-20 w-full"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="fill-current text-[#475569]"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      {/* <div className="container mx-auto overflow-hidden pb-20">
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto mt-48 w-full px-12 md:w-4/12 md:px-4">
            <div className="text-blueGray-500 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
              <i className="fas fa-sitemap text-xl"></i>
            </div>
            <h3 className="mb-2 text-3xl font-semibold leading-normal">
              CSS Components
            </h3>
            <p className="text-blueGray-600 mb-4 mt-4 text-lg font-light leading-relaxed">
              Every element that you need in a product comes built in as a
              component. All components fit perfectly with each other and can
              have different colours.
            </p>
            <div className="block pb-6">
              <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
                Buttons
              </span>
              <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
                Inputs
              </span>
              <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
                Labels
              </span>
              <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
                Menus
              </span>
              <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
                Navbars
              </span>
              <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
                Pagination
              </span>
              <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
                Progressbars
              </span>
              <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
                Typography
              </span>
            </div>
            <a
              className="text-blueGray-700 hover:text-blueGray-500 font-bold transition-all duration-150 ease-linear"
              href="/learning-lab/tailwind-starter-kit/documentation/css/alerts"
            >
              View All{" "}
              <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
            </a>
          </div>
          <div className="ml-auto mr-auto mt-32 w-full px-4 md:w-5/12">
            <div className="relative mb-6 mt-48 flex w-full min-w-0 flex-col md:mt-0">
              <img
                alt="..."
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-btn.png"
                className="absolute w-full rounded align-middle shadow-lg"
                style={{
                  maxWidth: "100px",
                  left: "145px",
                  top: "-29px",
                  zIndex: 3,
                }}
              />
              <img
                alt="..."
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-profile-card.png"
                className="absolute w-full rounded-lg align-middle shadow-lg"
                style={{ maxWidth: "210px", left: "260px", top: "-160px" }}
              />
              <img
                alt="..."
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-info-card.png"
                className="absolute w-full rounded-lg align-middle shadow-lg"
                style={{
                  maxWidth: "180px",
                  left: "40px",
                  top: "-225px",
                  zIndex: 2,
                }}
              />
              <img
                alt="..."
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-info-2.png"
                className="absolute w-full rounded-lg align-middle shadow-2xl"
                style={{ maxWidth: "200px", left: "-50px", top: "25px" }}
              />
              <img
                alt="..."
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-menu.png"
                className="absolute w-full rounded align-middle shadow-lg"
                style={{ maxWidth: "580px", left: "-20px", top: "210px" }}
              />
              <img
                alt="..."
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-btn-pink.png"
                className="absolute w-full rounded align-middle shadow-xl"
                style={{ maxWidth: "120px", left: "195px", top: "95px" }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center pt-32">
          <div className="ml-auto mr-auto mt-32 w-full px-4 md:w-6/12">
            <div className="relative flex flex-wrap justify-center">
              <div className="my-4 w-full px-4 lg:w-6/12">
                <div className="bg-lightBlue-500 rounded-lg p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    ReactJS
                  </p>
                  <p className="mt-2 text-base text-white opacity-75">
                    A JavaScript library for building user interfaces maintaned
                    by Facebook and community of developers.
                  </p>
                </div>
                <div className="bg-emerald-500 mt-8 rounded-lg p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    Vue.js
                  </p>
                  <p className="mt-2 text-base text-white opacity-75">
                    An open-source Model–view–viewmodel JavaScript framework for
                    building user interfaces.
                  </p>
                </div>
              </div>
              <div className="my-4 w-full px-4 lg:mt-16 lg:w-6/12">
                <div className="rounded-lg bg-orange-500 p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    JavaScript
                  </p>
                  <p className="mt-2 text-base text-white opacity-75">
                    Object-oriented programming language that conforms to the
                    ECMAScript specification.
                  </p>
                </div>
                <div className="mt-8 rounded-lg bg-red-600 p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    Angular
                  </p>
                  <p className="mt-2 text-base text-white opacity-75">
                    a JavaScript-based open-source front-end web framework
                    mainly maintained by Google.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-auto mr-auto mt-48 w-full px-12 md:w-4/12 md:px-4">
            <div className="text-blueGray-500 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
              <i className="fas fa-drafting-compass text-xl"></i>
            </div>
            <h3 className="mb-2 text-3xl font-semibold leading-normal">
              Javascript Components
            </h3>
            <p className="text-blueGray-600 mb-4 mt-4 text-lg font-light leading-relaxed">
              In order to create a great User Experience some components require
              JavaScript. In this way you can manipulate the elements on the
              page and give more options to your users.
            </p>
            <p className="text-blueGray-600 mb-4 mt-4 text-lg font-light leading-relaxed">
              We created a set of Components that are dynamic and come to help
              you.
            </p>
            <div className="block pb-6">
              <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
                Alerts
              </span>
              <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
                Dropdowns
              </span>
              <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
                Menus
              </span>
              <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
                Modals
              </span>
              <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
                Navbars
              </span>
              <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
                Popovers
              </span>
              <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
                Tabs
              </span>
              <span className="text-blueGray-500 mr-2 mt-2 inline-block rounded-full bg-white px-2 py-1 text-xs font-semibold uppercase uppercase last:mr-0">
                Tooltips
              </span>
            </div>
            <a
              className="text-blueGray-700 hover:text-blueGray-500 font-bold transition-all duration-150 ease-linear"
              href="/learning-lab/tailwind-starter-kit/documentation/vue/alerts"
            >
              View all{" "}
              <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
            </a>
          </div>
        </div>
      </div> */}
      {/* <div className="container mx-auto px-4 pb-32 pt-48">
        <div className="flex flex-wrap items-center">
          <div className="ml-auto w-full px-12 md:w-5/12 md:px-4">
            <div className="md:pr-12">
              <div className="text-blueGray-500 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <i className="fas fa-file-alt text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">Complex Documentation</h3>
              <p className="text-blueGray-500 mt-4 text-lg leading-relaxed">
                This extension comes a lot of fully coded examples that help you
                get started faster. You can adjust the colors and also the
                programming language. You can change the text and images and
                you're good to go.
              </p>
              <ul className="mt-6 list-none">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-blueGray-500 bg-blueGray-50 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        Built by Developers for Developers
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-blueGray-500 bg-blueGray-50 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                        <i className="fab fa-html5"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        Carefully crafted code for Components
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-blueGray-500 bg-blueGray-50 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase">
                        <i className="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        Dynamic Javascript Components
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mr-auto w-full px-4 pt-24 md:w-6/12 md:pt-0">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-xl"
              style={{
                transform:
                  "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
              }}
              src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/documentation.png"
            />
          </div>
        </div>
      </div>
      <div className="mt-24 flex flex-wrap justify-center text-center">
        <div className="w-full px-12 md:w-6/12 md:px-4">
          <h2 className="text-4xl font-semibold">Beautiful Example Pages</h2>
          <p className="text-blueGray-500 mb-4 mt-4 text-lg leading-relaxed">
            Tailwind Starter Kit is a completly new product built using our past
            experience in web templates. Take the examples we made for you and
            start playing with them.
          </p>
        </div>
      </div> */}
    </section>
  );
}
