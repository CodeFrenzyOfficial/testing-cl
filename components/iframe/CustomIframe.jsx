'use client';

export default function CustomIframe() {
    return (
        <div className="w-full grid place-items-center ">
            <div className="relative pt-[56.25%] w-2/3 border border-solid border-white rounded-4xl">
                <iframe
                    src="https://en.wikipedia.org/wiki/Main_Page"
                    className="absolute top-0 left-0 w-full h-full rounded-lg border-none"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}
