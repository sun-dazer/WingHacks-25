"use client";

import { useState } from 'react';
import Image from 'next/image';
import './style.css'; // Ensure this path is correct

export default function InGameCustody() {
    // Manages toggling between screens
    const [screen, setScreen] = useState<string | null>(null);

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
                <div style={{ position: 'absolute', zIndex: 1, top: '0px', left: '30px', width: '400px', height: '400px' }} className="gator-jump">
                    <Image 
                        src="/images/gator 3.png" 
                        alt="gator" 
                        layout="fill" 
                        objectFit="contain" 
                    />
                </div>
                <div style={{ position: 'absolute', zIndex: 2, top: '50px', width: '500px', height: '500px' }}>
                    <Image 
                        src="/images/desk for arguer.png" 
                        alt="desk" 
                        layout="fill" 
                        objectFit="contain" 
                    />
                </div>
            </div>
            <h1 className="large-font">You Win!</h1>
            <button onClick={() => setScreen("initial")}>Continue</button>
            <button onClick={() => setScreen("initial")}>Restart</button>
            {/* {screen && <p>Current screen: {screen}</p>} */}
        </div>
    );
}