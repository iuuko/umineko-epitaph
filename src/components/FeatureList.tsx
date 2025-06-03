import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const FeatureList: React.FC = () => {
  const { t } = useTranslation();
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const handleReset = () => {
    setClickCount(0);
    setShowMessage(false);
  };

  return (
    <div className="feature-list">
      <h2>{t("features.title")}</h2>
      <ul className="features">
        <li>✨ {t("features.i18n")}</li>
        <li>🔷 {t("features.typescript")}</li>
        <li>⚡ {t("features.vite")}</li>
        <li>🚀 {t("features.modern")}</li>
      </ul>

      <div className="interactive-demo">
        <h3>{t("messages.hello")}</h3>
        <div className="button-group">
          <button onClick={handleClick} className="primary-button">
            {t("buttons.clickMe")} ({clickCount})
          </button>
          <button onClick={handleReset} className="secondary-button">
            {t("buttons.reset")}
          </button>
        </div>

        {showMessage && (
          <div className="message success">{t("messages.success")}</div>
        )}
      </div>
    </div>
  );
};

export default FeatureList;
