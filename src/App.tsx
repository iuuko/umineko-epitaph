import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./App.css";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app">
      <header className="app-header">
        <h1>{t("welcome")}</h1>
        <p className="description">{t("description")}</p>
      </header>

      <main className="app-main">
        <LanguageSwitcher className="language-switcher-container" />
      </main>

      <footer className="app-footer">
        <p>Powered by Vite + React + TypeScript + i18next</p>
      </footer>
    </div>
  );
}

export default App;
