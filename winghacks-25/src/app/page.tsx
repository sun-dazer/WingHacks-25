"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/settings');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Image src="/images/titlescreen.gif" alt="Titlescreen" width={800} height={500} />
      <button onClick={handleButtonClick}>Start</button>
    </div>
  );
}