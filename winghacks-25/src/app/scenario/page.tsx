"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./styles.css";

export default function Scenario() {
  const router = useRouter();
  const [spritePosition, setSpritePosition] = useState({ top: 75, left: 1200 });
  const [direction, setDirection] = useState("idle"); 
  const [isMoving, setIsMoving] = useState(false); 
  const [showPopup, setShowPopup] = useState(true); 

  const handleKeyDown = (e: KeyboardEvent) => {
    let newTop = spritePosition.top;
    let newLeft = spritePosition.left;

    switch (e.key) {
      case "ArrowUp":
        newTop -= 3; 
        setDirection("up");
        setIsMoving(true); 
        break;
      case "ArrowDown":
        newTop += 3; 
        setDirection("down");
        setIsMoving(true); 
        break;
      case "ArrowLeft":
        newLeft -= 3; 
        setDirection("left");
        setIsMoving(true); 
        break;
      case "ArrowRight":
        newLeft += 3; 
        setDirection("right");
        setIsMoving(true); 
        break;
      case " ":
        setShowPopup(false); 
        break;
      default:
        return;
    }

    setSpritePosition({ top: newTop, left: newLeft });
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
      setIsMoving(false); 
      setDirection("idle"); 
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [spritePosition]);

  return (
    <div className="map-background-container">
      <
    </div>
  );
}
