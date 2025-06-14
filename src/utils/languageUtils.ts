/**
 * 语言工具函数
 */

/**
 * 清除localStorage中的语言设置，强制重新检测
 */
export const clearLanguageCache = (): void => {
  localStorage.removeItem("i18nextLng");
  console.log("🗑️ Language cache cleared");
};

/**
 * 获取浏览器首选语言
 */
export const getBrowserPreferredLanguage = (): string => {
  const languages = navigator.languages || [navigator.language];
  console.log("🌍 Browser languages:", languages);
  return languages[0] || "en-US";
};

/**
 * 检测并返回最佳匹配的语言
 */
export const detectBestLanguage = (supportedLanguages: string[]): string => {
  const browserLanguages = navigator.languages || [navigator.language];
  
  for (const browserLang of browserLanguages) {
    // 精确匹配
    if (supportedLanguages.includes(browserLang)) {
      return browserLang;
    }
    
    // 部分匹配（例如 zh 匹配 zh-CN）
    const shortLang = browserLang.split("-")[0];
    const matchedLang = supportedLanguages.find(lang => lang.startsWith(shortLang));
    if (matchedLang) {
      return matchedLang;
    }
  }
  
  // 没有匹配则返回第一个支持的语言
  return supportedLanguages[0] || "en-US";
};
