"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { useUser } from '../UserContext';
//import './styles.css';

export default function InGameDivorce() {
  const router = useRouter();
  const { name } = useUser();
  const [fadeOut, setFadeOut] = useState(false);

  //manages toggling between screens
  const [screen, setScreen] = useState<string | null>(null);

  const handleButtonClick = (screenName: string) => {
    setFadeOut(true);
    setTimeout(() => {
      setScreen(screenName);
    }, 500); // Match the duration of the fade-out animation
  };

  //************************ ALL THE SCREENS DEFINED ****************************** */
  if (screen === "resided-hotel") {
    return (
      <div>
        <h1>A hotel stay does not establish residency. You must have any legal documents such as a lease, utility bills, or a Florida driver’s license to verify your continuous residence.</h1>
        <button onClick={() => setScreen("resided")}>Try again</button>
      </div>
    );
  }

  if (screen === "continue-resided") {
    return (
      <div>
        <h1>Thank you. These documents sufficiently establish your residency.</h1>
        <p>Florida requires that one or both spouses must have resided in Florida for at least six months prior to filing for divorce.</p>
        <button onClick={() => setScreen("no-fault")}>Continue</button>
      </div>
    );
  }

  if (screen === "no-fault-wrong") {
    return (
      <div>
        <h1>Without more details, I cannot accept this as sufficient grounds. Please elaborate on the conflicts that have led to this conclusion.</h1>
        <p> Florida is a no-fault divorce state, meaning you only need to state that the marriage is &quot;irretrievably broken&quot; or that one of the parties is mentally incapacitated. You don&apos;t need  to prove fault or wrongdoing by the other party.</p>
        <button onClick={() => setScreen("no-fault")}>Try Again</button>
      </div>
    );
  }

  if (screen === "no-fault") {
    return (
      <div>
        <h1>Florida is a no-fault divorce state. Are you claiming that the marriage is irretrievably broken or that one party has been mentally incapacitated for at least three years?</h1>
        <p>Well, we just don’t get along anymore.</p>
        <button onClick={() => setScreen("no-fault-wrong")}>Option 1</button>
        <p>Your Honor, I have submitted a sworn affidavit outlining the conflicts in our marriage, including ongoing disputes over finances and lifestyle choices. Despite attempts at counseling, we have been unable to resolve these issues.</p>
        <button onClick={() => setScreen("no-fault-continue")}>Option 2</button>
      </div>
    );
  }

  if (screen === "no-fault-continue") {
    return (
      <div>
        <p> Florida is a no-fault divorce state, meaning you only need to state that the marriage is &quot;irretrievably broken&quot; or that one of the parties is mentally incapacitated. You don&apos;t need  to prove fault or wrongdoing by the other party.</p>
        <button onClick={() => setScreen("mental?")}>Continue</button>
      </div>
    );
  }

  if (screen === "mental?") {
    return (
      <div>
        <h1>Is there anything else you would like to add?</h1>
        <p>My spouse has also been mentally spiraling for a few years now. He&apos;s going crazy!</p>
        <button onClick={() => setScreen("mental-yes")}>Option 1</button>
        <p>No, Your Honor. </p>
        <button onClick={() => setScreen("financial")}>Option 2</button>
      </div>
    );
  }

  if (screen === "mental-yes") {
    return (
      <div>
        <h1>You are claiming that your spouse has been mentally incapacitated for at least three years. Do you have medical evidence to support this claim?</h1>
        <p>Yes, Your Honor. I have medical records from a licensed psychiatrist documenting my spouse&apos;s mental condition over the past three years, as well as a court order declaring them legally incapacitated.</p>
        <button onClick={() => setScreen("financial")}>Option 1</button>
        <p>Yes, Your Honor. I have a note from our family doctor saying my spouse has been stressed for a while. It has been many years now.</p>
        <button onClick={() => setScreen("mental-no")}>Option 2</button>
      </div>
    );
  }

  if (screen === "mental-no") {
    return (
      <div>
        <h1>A general practitioner&apos;s note on stress does not meet the requirement for proving mental incapacity. Do you have records from a psychiatrist or any legal determinations of incapacity?</h1>
        <button onClick={() => setScreen("mental-yes")}>Try Again</button>
      </div>
    );
  }

  if (screen === "resided") {
    return (
      <div className="flex justify-center mt-20">
      <div className="flex flex-col">
        <div className="flex-1 flex flex-row">
          <div className="flex-1 mr-10">
            <Image className="animate-float-right" src="/images/judge 2.png" alt="judge" width={500} height={500} />
          </div>
          <div className="flex-1 flex flex-col animate-options-float-in">
            <div className="relative flex-1">
              <Image className="absolute top-0 left-0 transform scale-x-125" src="/images/speech bubble fat.png" alt="text box" width={661} height={500} />
              <button className="absolute top-0 left-0 text-center text-black mt-5" onClick={() => handleButtonClick("resided-wrong")}>I have a hotel receipt showing I stayed in Miami for a week six months ago.</button>
            </div>
            <div className="relative flex-1">
              <Image className="absolute top-0 left-0 transform scale-x-125" src="/images/speech bubble fat.png" alt="text box" width={661} height={500} />
              <button className="absolute top-0 left-0 text-center text-blackmt-5" onClick={() => handleButtonClick("continue-resided")}>I have a lease agreement, utility bills in my name dating back over six months, and my Florida driver’s license showing my current address.</button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image className="absolute top-0 left-0 transform scale-x-125 transform scale-y-80 animate-textbox-float-right " src="/images/text box.png" alt="text box" width={661} height={500} />
          <h1 className="absolute top-10 left-0 w-full text-center text-black text-2xl animate-float-right">Ms. {name}, can you provide proof that you have resided in Florida for at least six months prior to filing for divorce?</h1>
        </div>
      </div>
    </div>
    );
  }

  if (screen === "financial") {
    return (
      <div>
        <h1>Have you submitted a full and accurate disclosure of your financial assets, debts, income, and expenses?</h1>
        <p>Yes, Your Honor. I have provided my tax returns, bank statements, investment records, and a list of all assets and debts, including those in my name and joint accounts.</p>
        <button onClick={() => setScreen("financial-continue")}>Option 1</button>
        <p>Yes, Your Honor. I provided my financial statement, but I didn&apos;t list one of my bank accounts because it&apos;s separate from my marital finances.</p>
        <button onClick={() => setScreen("financial-wrong")}>Option 2</button>
      </div>
    );
  }

  if (screen === "financial-wrong") {
    return (
      <div>
        <h1>Both parties must provide a full and accurate disclosure of their financial assets, debts, income, and expenses. This is crucial for the court to make fair decisions regarding property division, spousal support, and child support.        </h1>
        <p>Florida law requires full disclosure of all assets, even if they are separate. Failing to include this account could result in penalties. Please ensure that all financial records are included.</p>
        <button onClick={() => setScreen("financial")}>Try Again</button>
      </div>
    );
  }

  if (screen === "financial-continue") {
    return (
      <div>
        <h1>Both parties must provide a full and accurate disclosure of their financial assets, debts, income, and expenses. This is crucial for the court to make fair decisions regarding property division, spousal support, and child support.        </h1>
        <button onClick={() => setScreen("equitable-distribution")}>Continue</button>
      </div>
    );
  }

  if (screen === "equitable-distribution") {
    return (
      <div>
        <h1>Florida follows equitable distribution. Can you provide evidence supporting your claim regarding the value of the marital assets?</h1>
        <p>Yes, Your Honor. I have included a recent appraisal report, property deeds, and financial statements detailing the value of our marital assets.</p>
        <button onClick={() => setScreen("end")}>Option 1</button>
        <p>Yes, Your Honor. I believe our family home is worth $500,000. I saw some similar houses online.</p>
        <button onClick={() => setScreen("equitable-distribution-wrong")}>Option 2</button>
      </div>
    );
  }

  if (screen === "equitable-distribution-wrong") {
    return (
      <div>
        <h1>Florida follows the principle of equitable distribution, meaning marital property is divided fairly but not necessarily equally. Only marital property (assets acquired during the marriage) is considered for division.</h1>
        <p>That is not sufficient evidence. An official appraisal is required for an accurate valuation.</p>
        <button onClick={() => setScreen("equitable-distribution")}>Try Again</button>
      </div>
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
    <div className={`flex justify-center mt-20 ${fadeOut ? 'fade-out' : ''}`}>
      <div className="flex flex-col">
        <div className="flex-1 flex flex-row">
          <div className="flex-1 mr-10">
            <Image className="animate-float-right" src="/images/judge 2.png" alt="judge" width={500} height={500} />
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
          <h1 className="absolute top-10 left-0 w-full text-center text-black text-2xl animate-float-right">Hello, Ms. {name}. I hear you are seeking a divorce. </h1>
        </div>
      </div>
    </div>
  );
}
