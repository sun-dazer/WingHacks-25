"use client";
import React, { useState } from 'react';
import './styles.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BasicInfo() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/scenario');
  };

  const handleBackClick = () => {
    router.push('/settings');
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
      <h1 className="inline h1">Tutorial</h1>
      <div>
        <div className='relative'>
          <Image
            src="/images/text box.png"
            className="inline back-img"
            alt="back"
            width={650}
            height={350}
            onClick={handleBackClick}
          />
          <h2 className="absolute top-10 left-10 right-10 bottom-10">
            This is an example sentence where we're gonna talk about law and lots of other things related to our game</h2>
        </div>
      </div>
    </div>
  );
}