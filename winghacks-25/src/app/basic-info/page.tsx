"use client";
import React, { useState, useEffect } from 'react';
import './styles.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useUser } from '../UserContext';

export default function BasicInfo() {
  const router = useRouter();
  const { name } = useUser();
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log(name);
  }, [name]);

  const handleNextButtonClick = () => {
    setStep(step + 1);
    if (step === 7) {
      router.push('/settings');
    }
  };

  const handleBackClick = () => {
    router.push('/settings');
  };

  const getTextForStep = (step) => {
    switch (step) {
      case 1:
        return (
          <>
            Hi there! Welcome to Gator Grievances!<br /><br />
            Here you'll have a chance to experience a court proceeding <br /> from a plaintiff's perspective.<br /><br />
            Now we'll go through the roles (players) in our game.
          </>
        );
      case 2:
        return (
          <>
            A plaintiff is the person or entity who initiates <br />
            a lawsuit by filing a complaint against another party (the defendant), <br />
            claiming that they have been wronged and seeking compensation or <br />
            relief from the court. <br></br>
            Essentially, they are the one bringing <br />
            the legal action and must prove their case.
          </>
        );
      case 3:
        return (
          <>
            A defendant is the person or entity being sued or accused of a crime <br />
            in a legal case. <br /> <br />
            They are the party against whom the lawsuit is filed and must defend <br />
            themselves against the accusations brought by the plaintiff.
          </>
        );
      case 4:
        return (
          <>
            A lawyer's primary role is to advise clients on their legal rights, <br />
            represent them in legal matters, and advocate for their interests in <br />
            court. <br /> <br />
            They interpret laws and present evidence to achieve the best <br />
            possible outcome for their case.
          </>
        );
      case 5:
        return (
          <>
            Judges listen to arguments and determine whether there is <br />
            sufficient evidence for a trial. <br /> <br />
            They make a final decision based on the evidence, essentially acting <br />
            as an impartial referee to ensure a fair trial and proper legal procedure.
          </>
        );
      case 6:
        return (
          <>
            In this game, you will be presented a few questions that a judge may ask <br />
            you in a court proceeding for a divorce or custody case. <br /> <br />
            You'll then be given a few answer options to respond to the judge, BUT only <br />
            one will allow the judge to proceed with the case based on evidence <br />
            requirements of the law.
          </>
        );
      case 7:
        return (
          <>
            <br /> Ready? <br /><br />
            Let's get started!
          </>
        )
      default:
        return (
          <>
            <br />
          </>
        );
    }
  };

  const getImageSrcForStep = (step) => {
    switch (step) {
      case 2:
        return '/images/gator 3.png';
      case 3:
        return '/images/snake 2.png';
      case 4:
        return '/images/lawyer 2.png';
      case 5:
        return '/images/judge 2.png';
      default:
        return null;
    }
  };

  const imageSrc = getImageSrcForStep(step);

  return (
    <div className="sky-background-container">
      <div className="transparent-box">
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
              height={375}
              onClick={handleBackClick}
            />
            <div className="absolute top-10 left-10 right-10 bottom-10">
              <h2>{getTextForStep(step)}</h2>
              {imageSrc && (
                <Image
                  className="image-with-margins"
                  src={imageSrc}
                  alt="role"
                  width={200}
                  height={200}
                />
              )}
            </div>
          </div>
          <div>
            <button
              className="button"
              onClick={handleNextButtonClick}
              type="button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}