import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [inProgress, setInProgress] = useState(false);
    
    const handleStartQuiz = () => {
        setInProgress(true);
        setAttempts(attempts - 1);
    };
    
    const handleStopQuiz = () => {
        setInProgress(false);
    };
    
    const handleMulligan = () => {
        setAttempts(attempts + 1);
    };
    
    return (
        <div>
            <h2>Start Attempt Component</h2>
            <p>Attempts remaining: {attempts}</p>
            <Button 
                onClick={handleStartQuiz} 
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            {' '}
            <Button 
                onClick={handleStopQuiz}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            {' '}
            <Button 
                onClick={handleMulligan}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}