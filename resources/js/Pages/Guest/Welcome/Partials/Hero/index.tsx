import Circles from "./Partials/Circles";
import MainTitle from "./Partials/MainTitle";
import ParagraphAndControllers from "./Partials/ParagraphAndControllers";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Illustration behind hero content */}
      <Circles />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-6 pt-32 md:pb-10 md:pt-40">
          {/* Section header */}
          <div className="pb-6 text-center md:pb-8">
            <MainTitle />
            <ParagraphAndControllers />
          </div>
        </div>
      </div>
    </section>
  );
}
