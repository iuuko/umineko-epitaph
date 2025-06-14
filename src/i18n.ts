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
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ja-JP", // 默认语言

    // 语言检测配置
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      // 添加语言代码映射
      lookupLocalStorage: "i18nextLng",
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      // 语言代码转换
      convertDetectedLanguage: (lng: string) => {
        // 处理常见的语言代码映射
        const languageMap: Record<string, string> = {
          zh: "zh-CN",
          "zh-cn": "zh-CN",
          "zh-Hans": "zh-CN",
          "zh-Hans-CN": "zh-CN",
          ja: "ja-JP",
          "ja-jp": "ja-JP",
          en: "en-US",
          "en-us": "en-US",
        };
        const normalizedLng = lng.toLowerCase();
        const mappedLang = languageMap[normalizedLng] || lng;
        return mappedLang;
      },
    },

    interpolation: {
      escapeValue: false, // React 已经默认转义了
    },

    // 默认命名空间
    defaultNS: "translation",
    ns: ["translation"],
  });

// 添加语言变化监听器用于调试
if (import.meta.env.DEV) {
  i18n.on("languageChanged", (lng) => {
    console.log("🔄 Language changed to:", lng);
  });

  i18n.on("initialized", () => {
    console.log("🚀 i18n initialized with language:", i18n.language);
    console.log("🌍 Supported languages:", supportedLanguages.map(l => l.code));
  });
}

export default i18n;
