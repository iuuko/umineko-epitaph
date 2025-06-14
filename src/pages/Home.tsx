import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <header>
        <h1>{t("pages.home.title")}</h1>
        <p text="red">{t("pages.home.description")}</p>
      </header>

      <main>
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
