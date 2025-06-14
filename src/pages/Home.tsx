import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-100vh overflow-hidden">
      <div
        className="fixed z-0 pointer-events-none blur w-110vw h-110vh left--5vw top--5vh"
        bg="center no-repeat black"
        style={{
          backgroundImage: 'url(/image/epitaph-bg.webp)',
        }}
        aria-hidden="true"
      />
      <main className="relative z-1 p4"
        text="white"
      >
        <section>
          <h2>{t("pages.home.welcomeTitle")}</h2>
          <p>{t("pages.home.welcomeMessage")}</p>
        </section>

        <section>
          <h3>{t("pages.home.featuresTitle")}</h3>
          <ul>
            <li>{t("pages.home.feature1")}</li>
            <li>{t("pages.home.feature2")}</li>
            <li>{t("pages.home.feature3")}</li>
          </ul>
        </section>
        <div>
          <LanguageSwitcher />
        </div>
      </main>
    </div>
  );
};

export default Home;
