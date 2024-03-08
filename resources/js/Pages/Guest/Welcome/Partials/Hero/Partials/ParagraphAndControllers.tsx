import SecondaryLink from "@/Components/Buttons/SecondaryLink";
import { useTranslation } from "react-i18next";
import { FaCircleCheck } from "react-icons/fa6";

export default function ParagraphAndControllers() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-3xl">
      <p
        className="mb-8 text-xl text-gray-600"
        data-aos="zoom-y-out"
        data-aos-delay="150"
      >
        {t(
          "Streamline your business operations with our user-friendly Point of Sale app",
        )}
      </p>
      <div
        className="mx-auto flex max-w-xs justify-center"
        data-aos="zoom-y-out"
        data-aos-delay="300"
      >
        <SecondaryLink
          href={route("register.method")}
          className="!bg-gradient-to-br !from-yellow-600  to-secondary-400 px-7 py-4 normal-case shadow-lg "
        >
          <span className="text-sm tracking-wide">Create FREE Account</span>
        </SecondaryLink>
      </div>
      <div className="mt-5 flex translate-x-[20%] flex-col justify-center text-gray-500 md:translate-x-0 md:flex-row md:space-x-4 ">
        <div className="flex ">
          <FaCircleCheck className="mr-1 mt-0.5 text-lg text-green-400" />
          Free Trial
        </div>
        <div className="flex">
          <FaCircleCheck className="mr-1 mt-0.5 text-lg text-green-400" />
          No credit card required
        </div>
        <div className="flex">
          <FaCircleCheck className="mr-1 mt-0.5 text-lg text-green-400" />
          Unlimited access to all features{" "}
        </div>
      </div>
    </div>
  );
}
