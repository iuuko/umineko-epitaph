import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useDocTitle = (title: string) => {
    const { t } = useTranslation();
    useEffect(() => {
        document.title = `${title} – ${t("appTitle")}`;
    }, [title]);
};