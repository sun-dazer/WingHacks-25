"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './style.css';

export default function InGameCustody() {
    const router = useRouter();

    const handleContinueButtonClick = () => {
        console.log('Router:', router);
        router.push('/quiz-village');
        console.log('Continue button clicked');
    };

    const handleRestartButtonClick = () => {
        console.log('Router:', router);
        console.log('Restart button clicked');
        router.push('/');
    };

    return (
        <div style={{
            backgroundImage: "url('/images/courtroom 2.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <div style={{ position: 'relative', width: '500px', height: '500px', marginTop: '100px' }}>
                <div style={{ position: 'absolute', zIndex: 1, top: '0px', left: '10px', width: '400px', height: '400px' }} className="gator-jump">
                    <Image
                        src="/images/gator 3.png"
                        alt="gator"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div style={{ position: 'absolute', zIndex: 2, top: '40px', width: '500px', height: '500px' }}>
                    <Image
                        src="/images/desk for arguer.png"
                        alt="desk"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                <div className='text-box'>
                    <Image
                        src="/images/text box.png"
                        alt="back"
                        width={650}
                        height={375}
                    />
                    <h1 className="large-font">You Win!</h1>
                </div>

            </div>
            <div className=''>
                <button
                    className='button'
                    style={{ marginLeft: '45px' }}
                    onClick={handleContinueButtonClick}
                >
                    Continue
                </button>
                <button
                    className='button'
                    style={{ marginRight: '45px' }}
                    onClick={handleRestartButtonClick}
                >
                    Restart
                </button>
            </div>
        </div>
    );
}