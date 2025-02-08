"use client";

import { useRouter } from 'next/navigation';

export default function BasicInfo() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/scenario');
  };

  return (
    <div>
      <h1>Basic Info Page</h1>
      <button onClick={handleButtonClick}>Go to Scenario Page</button>
    </div>
  );
}