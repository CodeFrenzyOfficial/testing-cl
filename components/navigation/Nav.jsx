'use client'
import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Nav() {
    // State for input value
    const [copied, setCopied] = useState(false);

    // Function to copy text
    const handleCopy = () => {

        navigator.clipboard.writeText('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2s
        }).catch(err => console.error("Copy failed", err));
    };

    return (
        <nav className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center p-4 lg:px-28 lg:py-1 bg-[#0a0b20]" id="hero-section">
            <div className="flex flex-col lg:w-2/3 lg:flex-row items-center gap-5">

                {/* Logo Image and text */}
                <div className="flex items-center">
                    <img src="/assets/icon-images/logo.png" className="w-[40%] object-contain" alt="Logo" />
                    <img src="/assets/icon-images/$CLAW.png" className="w-32 lg:-ml-2 object-contain" alt="CLAW" />
                </div>

                {/* Input field with Copy button */}
                <div className="w-[70%] lg:w-[75%] bg-[#2C2C2C] rounded-full relative flex items-center justify-between p-1">
                    <div className="rounded-full p-2 text-white bg-black">CA:</div>
                    <div
                        className="w-1/2 lg:w-[95%] text-white bg-transparent outline-none border-none ml-2 overflow-x-hidden"
                    >
                        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    </div>
                    <button
                        className="rounded-full px-5 py-2 text-white bg-black hover:bg-gray-800 transition-all"
                        onClick={handleCopy}
                    >
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
            </div>

            {/* Links and Buttons */}
            <div className="w-full lg:w-auto flex justify-between items-center gap-7">
                <button className="bg-gradient-to-r from-[#56D1F5] to-[#6E2972] text-white font-semibold rounded-full p-[3px]">
                    <span className="flex w-full bg-gray-900 text-white text-xs font-normal rounded-full px-6 py-2">
                        CHAT WITH CLAW
                    </span>
                </button>

                <div className="flex items-center gap-5 text-white">
                    <FaXTwitter className="text-3xl transition-all duration-200 hover:scale-105 hover:text-white/50" />
                    <div className="p-1 rounded-full bg-white text-black">
                        <RiSendPlaneFill className="text-2xl transition-all duration-200 hover:scale-105 hover:text-blue-400" />
                    </div>
                    <FaGithub className="text-3xl transition-all duration-200 hover:scale-105 hover:text-white/50" />
                </div>
            </div>
        </nav>
    );
}
