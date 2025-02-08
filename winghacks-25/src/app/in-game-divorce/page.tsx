"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function InGameCustody() {
  //manages toggling between screens
  const [screen, setScreen] = useState<string | null>(null);

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
      <div>
        <h1>Can you provide proof that you have resided in Florida for at least six months prior to filing for divorce?</h1>
        <p>Yes, Your Honor. I have a hotel receipt showing I stayed in Miami for a week six months ago.</p>
        <button onClick={() => setScreen("resided-hotel")}>Option 1</button>
        <p>Yes, Your Honor. I have a lease agreement, utility bills in my name dating back over six months, and my Florida driver&apos;s license showing my current address.</p>
        <button onClick={() => setScreen("continue-resided")}>Option 2</button>
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

  //defines the initial screen
  return (
    <div>
      <Image src="/images/judge hit.png" alt="judge" width={500} height={500} />
      <h1>Hello, Ms. . I hear you are seeking a divorce.</h1>
      <button onClick={() => setScreen("resided")}>Yes, that is correct.</button>
    </div>
  );
}
