import BetterLink from "@/Components/Buttons/BetterLink";
import PrimaryMaterialBtn from "@/Components/Buttons/Material/PrimaryMaterialBtn";
import PrimaryLink from "@/Components/Buttons/PrimaryLink";
import { Typography } from "@material-tailwind/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function LastSection() {
  return (
    <section className="flex flex-col bg-white bg-opacity-70 px-20 py-32 lg:flex-row">
      <div className="grow">
        <Typography variant="h2" className="text-gray-800">
          Ready to get started?
        </Typography>
        <Typography variant="h3" className="text-gray-500">
          Get in touch or create an account.
        </Typography>
      </div>
      <div className="mt-10 self-center lg:mt-0">
        <PrimaryLink
          href={route("register.method")}
          className=" flex border-none bg-gradient-to-r from-primary-600 to-primary-800 !px-32 !py-3 !text-base normal-case shadow hover:shadow-lg"
        >
          <span>Register&nbsp;</span>
          <FaArrowRight />
        </PrimaryLink>
      </div>
    </section>
  );
}
