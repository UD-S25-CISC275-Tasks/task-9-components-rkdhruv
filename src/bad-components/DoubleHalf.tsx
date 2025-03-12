import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({value, setValue}: {value: number, setValue: (n: number) => void}): React.JSX.Element {
    return (
        <Button onClick={() => {
            setValue(value * 2);
        }}>
            Double
        </Button>
    );
}

function Halver({value, setValue}: {value: number, setValue: (n: number) => void}): React.JSX.Element {
    return (
        <Button onClick={() => {
            setValue(value * 0.5);
        }}>
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10);
    
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler value={value} setValue={setValue}></Doubler>
            <Halver value={value} setValue={setValue}></Halver>
        </div>
    );
}
