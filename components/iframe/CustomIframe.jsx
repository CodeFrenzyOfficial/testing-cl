'use client';

export default function CustomIframe() {
    return (
        <div className="w-full grid place-items-center z-10 relative">
            <div className="h-[70vh] w-2/3 rounded-4xl">
                <iframe
                    src="https://en.wikipedia.org/wiki/Main_Page"
                    className="w-full h-full"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}
