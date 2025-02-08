"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
};

export default function Scenario() {
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: "Write a story about a magic backpack." }]
          }]
        }),
      });

      const data = await response.json();
      console.log(data);
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    router.push('/settings');
  };

  return (
    <div className="map-background-container">
      <button onClick={handleButtonClick}>Go to Scenario Page (needs to be changed based on what the settings were)</button>
    </div>
  );
}