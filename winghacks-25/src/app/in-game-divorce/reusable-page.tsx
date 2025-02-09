"use client"
import React from 'react';;
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { useUser } from '../UserContext';

interface ReusablePageProps {
  screenName: string;
  bottomText: string;
  handleButtonClick: (screenName: string) => void;
  fontSize: string;
  buttonText: string;
}

const ReusablePage: React.FC<ReusablePageProps> = ({ screenName, bottomText, handleButtonClick, fontSize, buttonText}) => {
    const router = useRouter();
    const { name } = useUser();
    const [fadeOut, setFadeOut] = useState(false);

    //manages toggling between screens
    const [screen, setScreen] = useState<string | null>(null);

  return (
    <div className="courtroom-background-container">
      <div className={`flex justify-center ${fadeOut ? 'fade-out' : ''}`}>
        <div className="flex flex-col mt-[150px]">
          <div className="flex-1 flex flex-row">
            <div className="flex-1 mr-10">
              <div className="animate-float-right">
                <Image src="/images/lawyer 1.png" alt="judge" width={500} height={500} />
              </div>
            </div>
            <div className="animate-options-float-in flex-1 flex flex-col">
              <div className="relative flex-1">
                <Image
                  className="absolute top-[100px] left-[60px] w-[125px] h-[50px]"
                  src="/images/wood sign light.png"
                  alt="text box"
                  width={100}
                  height={500}
                />
                <button
                  className="absolute inset-0 flex items-center justify-center text-center text-black"
                  onClick={() => handleButtonClick(screenName)}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <Image className="animate-textbox-float-right absolute top-0 left-0" src="/images/text box.png" alt="text box" width={661} height={500} />
            <div className="animate-float-right">
                <h1 className={`absolute top-7 left-0 w-full text-center text-black text-[${fontSize}px]`}>{bottomText}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReusablePage;