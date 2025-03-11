'use client'

import { useState } from "react";

export default function HomeInput() {
    const [copied, setCopied] = useState(false);

    // Function to copy text
    const handleCopy = () => {
        navigator.clipboard.writeText("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2s
        }).catch(err => console.error("Copy failed", err));
    };

    return (
        <div
            className="w-full flex flex-col items-center justify-center bg-[#171D27] rounded-md shadow-xl shadow-black/50 text-white py-4 lg:py-2 px-5 text-2xl lg:text-[32px] mt-5 cursor-pointer transition-all duration-200 hover:bg-black/80"
            onClick={handleCopy}
        >
            <h2 className="text-center w-full">Contract Address:</h2>
            <div
                className="w-full bg-transparent text-center overflow-x-hidden"
            >
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </div>
            {copied && <span className="text-white text-sm mt-2">Copied!</span>}
        </div>
    );
}
