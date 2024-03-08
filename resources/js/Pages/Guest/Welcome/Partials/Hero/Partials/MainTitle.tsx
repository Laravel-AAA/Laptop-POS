import { useTranslation } from "react-i18next";
export default function MainTitle() {
  const { t } = useTranslation();
  return (
    <h1
      className="mb-4 text-5xl font-extrabold tracking-tighter md:text-7xl"
      data-aos="zoom-y-out"
    >
      <span className="bg-gradient-to-r from-teal-400 to-secondary-500 bg-clip-text text-transparent">
        {t("Simplify") + " "}
      </span>
      {t("your sales process and") + " "}
      <span className="bg-gradient-to-r from-teal-400 to-secondary-500 bg-clip-text text-transparent">
        {t("boost")}{" "}
      </span>
      {t("your productivity")}
    </h1>
  );
}
