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
        <button onClick={() => setScreen("mental?")}>Option 2</button>
      </div>
    );
  }

  if (screen === "mental?") {
    return (
      <div>
        <h1>Is there anything else you would like to add?</h1>
        <p>My spouse has also been mentally spiraling for a few years now. He's going crazy!</p>
        <button onClick={() => setScreen("mental-yes")}>Option 1</button>
        <p>No, Your Honor. </p>
        <button onClick={() => setScreen("financial")}>Option 2</button>
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

  //defines the initial screen
  return (
    <div>
      <Image src="/images/judge hit.png" alt="judge" width={500} height={500} />
      <h1>Hello, Ms. . I hear you are seeking a divorce.</h1>
      <button onClick={() => setScreen("resided")}>Yes, that is correct.</button>
    </div>
  );
}
