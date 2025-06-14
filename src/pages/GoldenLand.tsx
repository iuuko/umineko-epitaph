import { useTranslation } from "react-i18next";
import { useDocTitle } from "@/hooks/useDocTitle";

const GoldenLand: React.FC = () => {
    const { t } = useTranslation();
    useDocTitle(t("pages.goldenLand.title"));

    return (
        <div>
            <h1>{t("pages.goldenLand.title")}</h1>
        </div>
    );
};

export default GoldenLand;
