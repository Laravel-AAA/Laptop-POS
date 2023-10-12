import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import TextLink from "@/Components/TextLink";
import Circles from "./Partials/Circles";
import MainTitle from "./Partials/MainTitle";
import ParagraphAndControllers from "./Partials/ParagraphAndControllers";

export default function Hero() {
  return (
    <section className="relative" id="hero">
      {/* Illustration behind hero content */}
      <Circles />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <MainTitle />
            <ParagraphAndControllers />
          </div>
        </div>
      </div>
    </section>
  );
}
