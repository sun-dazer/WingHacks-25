"use client";

import { useRouter } from 'next/navigation';

export default function Settings() {
  const router = useRouter();

  const handleNextButtonClick = () => {
    router.push('/basic-info');
  };

  return (
    <div>
      <h1>Settings Page</h1>
      <button onClick={handleNextButtonClick}>Go to Basic Info Page</button>
    </div>
  );
}