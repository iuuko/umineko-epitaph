import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <header>
        <h1>{t("pages.notFound.title")}</h1>
        <p>{t("pages.notFound.description")}</p>
      </header>

      <main>
        <section>
          <div>404</div>
          <p>{t("pages.notFound.message")}</p>

          <div>
            <Link to="/">{t("pages.notFound.backToHome")}</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NotFound;
