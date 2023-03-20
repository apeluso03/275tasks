// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { ColoredBox } from "./bad-components/ColoredBox";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ShoveBox } from "./bad-components/ShoveBox";
import photo from "./site.png";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    Alex Peluso: UD CISC275 with React Hooks and TypeScript
                </header>
                <h1>My Website!</h1>
                <p>Hello World! Testing HTML</p>
                <img src={photo} alt="UD Logo" />
                <div
                    style={{
                        textAlign: "left"
                    }}
                >
                    <ul>
                        <li>Hello</li>
                        <li>My Name Is Alex Peluso</li>
                        <li>I Am A Student At UD</li>
                    </ul>
                </div>
                <div>
                    <Button onClick={() => console.log("Hello World!")}>
                        Log Hello World
                    </Button>
                </div>
                <div>
                    <Container fluid>
                        <Row>
                            <div
                                style={{
                                    width: 600,
                                    height: 200,
                                    backgroundColor: "red",
                                    border: "5px solid blue",
                                    padding: "50px"
                                }}
                            >
                                <Col>First column.</Col>
                            </div>
                            <div
                                style={{
                                    width: 600,
                                    height: 200,
                                    backgroundColor: "red",
                                    border: "5px solid blue"
                                }}
                            >
                                <Col>Second Column.</Col>
                            </div>
                        </Row>
                    </Container>
                </div>
                <div
                    style={{
                        backgroundColor: "black",
                        color: "white"
                    }}
                ></div>
                <hr></hr>
                <Counter></Counter>
                <hr />
                <RevealAnswer></RevealAnswer>
                <hr />
                <StartAttempt></StartAttempt>
                <hr />
                <TwoDice></TwoDice>
                <hr />
                <ChangeType></ChangeType>
                <hr />
                <CycleHoliday></CycleHoliday>
                <hr />
                <ChooseTeam></ChooseTeam>
                <hr />
                <ColoredBox></ColoredBox>
                <hr />
                <DoubleHalf></DoubleHalf>
                <hr />
                <ShoveBox></ShoveBox>
            </div>
        </>
    );
}

export default App;
