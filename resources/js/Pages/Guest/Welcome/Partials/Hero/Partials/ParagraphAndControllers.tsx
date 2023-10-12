import SecondaryLink from "@/Components/Buttons/SecondaryLink";

export default function ParagraphAndControllers() {
  return (
    <div className="mx-auto max-w-3xl">
      <p
        className="mb-8 text-xl text-gray-600"
        data-aos="zoom-y-out"
        data-aos-delay="150"
      >
        Streamline your business operations with our user-friendly Point of Sale
        app
      </p>
      <div
        className="mx-auto flex max-w-xs justify-center"
        data-aos="zoom-y-out"
        data-aos-delay="300"
      >
        <SecondaryLink
        href={route('register')}
          className="normal-case shadow-lg px-6 py-4"
        >
          <span className="text-sm tracking-wide">Create FREE Account</span>
        </SecondaryLink>
      </div>
    </div>
  );
}
