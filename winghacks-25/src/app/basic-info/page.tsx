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
        className="back-img"
        alt="back"
        width={25}
        height={25}
        onClick={handleBackClick}
      />
      <h1 className='h1'>Tutorial</h1>
    </div>
  );
}