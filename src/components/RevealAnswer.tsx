import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState(false);
    
    const handleClick = () => {
        setIsVisible(!isVisible);
    };
    
    return (
        <div>
            <h2>Reveal Answer Component</h2>
            <Button onClick={handleClick}>Reveal Answer</Button>
            {isVisible && <p>42</p>}
        </div>
    );
}