import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>("short_answer_question");
    
    const handleChangeType = () => {
        setQuestionType(questionType === "multiple_choice_question" 
            ? "short_answer_question" 
            : "multiple_choice_question");
    };
    
    return (
        <div>
            <h2>Change Type Component</h2>
            <Button onClick={handleChangeType}>Change Type</Button>
            <p>
                {questionType === "multiple_choice_question" 
                    ? "Multiple Choice" 
                    : "Short Answer"}
            </p>
        </div>
    );
}