import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you must use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
  return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [initialLeft, initialRight] = [3,4];
    const [leftDie, setLeftDie] = useState<number>(initialLeft);
    const [rightDie, setRightDie] = useState<number>(initialRight);

    const handleRollLeft = () => {
    setLeftDie(d6());
    };

    const handleRollRight = () => {
    setRightDie(d6());
    };

    let gameMessage = null;
    if (leftDie === rightDie) {
        if (leftDie === 1) {
            gameMessage = <p>Lose</p>;
        } else {
            gameMessage = <p>Win</p>;
        }
    }

    return (
    <div>
        <div>
        <span data-testid="left-die">{leftDie}</span> - <span data-testid="right-die">{rightDie}</span>
        </div>
        <div>
        <Button onClick={handleRollLeft}>Roll Left</Button>{' '}
        <Button onClick={handleRollRight}>Roll Right</Button>
        </div>
        {gameMessage}
    </div>
    );
}
