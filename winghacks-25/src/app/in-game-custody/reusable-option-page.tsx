"use client"
import React from 'react';;
import { useState } from 'react';
import Image from 'next/image';

interface ReusableOptionPageProps {
  screenName1: string;
  screenName2: string;
  bottomText: string;
  handleButtonClick: (screenName: string) => void;
  fontSize1: string;
  fontSize2: string;
  text1: string;
  text2: string;
}

const ReusableOptionPage: React.FC<ReusableOptionPageProps> = ({ screenName1, screenName2, bottomText, handleButtonClick, fontSize1, fontSize2, text1, text2}) => {
  const [fadeOut] = useState(false);

  return (
    <div className="courtroom-background-container">
          <div className={`flex justify-center ${fadeOut ? 'fade-out' : ''}`}>
          <div className="flex flex-col mt-[150px] ">
            <div className="flex-1 flex flex-row">
              <div className="flex-1 mr-10">
                <div className="animate-text-float-right">
                  <Image src="/images/judge 2.png" alt="judge" width={500} height={500} />
                </div>
              </div>
              <div className="flex-1 flex flex-col animate-options-float-in">
                <div className="relative flex-1">
                  <Image className="absolute top-0 left-0 transform scale-x-125" src="/images/speech bubble fat.png" alt="text box" width={661} height={500} />
                  <button className={`text-[${fontSize1}px] absolute top-0 left-0 text-center text-black mt-5`} onClick={() => handleButtonClick(screenName1)}>{text1}</button>
                </div>
                <div className="relative flex-1">
                  <Image className="absolute top-0 left-0 transform scale-x-125" src="/images/speech bubble fat.png" alt="text box" width={661} height={500} />
                  <button className={`text-[${fontSize2}px] absolute top-0 left-0 text-center text-black mt-5`} onClick={() => handleButtonClick(screenName2)}>{text2}</button>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <Image className="animate-textbox-float-right absolute top-0 left-0" src="/images/text box.png" alt="text box" width={661} height={500} />
                <h1 className="animate-text-float-right absolute top-[30px] left-0 w-full text-center text-black text-2xl">{bottomText}</h1>
            </div>
          </div>
        </div>
        </div>
  );
};

export default ReusableOptionPage;