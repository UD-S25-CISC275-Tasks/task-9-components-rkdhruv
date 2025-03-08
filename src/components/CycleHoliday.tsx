import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🎃" | "🥚" | "🪔" | "🪁";

export function CycleHoliday(): React.JSX.Element {

    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("🎄");
    
    const alphabeticalOrder: Record<Holiday, Holiday> = {
        "🎄": "🥚",
        "🥚": "🪔",
        "🪔": "🎃",
        "🎃": "🪁",
        "🪁": "🎄"
    };
    
    const yearOrder: Record<Holiday, Holiday> = {
        "🎄": "🪁",
        "🪁": "🥚",
        "🥚": "🪔",
        "🪔": "🎃",
        "🎃": "🎄"
    };
    
    const handleAdvanceByAlphabet = () => {
        setCurrentHoliday(alphabeticalOrder[currentHoliday]);
    };
    
    const handleAdvanceByYear = () => {
        setCurrentHoliday(yearOrder[currentHoliday]);
    };
    
    return (
        <div>
            <h2>Cycle Holiday Component</h2>
            <p>Holiday: {currentHoliday}</p>
            <Button onClick={handleAdvanceByAlphabet}>Advance by Alphabet</Button>
            {" "}
            <Button onClick={handleAdvanceByYear}>Advance by Year</Button>
        </div>
    );
}