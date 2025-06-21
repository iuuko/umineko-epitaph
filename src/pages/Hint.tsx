import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDocTitle } from "@/hooks/useDocTitle";
import Navigation from "@/components/Navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Hint: React.FC = () => {
    const { t } = useTranslation();
    useDocTitle(t("pages.hint.title"));

    const [selectedPart, setSelectedPart] = useState(0);

    return (
        <div className="min-h-screen flex flex-col">
            <main className="px-8"
                text="lg">
                <h1>{t("pages.hint.title")}</h1>
                <p text="gray-5">{t("pages.hint.description")}</p>
                <div className="flex gap-6 lt-sm:flex-col">
                    <div className="left flex-1 flex-col bg-orange-8 p-3">
                        {["Part 1", "Part 2", "Part 3"].map((part, index) => (
                            <p
                                key={index}
                                className={`font-bold text-xl my-0 cursor-pointer ${selectedPart === index ? "text-white" : "text-gray-3 hover:text-light"}`}
                                onClick={() => setSelectedPart(index)}>
                                {part}
                            </p>
                        ))}
                    </div>
                    <div className="right flex-1 flex-col bg-orange-8 p-3">
                        <p className="my-0 text-white">
                            {selectedPart === 0 && "Part 1 content: Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                            {selectedPart === 1 && "Part 2 content: Consectetur obcaecati aliquam in facilis eos aliquid doloribus temporibus."}
                            {selectedPart === 2 && "Part 3 content: Libero debitis reiciendis magni corporis, aperiam officia impedit."}
                        </p>
                    </div>
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
    );
};

export default Hint;