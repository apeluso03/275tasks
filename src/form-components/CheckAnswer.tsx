import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            <p>Check Answer</p>
            <p>Question: What is my name?</p>
            <div>
                <Form.Group controlId="AnswerForm">
                    <Form.Label>Your Answer:</Form.Label>
                    <Form.Control
                        value={answer}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setAnswer(event.target.value)}
                    />
                </Form.Group>
                <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
            </div>
        </div>
    );
}
