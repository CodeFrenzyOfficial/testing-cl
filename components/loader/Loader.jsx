'use client'

import { useState, useEffect } from 'react';
export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    // Function to handle content load
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        return () => {
            clearTimeout();
        };
    }, []);
    return (
        isLoading && <div className='fixed top-0 bg-black grid place-items-center w-full h-screen z-[200]'>
            <h2 className='text-green-400 text-3xl font-bold'>Booting up CLAW...</h2>
        </div>
    )
}
