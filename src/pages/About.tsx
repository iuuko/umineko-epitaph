import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useDocTitle } from "@/hooks/useDocTitle";

const About: React.FC = () => {
  const { t } = useTranslation();
  useDocTitle(t("pages.about.title"));

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="max-w-4xl md:w-full bg-white py-2 px-4 sm:x-8 md:px-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-600">
            {t("pages.about.title")}
          </h1>
          <p className="text-md text-gray-600">
            {t("pages.about.version")}: {import.meta.env.VITE_APP_VERSION}
          </p>
        </header>

        <main className="space-y-12">
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2 pb-3 border-b-2 border-blue-500 text-gray-700">
              {t("pages.about.projectTitle")}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8">
              {t("pages.about.projectDescription")}
            </p>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">
                  {t("pages.about.technologiesTitle")}
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-5 text-gray-600">
                  <li>React 19</li>
                  <li>TypeScript</li>
                  <li>Vite</li>
                  <li>React Router DOM</li>
                  <li>React i18next</li>
                  <li>UnoCSS</li>
                  <li>React DnD</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">
                  {t("pages.about.featuresTitle")}
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-5 text-gray-600">
                  <li>{t("pages.about.feature1")}</li>
                  <li>{t("pages.about.feature2")}</li>
                  <li>{t("pages.about.feature3")}</li>
                  <li>{t("pages.about.feature4")}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">
                  {t("pages.about.todoTitle")}
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-5 text-gray-600">
                  <li>{t("pages.about.todo1")}</li>
                  <li>{t("pages.about.todo2")}</li>
                  <li>{t("pages.about.todo3")}</li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-16 pt-8 text-center flex flex-col gap-4">
          <LanguageSwitcher />
          <Navigation />
          <p className="text-sm text-gray-500 my-0">
            <a href="https://lab.iuuko.com" target="_blank" className="text-gray-500 decoration-none hover:underline">UUKO Lab</a> &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default About;
