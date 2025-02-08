"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    router.push('/settings');
  };

  return (
    <div className="sky-background-container" >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Image src="/images/titlescreen.gif" alt="Titlescreen" width={800} height={500} />
        <div
          className="relative w-32 h-52 cursor-pointer mt-4"
          onClick={handleButtonClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={isHovered ? "/images/wood sign dark.png" : "/images/wood sign light.png"}
            alt="Wood Sign"
            style={{ objectFit: 'cover' }}
            width={1000}
            height={400}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold pointer-events-none">
            Start
          </div>
        </div>
      </div>
    </div>
  );
}