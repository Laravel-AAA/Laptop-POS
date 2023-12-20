import PrimaryLink from "@/Components/Buttons/PrimaryLink";
import { Typography } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa6";

export default function LastSection() {
  return (
    <section className="flex flex-col rounded-t-3xl shadow-xl bg-white mb-8 px-20 py-32 lg:flex-row">
      <div className="grow">
        <Typography variant="h2" className="text-gray-800">
          Ready to get started?
        </Typography>
        <Typography variant="h4" className="text-gray-500">
        Try Laptop POS for free. No credit card required.
        </Typography>
      </div>
      <div className="mt-10 self-center lg:mt-0">
        <PrimaryLink
          href={route("register.method")}
          className="group flex border-none bg-gradient-to-r from-primary-600 to-primary-800 !px-32 !py-3 !text-base normal-case shadow hover:shadow-lg"
        >
          <span>Get Started&nbsp;&nbsp;</span>
          <FaArrowRight className="group-hover:translate-x-2 transition" />
        </PrimaryLink>
      </div>
    </section>
  );
}
