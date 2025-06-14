import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { useDocTitle } from "@/hooks/useDocTitle";

const GoldenLand: React.FC = () => {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const keyParam = searchParams.get('key');
    const permission = keyParam ? true : false;

    useDocTitle(t("pages.goldenLand.title"));

    return (
        permission ? <Permitted /> : <Forbidden />
    );
};

const Permitted: React.FC = () => {
    return (
        <div>
            {/* Background */}
            <div
                className="fixed z-0 pointer-events-none blur-md w-110vw h-110vh left--5vw top--5vh"
                bg="center no-repeat"
                style={{
                    backgroundImage: 'url(/image/golden-land-bg.webp)',
                }}
                aria-hidden="true" />
            {/* Content */}
            <div className="relative z-1 px-8"
                text="rose-9 lg">
                <h1>欢迎来到黄金乡</h1>
                <p>黄金乡施工中...</p>
            </div>
        </div>
    );
};

const Forbidden: React.FC = () => {
    return (
        <div className="px-6">
            <h1>黄金乡</h1>
            <p>黄金乡不欢迎没有请帖的访客</p>
        </div>
    );
};

export default GoldenLand;
