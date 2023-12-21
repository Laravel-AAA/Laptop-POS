import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import { FaGithub } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";

export default function OpenSourceSection() {
  return (
    <section className="overflow-hidden bg-[#475569] py-24">

      <div className="container mx-auto pb-24">
        <div className="flex flex-wrap justify-center">
          <div className="ml-auto mr-auto w-full px-12 lg:mt-28 lg:w-5/12 lg:px-4">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-blue-gray-700 shadow-lg">
              <FaCodeBranch className="text-xl"/>
            </div>
            <h3 className="mb-2 text-3xl font-semibold leading-normal text-white">
              Public Source
            </h3>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed text-blue-gray-300">
              We value transparency and openness, and that is why our system is
              Public Source. You can access its code below and see how it's working.
              You can also report issues, request features, or contribute to our
              system.{" "}
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-blue-gray-300">
              Public Source is free to use for any purpose, as long as you
              follow the terms of {" "}
              <a
                target="_blank"
                href="https://www.gnu.org/licenses/gpl-3.0.en.html"
                className="text-blue-gray-400 hover:underline"
              >
                GNU.
              </a>
              {" "}If you like our system, please give us a star on GitHub.
            </p>
            <a target="_blank" href="https://github.com/Laravel-AAA/Laptop-POS">
              <PrimaryButton className="github-star mt-4 inline-block rounded !bg-blue-gray-900 px-6 py-4 text-sm font-bold shadow hover:!bg-black hover:shadow-lg">
                Source Code
              </PrimaryButton>
            </a>
          </div>
          <div className="relative ml-auto mr-auto mt-32 w-full px-4 lg:w-4/12">
            <FaGithub
              className="fab fa-github right-[-50%] md:right-[-80%] md:text-[47rem] text-[27rem] text-black"
              style={{
                position: "absolute",
                top: "-170px",
                left: "auto",
                opacity: ".8",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
