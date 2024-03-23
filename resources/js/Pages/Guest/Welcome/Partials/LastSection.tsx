import PrimaryLink from "@/Components/Buttons/PrimaryLink";
import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa6";

export default function LastSection() {

  const { t } = useTranslation();
  return (
    <section id="ready-to-get-started" className="mb-8 -mt-8 flex flex-col rounded-t-3xl bg-white px-4 py-32 shadow-lg md:px-14 lg:flex-row lg:px-24">
      <div className="w-full">
        <Typography variant="h2" className="text-gray-800">
          { t( "Ready to get started?" ) }
        </Typography>
        <Typography variant="h4" className="text-gray-500">
          { t( "Try Laptop POS for free. No credit card required." ) }
        </Typography>
      </div>
      <div className="mt-10 w-full  self-center lg:mt-0">
        <PrimaryLink
          href={route("register.method")}
          className="group flex  ml-auto mr-auto lg:ml-auto lg:mr-0 border-none bg-gradient-to-r from-primary-600 to-primary-800 sm:w-96 w-full justify-center !py-3 !text-base normal-case shadow hover:shadow-lg"
        >
          <span>
            { t( "Get{{space}}Started",{space:'\u00A0'/* &nbsp; */} ) }
            &nbsp;&nbsp;</span>
          <FaArrowRight className="transition group-hover:translate-x-2" />
        </PrimaryLink>
      </div>
    </section>
  );
}
