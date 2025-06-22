import { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useDocTitle } from "@/hooks/useDocTitle";
import Navigation from "@/components/Navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";



const Hint: React.FC = () => {
    const { t } = useTranslation();
    useDocTitle(t("pages.hint.title"));
    const [selectedPart, setSelectedPart] = useState(0);

    return (
        <div className="relative min-h-screen">
            {/* Main Background */}
            <div
                className="fixed inset-0 z-0 pointer-events-none w-110vw h-110vh 
                left--5vw top--5vh blur-md bg-no-repeat bg-center bg-cover"
                style={{
                    backgroundImage: 'url(/image/hint-bg.webp)',
                }}
                aria-hidden="true" />
            {/* Content Layer */}
            <div className="relative z-1 min-h-screen flex flex-col text-white">
                <main className="px-8 text-lg">
                    <h1>{t("pages.hint.title")}</h1>
                    <p text="gray-3">{t("pages.hint.description")}</p>
                    <div className="flex gap-8 flex-col sm:flex-row">
                        <HintLeft selectedPart={selectedPart} setSelectedPart={setSelectedPart} />
                        <HintRight selectedPart={selectedPart} />
                    </div>
                </main>
                <footer className="mt-16 pt-8 text-center flex flex-col gap-4">
                    <LanguageSwitcher />
                    <Navigation />
                    <p className="text-sm text-gray-500 my-0">
                        <a href="https://lab.iuuko.com" target="_blank" className="text-gray-500 decoration-none hover:underline">UUKO Lab</a> &copy; {new Date().getFullYear()}
                    </p>
                </footer>
            </div>
        </div>
    );
};

const HintLeft: React.FC<{ selectedPart: number, setSelectedPart: (part: number) => void }>
    = ({ selectedPart, setSelectedPart }) => {
        const { t } = useTranslation();

        return (
            <div className="relative w-full min-h-80 sm:w-2/5 flex-col ">
                {/* Left Background - 左侧区域背景 */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none rounded-lg"
                    style={{
                        backgroundImage: 'url(/image/hint-left-bg.webp)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        filter: 'blur(0.5px) brightness(0.8) opacity(0.9)',
                        transform: 'scale(1.02)',
                    }}
                    aria-hidden="true" />

                {/* Left Content */}
                <div className="relative z-1 p-2 sm:p-4 select-none">
                    {[...Array(3).keys()].map((index) => (
                        <p
                            key={index}
                            className={`font-bold text-2xl my-2 cursor-pointer transition-colors duration-200 ${selectedPart === index
                                ? "text-white drop-shadow-lg"
                                : "text-gray-400 hover:text-white hover:drop-shadow-md"
                                }`}
                            onClick={() => setSelectedPart(index)}>
                            {t(`pages.hint.part${index + 1}.title`)}
                        </p>
                    ))}
                </div>
            </div>
        );
    };

const HintRight: React.FC<{ selectedPart: number }> = ({ selectedPart }) => {
    return (
        <div className="relative w-full min-h-80 sm:w-3/5 flex-col">
            {/* Right Background - 右侧区域背景 */}
            <div
                className="absolute inset-0 z-0 pointer-events-none rounded-lg"
                style={{
                    backgroundImage: 'url(/image/hint-right-bg.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(0.5px) brightness(0.8) opacity(0.9)',
                    transform: 'scale(1.02)',
                }}
                aria-hidden="true" />

            {/* Right Content */}
            <div className="relative z-1 p-2 sm:p-4">
                <p className="my-0 text-white leading-relaxed drop-shadow-md">
                    <Trans i18nKey={`pages.hint.part${selectedPart + 1}.description`}
                        components={{
                            bold: <b />,
                            red: <span text="red-6" />,
                            ul: <ul />,
                            li: <HintItem selectedPart={selectedPart} />,
                            map: <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer"
                                className="underline text-white" />
                        }} />
                </p>
            </div>
        </div>
    )
}

const HintItem: React.FC<{ children?: React.ReactNode, selectedPart: number }> = ({ children, selectedPart }) => {
    const { t } = useTranslation();
    const [isRevealed, setIsRevealed] = useState(false);
    // reset isRevealed when selectedPart changes
    useEffect(() => { setIsRevealed(false); }, [selectedPart]);

    return (
        <li
            className={`mt-2 relative ${isRevealed ? 'cursor-default' : 'cursor-pointer'}`}
            onClick={() => setIsRevealed(true)}>
            {/* 内容 */}
            <div>
                {children}
            </div>
            {/* 遮罩层 */}
            {!isRevealed && (
                <div
                    className="absolute inset-0 bg-gray-6 bg-opacity-100 select-none
                               rounded-sm flex items-center justify-center text-white text-sm">
                    {t("pages.hint.clicktoview")}
                </div>
            )}
        </li>
    );
};

export default Hint;