"use client";
import React, { useState } from 'react';
import './styles.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useUser } from '../UserContext';

export default function Settings() {
  const router = useRouter();
  const { name, setName, location, setLocation, caseType, setCaseType } = useUser();
  const [nameInput, setNameInput] = useState(name);
  const [locationInput, setLocationInput] = useState(location);
  const [caseInput, setCaseInput] = useState(caseType);

  const handleBackClick = () => {
    router.push('/');
  };

  const handleCustodyButtonClick = () => {
    console.log('custody');
    setCaseInput('custody');
  };

  const handleDivorceButtonClick = () => {
    console.log('divorce');
    setCaseInput('divorce');
  };

  const handleStartButtonClick = () => {
    console.log(caseInput);
    setName(nameInput);
    setLocation(locationInput);
    setCaseType(caseInput);
    router.push('/basic-info');
    // if (caseInput === 'custody') {
    //   router.push('/in-game-custody');
    // } else if (caseInput === 'divorce') {
    //   router.push('/in-game-divorce');
    // } else {
    //   alert('Please select a case type.');
    // }
  };

  const handleNameChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocationInput(event.target.value);
  };

  return (
    <div className="sky-background-container">
      <div className="transparent-box">
        <Image
          src="/images/back.png"
          className="inline back-img"
          alt="back"
          width={25}
          height={25}
          onClick={handleBackClick}
        />
        <h1 className="inline h1">Getting Started</h1>
        <div>
          <label className="label">What&apos;s Your Name?</label>
          <input
            type="text"
            style={{ opacity: 0.5 }}
            value={nameInput}
            onChange={handleNameChange}
            className="text-center w-[300px] shadow-md"
            placeholder="Name"
          />
          <label className="label">Location</label>
          <select value={locationInput} style={{ opacity: 0.5 }} onChange={handleLocationChange}>
            <option value="null">Select</option>
            <option value="florida">Florida</option>
            <option value="georgia">Georgia</option>
          </select>
          <label className="label">What&apos;s Your Case?</label>
          <div>
            <button
              className={`button ${caseInput === 'custody' ? 'selected' : ''}`}
              onClick={handleCustodyButtonClick}
              type="button"
            >
              Custody
            </button>
            <button
              className={`button ${caseInput === 'divorce' ? 'selected' : ''}`}
              onClick={handleDivorceButtonClick}
              type="button"
            >
              Divorce
            </button>
          </div>
          <div className="mb-[40px]">
            <button className="button" onClick={handleStartButtonClick}>Start Game</button>
          </div>
        </div>
      </div>
    </div>
  );
}