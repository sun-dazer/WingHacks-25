"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { useUser } from '../UserContext';
import ReusablePage from './reusable-page';
import ReusableOptionPage from './reusable-option-page';

export default function InGameDivorce() {
  const router = useRouter();
  const { name } = useUser();
  const [fadeOut, setFadeOut] = useState(false);

  //manages toggling between screens
  const [screen, setScreen] = useState<string | null>(null);

  const handleButtonClick = (screenName: string) => {
    setFadeOut(true);
    setTimeout(() => {
      setFadeOut(false);
      setScreen(screenName);
    }, 700); 
    
    
  };

  //************************ ALL THE SCREENS DEFINED ****************************** */
  if (screen === "resided-hotel") {
    return (
      <ReusablePage screenName="resided" bottomText="A hotel stay does not establish residency. You must have any legal documents such as a lease, utility bills, or a Florida driver’s license to verify your continuous residence." handleButtonClick={handleButtonClick} fontSize="20" buttonText="Try Again"/>
    );
  }

  if (screen === "continue-resided") {
    return (
      <ReusablePage screenName="no-fault" bottomText="Thank you. These documents sufficiently establish your residency. Florida requires that one or both spouses must have resided in Florida for at least six months prior to filing for divorce." handleButtonClick={handleButtonClick} fontSize="20" buttonText="Continue"/>
    );
  }

  if (screen === "no-fault-wrong") {
    return (
      <ReusablePage screenName="no-fault" bottomText="Without more details, I cannot accept this as sufficient grounds. Florida is a no-fault divorce state, meaning you only need to state that the marriage is &quot;irretrievably broken&quot; or that one of the parties is mentally incapacitated. You don&apos;t need  to prove fault or wrongdoing by the other party.
" handleButtonClick={handleButtonClick} fontSize="15" buttonText="Try Again"/>);
  }

  if (screen === "no-fault") {
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
              <button className="absolute top-0 left-0 text-center text-black mt-5" onClick={() => handleButtonClick("no-fault-continue")}>I have submitted a sworn affidavit explaining the conflicts in our marriage, especially over finances.</button>
            </div>
            <div className="relative flex-1">
              <Image className="absolute top-0 left-0 transform scale-x-125" src="/images/speech bubble fat.png" alt="text box" width={661} height={500} />
              <button className="absolute top-[15px] left-0 text-[13px] text-center text-blackmt-5" onClick={() => handleButtonClick("no-fault-wrong")}>Well, we just don’t get along anymore. I really thought he was the love of my life, but I guess not. He is just not the right person for me.</button>
          </div>
        </div>
        </div>
        <div className="flex-1 relative">
          <Image className="animate-textbox-float-right absolute top-0 left-0" src="/images/text box.png" alt="text box" width={661} height={500} />
            <h1 className="animate-text-float-right absolute top-[30px] left-0 w-full text-center text-black text-2xl">Florida is a no-fault divorce state. Are you claiming that the marriage is irretrievably broken or that one party has been mentally incapacitated for at least three years?</h1>
        </div>
      </div>
    </div>
    </div>
    );
}

  if (screen === "no-fault-continue") {
    return (
      <ReusablePage screenName="mental?" bottomText="Florida is a no-fault divorce state, meaning you only need to state that the marriage is irretrievably broken or that one of the parties is mentally incapacitated. You don't need to prove fault or wrongdoing by the other party." handleButtonClick={handleButtonClick} fontSize="15" buttonText="Continue"/>
    );
  }

  if (screen === "mental?") {
    return (
      <ReusableOptionPage screenName1="mental-yes" screenName2="financial" bottomText="Is there anything else you would like to add?" handleButtonClick={handleButtonClick} fontSize1="15" fontSize2="20" text1="My spouse has also been mentally spiraling for a few years now. He's going crazy!" text2="No, Your Honor."/>
    );
  }

  if (screen === "mental-yes") {
    return (
      <ReusableOptionPage screenName1="financial" screenName2="mental-wrong" bottomText="You are claiming that your spouse has been mentally incapacitated for at least three years. Do you have medical evidence to support this claim?" handleButtonClick={handleButtonClick} fontSize1="10" fontSize2="10" text1="I have medical records from a licensed psychiatrist documenting my spouse&apos;s mental condition over the past three years, as well as a court order declaring them legally incapacitated." text2="I have a note from our family doctor saying my spouse has been stressed for a while. It has been many years now."/>
    );
  }

  if (screen === "mental-wrong") {
    return (
      <ReusablePage screenName="mental-yes" bottomText="A general practitioner's note on stress does not meet the requirement for proving mental incapacity. Do you have records from a psychiatrist or any legal determinations of incapacity?" handleButtonClick={handleButtonClick} fontSize="15" buttonText="Try Again"/>
    );
  }

  if (screen === "resided") {
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
              <button className="absolute top-0 left-0 text-center text-black mt-5" onClick={() => handleButtonClick("resided-hotel")}>I have a hotel receipt showing I stayed in Miami for a week six months ago.</button>
            </div>
            <div className="relative flex-1">
              <Image className="absolute top-0 left-0 transform scale-x-125" src="/images/speech bubble fat.png" alt="text box" width={661} height={500} />
              <button className="absolute top-[15px] left-0 text-[13px] text-center text-blackmt-5" onClick={() => handleButtonClick("continue-resided")}>I have a lease agreement, utility bills in my name dating back over six months, and my Florida driver’s license showing my current address.</button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image className="animate-textbox-float-right absolute top-0 left-0" src="/images/text box.png" alt="text box" width={661} height={500} />
            <h1 className="animate-text-float-right absolute top-[30px] left-0 w-full text-center text-black text-2xl">Ms. {name}, can you provide proof that you have resided in Florida for at least six months prior to filing for divorce?</h1>
        </div>
      </div>
    </div>
    </div>
    );
  }

  if (screen === "financial") {
    return (
      <ReusableOptionPage screenName1="financial-continue" screenName2="financial-wrong" bottomText="Have you submitted a full and accurate disclosure of your financial assets, debts, income, and expenses?" handleButtonClick={handleButtonClick} fontSize1="10" fontSize2="10" text1="I have provided my tax returns, bank statements, investment records, and a list of all assets and debts, including those in my name and joint accounts." text2="I provided my financial statement, but I didn't list one of my bank accounts because it's separate from my marital finances."/>
    );
  }

  if (screen === "financial-wrong") {
    return (
      <ReusablePage screenName="financial" bottomText="Florida law requires full disclosure of all assets, even if they are separate. Failing to include this account could result in penalties. Please ensure that all financial records are included." handleButtonClick={handleButtonClick} fontSize="20" buttonText="Try Again"/>
    );
  }

  if (screen === "financial-continue") {
    return (
      <ReusablePage screenName="equitable-distribution" bottomText="Both parties must provide a full and accurate disclosure of their financial assets, debts, income, and expenses. This is crucial for the court to make fair decisions regarding property division, spousal support, and child support." handleButtonClick={handleButtonClick} fontSize="15" buttonText="Continue"/>
    );
  }

  if (screen === "equitable-distribution") {
    return (
      <ReusableOptionPage screenName1="end" screenName2="equitable-distribution-wrong" bottomText="Florida follows equitable distribution. Can you provide evidence supporting your claim regarding the value of the marital assets?" handleButtonClick={handleButtonClick} fontSize1="10" fontSize2="15" text1="I have included a recent appraisal report, property deeds, and financial statements detailing the value of our marital assets." text2="I believe our family home is worth $500,000. I saw some similar houses online."/>
    );
  }

  if (screen === "equitable-distribution-wrong") {
    return (
      <ReusablePage screenName="equitable-distribution" bottomText="That is not sufficient evidence. An official appraisal is required for an accurate valuation." handleButtonClick={handleButtonClick} fontSize="20" buttonText="Try Again"/>
    );
  }

  if (screen === "end") {
    return (
      <div>
        <h1>The end :)</h1>
      </div>
    );
  }

  //initial screen
  return (
    <div className="courtroom-background-container">
    <div className={`flex justify-center ${fadeOut ? 'fade-out' : ''}`}>
      <div className="flex flex-col mt-[150px]">
        <div className="flex-1 flex flex-row">
          <div className="flex-1 mr-10">
            <Image className="animate-text-float-right" src="/images/judge 2.png" alt="judge" width={500} height={500} />
          </div>
          <div className="flex-1">
            <div className="relative animate-options-float-in">
              <Image className="absolute top-0 left-0 transform scale-x-125" src="/images/speech bubble skinny.png" alt="text box" width={661} height={500} />
              <button className="absolute top-0 left-0 text-center text-black text-2xl mt-5" onClick={() => handleButtonClick("resided")}>Yes, that is correct.</button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image className="absolute top-0 left-0 transform scale-x-125 transform scale-y-80 animate-textbox-float-right" src="/images/text box.png" alt="text box" width={661} height={500} />
          <h1 className="absolute top-10 left-0 w-full text-center text-black text-2xl animate-text-float-right">Hello, Ms. {name}. I hear you are seeking a divorce. </h1>
        </div>
      </div>
    </div>
    </div>
  );
}
