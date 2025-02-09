"use client";

import { useState } from 'react';
import Image from 'next/image';
import ReusablePage from './reusable-page';
import ReusableOptionPage from './reusable-option-page';
import { useRouter } from 'next/navigation';

export default function InGameCustody() {
  //manages toggling between screens
  const [screen, setScreen] = useState<string | null>(null);
  const { name } = useUser();
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();

  const handleButtonClick = (screenName: string) => {
    setFadeOut(true);
    setTimeout(() => {
      setFadeOut(false);
      setScreen(screenName);
    }, 700); 
  };

  //************************ ALL THE SCREENS DEFINED ****************************** */
  if (screen === "proving-drug") {
    return (
      <ReusableOptionPage screenName1="proving-drug-wrong" screenName2="drug-test" bottomText="Okay, I understand. What proof do you have of this drug usage claim?" handleButtonClick={handleButtonClick} fontSize1="2xl" fontSize2="2xl" text1="He always smells like weed. He has a pile of cash that he uses to go buy weed that’s under his bed." text2="Everyone just knows about it! His new girl knows, my mom knows, his friends know… it’s just common knowledge!" />
    );
  }
    
  if (screen === "drug-test") {
    <ReusablePage screenName="order-drug-test" bottomText="I'm sorry, but you need more concrete proof. Do you have any other evidence?" handleButtonClick={handleButtonClick} />
  }

  if (screen === "order-drug-test") {
    <ReusablePage screenName="end" bottomText="I'm sorry, but you need more concrete proof. Do you have any other evidence?" handleButtonClick={handleButtonClick} />
  }

  if (screen === "initial-wrong") {
    return (
      <ReusablePage screenName="initial" bottomText="I'm sorry, but you need specific legal grounds for a divorce. Emotions alone are not enough." handleButtonClick={handleButtonClick} />
    );
  }

  if (screen === "living-with") {
    return (
      <ReusableOptionPage screenName1="living-with-wrong" screenName2="proving-drug" bottomText="Choose an option." handleButtonClick={handleButtonClick} fontSize1="2xl" fontSize2="2xl" text1="I don’t want my child to live with him because he is a bad person." text2="I don’t want my child to live with him because he has a drug problem." />
    );
  }

  if (screen === "living-with-wrong") {
    <ReusableOptionPage screenName1="living-with" screenName2="proving-drug" bottomText="I'm sorry, but you need more concrete proof. Do you have any other evidence?" handleButtonClick={handleButtonClick} fontSize1="2xl" fontSize2="2xl" text1="Yes, let me try again." text2="No, but I do have another reason." />
  }


  if (screen === "proving-drug-wrong") {
    return (
      <ReusableOptionPage screenName1="proving-drug" screenName2="living-with" bottomText="I'm sorry, but you need more concrete proof. Do you have any other evidence?" handleButtonClick={handleButtonClick} fontSize1="2xl" fontSize2="2xl" text1="Yes, let me try again." text2="No, but I do have another reason." />
    );
  }

  if (screen === "initial") {
    return (
      <ReusableOptionPage screenName1="initial-wrong" screenName2="proving-drug" bottomText="Choose an option." handleButtonClick={handleButtonClick} fontSize1="2xl" fontSize2="2xl" text1="I just hate who he is as a person! He is crazy and I hate his guts. That’s why I divorced him." text2="I believe he's dealing with a drug problem that stops him from making good judgments about our child." />
    );
  }

  if (screen === "end") {
    router.push("/end");
  }

  //defines the initial screen
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
                  <button className="absolute top-0 left-0 text-center text-black text-2xl mt-5" onClick={() => handleButtonClick("initial")}>Yes, that is what I want.</button>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <Image className="absolute top-0 left-0 transform scale-x-125 transform scale-y-80 animate-textbox-float-right" src="/images/text box.png" alt="text box" width={661} height={500} />
              <h1 className="absolute top-10 left-0 w-full text-center text-black text-2xl animate-text-float-right">Hello, Ms. {name}. You stated that you wanted to gain sole custody of your child, right? </h1>
            </div>
          </div>
        </div>
        </div>
  );
}
