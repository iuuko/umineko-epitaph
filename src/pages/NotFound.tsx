import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>{t("pages.notFound.title")}</h1>
        <p className="description">{t("pages.notFound.description")}</p>
      </header>

      <main className="page-main">
        <section className="not-found-content">
          <div className="error-code">404</div>
          <p>{t("pages.notFound.message")}</p>
          
          <div className="actions">
            <Link to="/" className="btn btn-primary">
              {t("pages.notFound.backToHome")}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NotFound;
