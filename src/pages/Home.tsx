import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import { useDocTitle } from "@/hooks/useDocTitle";

const Home: React.FC = () => {
  const { t } = useTranslation();
  useDocTitle(t("pages.home.title"));

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
        text="white sm">
        {/* Title */}
        <div text="amber-400 5xl center"
          font="bold"
          lt-sm="text-3xl">
          <p>{t("epitaph.title")}</p>
        </div>
        {/* Epitaph */}
        <div text="amber-400 2xl center"
          lt-sm="text-sm">
          {[...Array(22).keys()].map((i) => (
            <p key={i}>{t(`epitaph.${i + 1}`)}</p>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-1"
          text="gray-400 center">
          <Navigation />
        </div>
      </main>
    </div>
  );
};

export default Home;
