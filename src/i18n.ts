import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 导入语言资源
import zhCN from "@/locales/zh-CN.json";
import jaJP from "@/locales/ja-JP.json";
import enUS from "@/locales/en-US.json";

// 语言资源配置
const resources = {
  "zh-CN": {
    translation: zhCN,
  },
  "ja-JP": {
    translation: jaJP,
  },
  "en-US": {
    translation: enUS,
  },
};

// 支持的语言列表
export const supportedLanguages = [
  { code: "zh-CN", name: "简体中文" },
  { code: "ja-JP", name: "日本語" },
  { code: "en-US", name: "English" },
];

// 获取语言显示名称
export const getLanguageName = (code: string): string => {
  const language = supportedLanguages.find((lang) => lang.code === code);
  return language ? language.name : code;
};

i18n
  // 检测用户语言
  .use(LanguageDetector)
  // 传递 i18n 实例给 react-i18next
  .use(initReactI18next)
  // 初始化 i18next
  .init({
    resources,
    fallbackLng: "ja-JP", // 默认语言
    debug: import.meta.env.DEV, // 开发环境下启用调试

    // 语言检测配置
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false, // React 已经默认转义了
    },

    // 默认命名空间
    defaultNS: "translation",
    ns: ["translation"],
  });

export default i18n;
