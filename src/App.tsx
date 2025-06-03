import React from "react";
import { useTranslation } from "react-i18next";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LanguageSwitcher from "./components/LanguageSwitcher";
import FeatureList from "./components/FeatureList";
import "./App.css";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo-container">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>{t("welcome")}</h1>
        <p className="description">{t("description")}</p>
      </header>

      <main className="app-main">
        <LanguageSwitcher className="language-switcher-container" />
        <FeatureList />
      </main>

      <footer className="app-footer">
        <p>Powered by Vite + React + TypeScript + i18next</p>
      </footer>
    </div>
  );
}

export default App;
