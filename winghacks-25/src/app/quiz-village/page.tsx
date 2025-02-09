"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dotenv from 'dotenv';
dotenv.config();
import Image from "next/image";
import "./styles.css";

export default function Scenario() {
  const router = useRouter();
  const [quizQuestions, setQuizQuestions] = useState<string[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [showQuestion, setShowQuestion] = useState<boolean>(false);

  const imagePaths = [
    "/images/witness panda.png",
    "/images/witness polar.png",
    "/images/witness cop.png",
    "/images/snake 1.png",
  ];

  const imageLocations = [
    { x: 100, y: 200 },
    { x: 200, y: 100 },
    { x: 800, y: 100 },
    { x: 1000, y: 600 },
  ];

  const initialQuizQuestions = [
    `What is the residency requirement for filing for divorce in Florida?\n\na)  One spouse must have resided in Florida for at least 3 months.\nb)  Both spouses must have resided in Florida for at least 6 months.\nc)  One or both spouses must have resided in Florida for at least 6 months.\nd)  One spouse must have resided in Florida for at least 1 year.`,
    "Florida is a \"no-fault\" divorce state. What does this mean?\n\na)  You must prove that your spouse committed adultery to get a divorce.\nb)  You must prove that your spouse was abusive to get a divorce.\nc)  You only need to state that the marriage is \"irretrievably broken.\"\nd)  You must prove specific grounds for divorce, such as desertion or cruelty.",
    "If claiming mental incapacity as grounds for divorce, how long must the incapacity have lasted?\n\na)  At least 6 months.\nb)  At least 1 year.\nc)  At least 2 years.\nd)  At least 3 years.",
    "What is required regarding financial disclosure in a Florida divorce?\n\na)  Only the party filing for divorce needs to disclose their finances.\nb)  Neither party is required to disclose their finances.\nc)  Both parties must provide a full and accurate disclosure of their financial assets, debts, income, and expenses.\nd)  Only income needs to be disclosed."
  ];

  const initialQuizAnswers = ["c", "c", "d", "c"];

  useEffect(() => {
    // Fetch data if needed
  }, []);

  const handleImageClick = () => {
    setShowQuestion(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
      setUserAnswer(value);
  };

  const handleSubmit = () => {
    if (userAnswer === initialQuizAnswers[currentQuestionIndex]) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    setUserAnswer("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setShowQuestion(false);
  };

  const currentImage = imagePaths[currentQuestionIndex];
  const currentLocation = imageLocations[currentQuestionIndex];

  return (
    <div className="map-background-container">
      <div>
        <div className="text-[50px] ml-[20px]"> Score: {score}</div>
        {showQuestion && currentQuestionIndex < initialQuizQuestions.length ? (
          <div className="transparent-box">
          <div className="height-100vh flex flex-col justify-center items-center">
            <div className="text-[20px] text-center">{initialQuizQuestions[currentQuestionIndex]}</div>
            <input
              type="text"
              value={userAnswer}
              onChange={handleInputChange}
              maxLength={1}
              className="justify-center text-center mt-5"
            />
            <button className="mt-5" onClick={handleSubmit}>Submit</button>
          </div>
          </div>
        ) : (
          currentImage && (
            <Image
              src={currentImage}
              alt="Quiz Image"
              width={200}
              height={200}
              onClick={handleImageClick}
              style={{
                position: 'absolute',
                top: `${currentLocation.y}px`,
                left: `${currentLocation.x}px`,
              }}
            />
          )
        )}
      </div>
      <button className="absolute top-2 right-2 bg-light-grey text-black px-4 py-2 rounded" onClick={() => router.push("/")}>
        Restart
      </button>
    </div>
  );
}