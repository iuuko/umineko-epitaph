import { useState } from "react";

const Quadrillion: React.FC = () => {
    const [quadState, setQuadState] = useState<string[]>(() => Array.from("Quadrillion"));
    const [phase, setPhase] = useState<number>(0);

    const handleClick = (_: React.MouseEvent<HTMLSpanElement>, index: number) => {
        if (phase === 0) {
            // 创建状态的新副本并更新
            const newQuadState = [...quadState];
            newQuadState[index] = "";
            setQuadState(newQuadState);
            // 不需要手动移除元素，React 会根据新状态更新 DOM
            // nextPhase(phase);
        }
    };

    const nextPhase = (currentPhase: number) => {
        if (currentPhase === 0) {
            const expectedState = ["Q", "u", "a", "d", "r", "i", "l", "l", "i", "o", "n"];
            if (quadState.every((char, index) => char === expectedState[index]))
                setPhase(1);
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center overflow-hidden p-4">
            <div className="text-5xl font-bold flex lt-sm:gap-1 sm:gap-2 md:gap-3">
                {quadState.map((char, index) => (char &&
                    <span
                        key={index}
                        onClick={(e) => handleClick(e, index)}>
                        {char}
                    </span>
                ))}
            </div>
            <p className="text-center animate-pulse">You only have 1 of quadrillion probability of being blessed.</p>
        </div>
    );
};

export default Quadrillion;
