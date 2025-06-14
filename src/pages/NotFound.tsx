import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDocTitle } from "@/hooks/useDocTitle";

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  useDocTitle(t("pages.notFound.title"));

  return (
    <div>
      {/* Background */}
      <div
        className="fixed z-0 pointer-events-none blur-md w-110vw h-110vh left--5vw top--5vh"
        bg="center no-repeat"
        style={{
          backgroundImage: 'url(/image/not-found-bg.webp)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundBlendMode: 'overlay'
        }}
        aria-hidden="true" />
      <div className="relative z-1 px-6 text-white sm:text-xl">
        <header>
          <h1 text="red-6">{t("pages.notFound.title")}</h1>
          <p>{t("pages.notFound.description")}</p>
        </header>

        <main>
          <section>
            <p>{t("pages.notFound.message")}</p>

            <div>
              <Link to="/" text="white">{t("pages.notFound.backToHome")}</Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default NotFound;
