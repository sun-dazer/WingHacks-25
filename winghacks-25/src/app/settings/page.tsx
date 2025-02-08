"use client";
import React, { useState } from 'react';
import './styles.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Settings() {
  const router = useRouter();
  const [nameInput, setName] = useState('');
  const [locationInput, setLocation] = useState('');
  const [caseInput, setCase] = useState('');

  const handleBackClick = () => {
    router.push('/');
  };

  const handleCustodyButtonClick = () => {
    console.log('custody');
    setCase('custody');
  };

  const handleDivorceButtonClick = () => {
    console.log('divorce');
    setCase('divorce');
  };

  const handleStartButtonClick = () => {
    console.log(caseInput);
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
    setName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <Image
        src="/images/back.png"
        className="inline back-img"
        alt="back"
        width={25}
        height={25}
        onClick={handleBackClick}
      />
      <h1 className="inline h1">Getting Started</h1>
      {/* <button onClick={handleNextButtonClick}>Go to Basic Info Page</button> */}
      <div>
        <label className="label">What's Your Name?</label>
        <input
          type="text"
          value={nameInput}
          onChange={handleNameChange}
          placeholder="                        Name"
        />
        <label className="label">Location</label>
        <select value={locationInput} onChange={handleLocationChange}>
          <option value="null">Select</option>
          <option value="florida">Florida</option>
          <option value="georgia">Georgia</option>
        </select>
        <label className="label">What's Your Case?</label>
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
        <div>
          <button className="button" onClick={handleStartButtonClick}>Start Game</button>
        </div>
      </div>
    </div>
  );
}