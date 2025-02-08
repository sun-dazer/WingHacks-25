"use client";

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/settings');
  };

  return (
    <div>
      <h1>WingHacks 2025</h1>
      <button onClick={handleButtonClick}>Go to Settings</button>
    </div>
  );
}