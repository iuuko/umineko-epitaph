import { useState } from "react";
import {
    DndContext,
    closestCenter,
    PointerSensor,
    TouchSensor,
    useSensor,
    useSensors,
    type DragEndEvent,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    useSortable,
    horizontalListSortingStrategy,
} from '@dnd-kit/sortable';

const Quadrillion: React.FC = () => {
    const [quadState, setQuadState] = useState<string[]>(() => Array.from("Quadrillion"));
    const [phase, setPhase] = useState<number>(0);

    // sortable sensors
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5, // 避免点击误触拖拽
            },
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 150,
                tolerance: 5,
            },
        })
    );
    // sortable drag end handler
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = parseInt(active.id as string);
            const newIndex = parseInt(over?.id as string);
            setQuadState((items) => arrayMove(items, oldIndex, newIndex));
        }
    };
    // handle click event in per phase
    const handleClick = (index: number) => {
        if (phase === 0) {
            // remove the character at the index
            const newQuadState = [...quadState];
            newQuadState[index] = "";
            setQuadState(newQuadState);
            nextPhase(phase);
        }
    };
    // handle next phase
    const nextPhase = (currentPhase: number) => {
        if (currentPhase === 0) {
            // const expectedState = ["Q", "u", "a", "d", "r", "i", "l", "l", "i", "o", "n"];
            // if (quadState.every((char, index) => char === expectedState[index]))
            //     setPhase(1);
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center overflow-hidden p-4 select-none">
            <div className="text-5xl font-bold flex lt-sm:gap-1 sm:gap-2 md:gap-3 touch-none">
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={quadState.map((_, index) => index.toString())}
                        strategy={horizontalListSortingStrategy}>
                        {quadState.map((char, index) => (char &&
                            <SortableItem
                                id={index.toString()}
                                char={char}
                                onClick={handleClick} />
                        ))}
                    </SortableContext>
                </DndContext>
            </div>
            <p className="text-center animate-pulse">You only have 1 of quadrillion probability of being blessed.</p>
        </div>
    );
};

// sortable component
const SortableItem = ({
    id,
    char,
    onClick,
}: {
    id: string;
    char: string;
    onClick: (index: number) => void;
}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = {
        transform: transform?.toString(),
        transition,
    };

    return (
        <span
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            onClick={() => onClick(parseInt(id))}>
            {char}
        </span>
    );
}

export default Quadrillion;
