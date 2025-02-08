"use client";

import { useRouter } from 'next/navigation';

export default function Scenario() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/settings');
  };

  return (
    <div>
      <h1>Scenario Page</h1>
      <button onClick={handleButtonClick}>Go to Scenario Page (needs to be changed based on what the settings were)</button>
    </div>
  );
}