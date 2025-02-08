"use client";
import React, { useState } from 'react';
import './styles.css';
import { useRouter } from 'next/navigation';

export default function Settings() {
  const router = useRouter();
  const [nameInput, setName] = useState('');
  const [locationInput, setLocation] = useState('');
  const [caseInput, setCase] = useState('');

  const handleNextButtonClick = () => {
    router.push('/basic-info');
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
    if (caseInput === 'custody') {
      router.push('/in-game-custody');
    } else if (caseInput === 'divorce') {
      router.push('/in-game-divorce');
    } else {
      alert('Please select a case type.');
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <h1>Getting Started</h1>
      <button onClick={handleNextButtonClick}>Go to Basic Info Page</button>
      <form>
        <label className="label">What's Your Name?</label>
        <input
          type="text"
          value={nameInput}
          onChange={handleNameChange}
          placeholder="Name"
        />
        <label className="label">Location</label>
        <select value={locationInput} onChange={handleLocationChange}>
          <option value="null">Select</option>
          <option value="florida">Florida</option>
          <option value="georgia">Georgia</option>
        </select>
        <label className="label">What's Your Case?</label>
        <div>
          <button className="button" value={caseInput} onClick={handleCustodyButtonClick}>Custody</button>
        <button className="button" value={caseInput} onClick={handleDivorceButtonClick}>Divorce</button>
        </div>
        <div>
        <button className="button" onClick={handleStartButtonClick}>Start Game</button>
        </div>
      </form>
    </div>
  );
}