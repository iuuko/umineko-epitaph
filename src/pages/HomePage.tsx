import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>{t("pages.home.title")}</h1>
        <p className="description">{t("pages.home.description")}</p>
      </header>

      <main className="page-main">
        <section className="welcome-section">
          <h2>{t("pages.home.welcomeTitle")}</h2>
          <p>{t("pages.home.welcomeMessage")}</p>
        </section>

        <section className="features-section">
          <h3>{t("pages.home.featuresTitle")}</h3>
          <ul>
            <li>{t("pages.home.feature1")}</li>
            <li>{t("pages.home.feature2")}</li>
            <li>{t("pages.home.feature3")}</li>
          </ul>
        </section>

        <div className="language-switcher-container">
          <LanguageSwitcher />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
