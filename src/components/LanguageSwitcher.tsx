import React from "react";
import { useTranslation } from "react-i18next";
import { supportedLanguages, getLanguageName } from "@/i18n";

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = "",
}) => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className={`language-switcher ${className}`}>
      <label htmlFor="language-select" className="language-label">
        {t("language")}:
      </label>
      <select
        id="language-select"
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="language-select"
      >
        {supportedLanguages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
      <p className="current-language">
        {t("currentLanguage", { language: getLanguageName(i18n.language) })}
      </p>
    </div>
  );
};

export default LanguageSwitcher;
