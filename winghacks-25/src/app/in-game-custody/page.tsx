"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function InGameCustody() {
  //manages toggling between screens
  const [screen, setScreen] = useState<string | null>(null);

  //************************ ALL THE SCREENS DEFINED ****************************** */
  if (screen === "proving-drug") {
    return (
      <div>
        
      </div>
    );
  }
    
  if (screen === "wrong") {
    return (
      <div>
        <h1>I'm sorry, I can't hear your case. You need an actual legal basis.</h1>
        <button onClick={() => setScreen("initial")}>Try again</button>
      </div>
    );
  }

  if (screen === "living-with") {
    return (
      <div>
        <h1>The judge is talking again</h1>
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
    );
  }

  if (screen === "initial") {
    return (
    <div>
      <h1>Hello. I hear you are seeking custody of your child. What are you arguing about?</h1>
      <h2>Choose an option.</h2>
      <p>I just hate who he is as a person! He is crazy and I hate his guts. That's why I divorced him.</p>
      <button className="animate-move-up" onClick={() => setScreen("wrong")}>Option 1</button>
      <p>I believe he has a drug problem that stops him from making good judgments about our child.</p>
      <button onClick={() => setScreen("proving-drug")}>Option 2</button>
      <p>He just moved to a new house and the new lady he’s living with is insane! Sometimes I see scars on my son after he comes back and he’s always crying.</p>
      <button onClick={() => setScreen("living-with")}>Option 3</button>
    </div>
    );
  }

  //defines the initial screen
  return (
    <div>
      <Image src="/images/judge hit.png" alt="judge" width={500} height={500} />
      <h1>Hello. I hear you are seeking custody of your child. What are you arguing about?</h1>
      <h2>Choose an option.</h2>
      <p>I just hate who he is as a person! He is crazy and I hate his guts. That's why I divorced him.</p>
      <button onClick={() => setScreen("wrong")}>Option 1</button>
      <p>I believe he has a drug problem that stops him from making good judgments about our child.</p>
      <button onClick={() => setScreen("proving-drug")}>Option 2</button>
      <p>He just moved to a new house and the new lady he’s living with is insane! Sometimes I see scars on my son after he comes back and he’s always crying.</p>
      <button onClick={() => setScreen("living-with")}>Option 3</button>
    </div>
  );
}
