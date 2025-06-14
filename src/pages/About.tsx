import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>{t("pages.about.title")}</h1>
        <p className="description">{t("pages.about.description")}</p>
      </header>

      <main className="page-main">
        <section className="about-content">
          <h2>{t("pages.about.projectTitle")}</h2>
          <p>{t("pages.about.projectDescription")}</p>
          
          <h3>{t("pages.about.technologiesTitle")}</h3>
          <ul>
            <li>React 19</li>
            <li>TypeScript</li>
            <li>Vite</li>
            <li>React Router DOM</li>
            <li>React i18next</li>
          </ul>

          <h3>{t("pages.about.featuresTitle")}</h3>
          <ul>
            <li>{t("pages.about.feature1")}</li>
            <li>{t("pages.about.feature2")}</li>
            <li>{t("pages.about.feature3")}</li>
            <li>{t("pages.about.feature4")}</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default About;
