import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("red");
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "black"
    ];

    return (
        <div>
            <p>Change Color</p>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        style={{ backgroundColor: `${color}` }}
                        type="radio"
                        name={color}
                        onChange={(e) => setChosenColor(e.target.value)}
                        id={color}
                        label={color}
                        key={color}
                        value={color}
                        checked={chosenColor === color}
                    />
                ))}
                <br></br>
                Your Choice:{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: `${chosenColor}` }}
                >
                    {chosenColor}
                </span>
            </div>
        </div>
    );
}
