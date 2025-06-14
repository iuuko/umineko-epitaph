import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-100vh overflow-hidden">
      {/* Background */}
      <div
        className="fixed z-0 pointer-events-none blur-md w-110vw h-110vh left--5vw top--5vh"
        bg="center no-repeat black"
        style={{
          backgroundImage: 'url(/image/epitaph-bg.webp)',
        }}
        aria-hidden="true" />
      {/* Content */}
      <main className="relative z-1 p4"
        text="white">
        {/* Title */}
        <div text="amber-400 5xl center"
          font="bold">
          <p>{t("epitaph.title")}</p>
        </div>
        {/* Epitaph */}
        <div text="amber-400 2xl center">
          <p>{t("epitaph.1")}</p>
          <p>{t("epitaph.2")}</p>
          <p>{t("epitaph.3")}</p>
          <p>{t("epitaph.4")}</p>
          <p>{t("epitaph.5")}</p>
          <p>{t("epitaph.6")}</p>
          <p>{t("epitaph.7")}</p>
          <p>{t("epitaph.8")}</p>
          <p>{t("epitaph.9")}</p>
          <p>{t("epitaph.10")}</p>
          <p>{t("epitaph.11")}</p>
          <p>{t("epitaph.12")}</p>
          <p>{t("epitaph.13")}</p>
          <p>{t("epitaph.14")}</p>
          <p>{t("epitaph.15")}</p>
          <p>{t("epitaph.16")}</p>
          <p>{t("epitaph.17")}</p>
          <p>{t("epitaph.18")}</p>
          <p>{t("epitaph.19")}</p>
          <p>{t("epitaph.20")}</p>
          <p>{t("epitaph.21")}</p>
          <p>{t("epitaph.22")}</p>
        </div>
        <div>
          <LanguageSwitcher />
        </div>
      </main>
    </div>
  );
};

export default Home;
