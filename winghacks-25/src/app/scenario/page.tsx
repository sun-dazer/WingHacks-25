"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./styles.css";
import {useUser} from "../UserContext";


export default function Scenario() {
  const router = useRouter();
  const [spritePosition, setSpritePosition] = useState({ top: 75, left: 1200 });
  const [direction, setDirection] = useState("idle");
  const [isMoving, setIsMoving] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [currentLocation, setCurrentLocation] = useState("map");
  const [visited, setVisited] = useState<Map<string, boolean>>(new Map([
    ["house1", false],
    ["circuit", false],
    ["shops", false],
    ["lawyer", false],
    ["court", false]
  ]));
  const {caseType} = useUser();

  type Location = {
    top: number;
    bottom: number;
    left: number;
    right: number;
    background: string;
    message: string;
  };
  
  type Locations = {
    [key: string]: Location;
  };
  
  const locations: Locations = {
    house1: { top: -15, bottom: 147, left: 665, right: 1085, background: "/images/house inside.png", message: " Step 1: Complete the Paperwork \nBegin by preparing the necessary documents, including the petition.\nWhat is a petition? A petition is a formal written request asking the court to take legal action"},
    circuit: { top: 9, bottom: 123, left: 186, right: 366, background: "/images/panda inside.png", message: "Step 2: File Your Case\nOnce you have completed the petition, you must file it with the clerk of the circuit court in your local jurisdiction. This officially opens your case."},
    shops: { top: 261, bottom: 372, left: 399, right: 846, background: "/images/phone inside.png", message: "Step 3: Notify the Other Party\nAfter filing, you are required to notify the other party. This process, known as ‘Service’, ensures that the other party has been formally informed of the case."},
    lawyer: { top: 450, bottom: 576, left: 930, right: 1143, background: "/images/law inside.png", message: "Step 4: Mandatory Disclosure\nBoth parties are required to exchange specific financial and legal documents as part of the Mandatory Disclosure process."},
    court: { top: 537, bottom: 618, left: 210, right: 390, background: "/images/courtroom.png", message: "Step 5: Schedule Your Court Date\nThe court process typically includes a hearing for any motions filed, and a final hearing for cases that are uncontested or resolved by default or trial for contested cases"}};


 const checkLocation = (top: number, left: number) => {
    for (const key of Object.keys(locations)) {
      const loc = locations[key];
      if (top >= loc.top && top <= loc.bottom && left >= loc.left && left <= loc.right) {
        //console.log("Current Location: ", key);
        //console.log("Visited: ", visited.get(key));
        if (visited.get(key) === false) {
          setCurrentLocation(key);
          setShowPopup(true);
          setVisited(new Map(visited.set(key, true))); // Update the state
        }
        return;
      }
    }
    setCurrentLocation("map");
  };


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
      case "a":
        setDirection("dance");
        setIsMoving(true);
        break;
      case " ":
        setCurrentLocation("map");
        setShowPopup(false);
        return;
      default:
        return;
    }
    setSpritePosition({ top: newTop, left: newLeft });
    checkLocation(newTop, newLeft);
    console.log("top: ", newTop, "left: ", newLeft);
  };


  const handleKeyUp = (e: KeyboardEvent) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
      setIsMoving(false);
      setDirection("idle");
    }
  };

  const handleNextClick = () => {
    console.log("Next button clicked");
    if (caseType === "custody") {
      router.push("/in-game-custody");
    }
    else if (caseType === "divorce") {
      router.push("/in-game-divorce");
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
    <div className="map-background-container" style={{
      backgroundImage: `url(${currentLocation === "map" ? "/images/Map.png" : locations[currentLocation].background})`
    }}>
      {!showPopup && (<Image
        className="GatorSpawn"
        src={`/images/${direction === "idle" ? "pixil-frame-0 (2).png" : `${direction}.gif`}`}
        alt="Idle"
        width={150}
        height={35}
        style={{
          top: `${spritePosition.top}px`,
          left: `${spritePosition.left}px`,
        }}
      />
      )}


      {showPopup && (
        <div className="popup-container">
          <Image
            className="popup-box"
            src="/images/text box larger.png"
            alt="Text Box"
            width={300}
            height={100}
          />
          <div className="popup-text">
            {currentLocation === "map" ? "Welcome to Pre-Court Preparation! Here, we will guide you through the initial steps you'll need to complete before your court hearings. To explore each step, use your arrow keys to move the gator to different locations and learn more! Press the space bar to close pop-ups." : locations[currentLocation].message + "\nPress the space bar to return."}
          </div>

          <Image
            className="excl-mark"
            src="/images/excl mark.png"
            alt="Excl"
            width={30}
            height={30}
                    />
                  </div>
                )}
                <div className="next-button-container" onClick={handleNextClick}>
                  <Image
                    className="next-button"
                    src="/images/forward.png"
                    alt="Next"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            );
          }





