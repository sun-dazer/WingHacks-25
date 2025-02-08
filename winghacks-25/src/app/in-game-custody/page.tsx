"use client";

import { useState } from 'react';

export default function InGameCustody() {
  const [text, setText] = useState("The judge is talking");
  const [screen, setScreen] = useState(0);

  const handleFirstButtonClick = () => {
    setText("The judge says you're wrong");
  };

  const handleSecondButtonClick = () => {
    setScreen(1);
  };

  const handleThirdButtonClick = () => {
    setScreen(2);
  };

  if (screen === 1) {
    return (
      <div>
        <h1>The judge is talking again</h1>
        <button onClick={() => setText("Button 1 clicked")}>Button 1</button>
        <button onClick={() => setText("Button 2 clicked")}>Button 2</button>
      </div>
    );
  }

  if (screen === 2) {
    return (
      <div>
        <h1>The judge is talking again</h1>
        <button onClick={() => setText("Button 1 clicked")}>Button 1</button>
        <button onClick={() => setText("Button 2 clicked")}>Button 2</button>
        <button onClick={() => setText("Button 3 clicked")}>Button 3</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleFirstButtonClick}>Button 1</button>
      <button onClick={handleSecondButtonClick}>Button 2</button>
      <button onClick={handleThirdButtonClick}>Button 3</button>
    </div>
  );
}
