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
          {[...Array(22).keys()].map((i) => (
            <p key={i}>{t(`epitaph.${i + 1}`)}</p>
          ))}
        </div>
        <div>
          <LanguageSwitcher />
        </div>
      </main>
    </div>
  );
};

export default Home;
