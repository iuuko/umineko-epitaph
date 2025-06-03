import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { supportedLanguages, getLanguageName } from "@/i18n";

interface LanguagePreference {
  currentLanguage: string;
  currentLanguageName: string;
  availableLanguages: typeof supportedLanguages;
  changeLanguage: (languageCode: string) => void;
  isLanguageSupported: (languageCode: string) => boolean;
}

/**
 * 自定义Hook：管理语言偏好设置
 * 提供语言切换、语言检测等功能
 */
export const useLanguagePreference = (): LanguagePreference => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  // 监听语言变化
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  // 切换语言
  const changeLanguage = (languageCode: string) => {
    if (isLanguageSupported(languageCode)) {
      i18n.changeLanguage(languageCode);
    } else {
      console.warn(`Language ${languageCode} is not supported`);
    }
  };

  // 检查语言是否支持
  const isLanguageSupported = (languageCode: string): boolean => {
    return supportedLanguages.some((lang) => lang.code === languageCode);
  };

  return {
    currentLanguage,
    currentLanguageName: getLanguageName(currentLanguage),
    availableLanguages: supportedLanguages,
    changeLanguage,
    isLanguageSupported,
  };
};
