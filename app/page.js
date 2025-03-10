import HomeInput from "@/components/home-input/HomeInput";
import Nav from "@/components/navigation/Nav";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import CustomIframe from "@/components/iframe/CustomIframe";
import Loader from "@/components/loader/Loader";
export default function Home() {
  return (
    <div className="">
      <Loader />
      <Nav />
      <main className="relative min-h-screen">
        {/* background video */}
        <video
          src="/assets/icon-images/Neon Bg Video.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover video-bg z-[-1]"
          loop
          autoPlay
          muted
        />
        {/* gradient image */}
        <div className="w-full h-full absolute top-0 left-0 z-[2] bg-black/70"></div>

        {/* hero section content */}
        <div className="min-h-screen flex flex-col justify-start items-center z-[10] relative">
          <div className="w-[80%] lg:w-[60%] flex flex-col text-center gap-2">
            <div className="grid place-items-center">
              <img
                src="/assets/icon-images/$CLAW-1.png"
                className="lg:w-[35%] object-contain"
                alt=""
              />
            </div>

            <h2 className="text-4xl xl:text-[64px] text-white -mt-5 lg:-mt-10 font-bold !leading-tight">
              The World’s first AI-powered <br />
              <span className="text-[#BA8AB0]">savage meme coin cat!</span>
            </h2>

            <div className="grid place-items-center mt-4">
              <button className="w-fit bg-gradient-to-r from-[#56D1F5] to-[#6E2972] text-white font-semibold rounded-full p-[5px] cursor-pointer">
                <span className="flex w-full bg-gray-900 text-white rounded-full px-5 py-3 lg:px-14 lg:py-5 lg:text-[24px] font-normal">
                  CHAT WITH CLAW
                </span>
              </button>
            </div>

            <HomeInput />

            {/* Buy now button */}
            <div className="grid place-items-center mt-5">
              <button className="w-fit bg-gray-900 text-white rounded-full px-10 py-5 font-normal text-xl cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>

          {/* cat video */}
          <div className="w-full h-full relative grid place-items-center custom-gradient z-[100] -mt-[5%] lg:-mt-[10%]">
            <div className="w-2/3 lg:w-[40%] rounded-full overflow-hidden">
              <video
                src="/assets/animation/cat-animation.mp4"
                className="lighten-mode"
                autoPlay
                loop
                muted
              ></video>
            </div>

            {/* social icons */}
            <div className="flex items-center gap-14 text-white my-10">
              <FaXTwitter className="text-3xl lg:text-6xl transition-all duration-200 hover:scale-105 hover:text-white/50" />
              <div className="p-2 rounded-full bg-white text-black">
                <RiSendPlaneFill className="text-2xl lg:text-5xl transition-all duration-200 hover:scale-105 hover:text-blue-400" />
              </div>
              <FaGithub className="text-3xl lg:text-6xl transition-all duration-200 hover:scale-105 hover:text-white/50" />
            </div>

            {/* text */}
            <div className="grid place-items-center px-20 lg:px-24 my-10 overflow-hidden">
              <div
                className="rounded-4xl bg-[#171D27] px-4 lg:px-14 py-4"
                data-aos="fade-up"
              >
                <img
                  src="/assets/icon-images/first-qoute.png"
                  className="w-3 lg:w-auto"
                  alt=""
                />
                <h2 className="text-center lg:text-[45px] leading-tight font-bold bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent lg:px-10">
                  Claw brings the cyberpunk AI revolution. A fusion of AI
                  intelligence and degen crypto spirit.
                </h2>
                <div className="flex justify-end">
                  <img
                    src="/assets/icon-images/second-qoute.png"
                    className="w-3 lg:w-auto lg:mr-14"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* video section */}
            <div className="w-full relative mt-5 min-h-screen py-10 flex flex-col justify-between">
              {/* example Iframe */}
              <CustomIframe />
              {/* footer */}

              <video
                src="/assets/icon-images/Cyber City Video.mp4"
                className="absolute top-0 left-0 w-full h-full opacity-30 z-0 object-cover"
                autoPlay
                loop
                muted
              ></video>

              <div className="flex items-center justify-center gap-5 z-[100]">
                <a href="#hero-section" className="cursor-pointer">
                  <img
                    src="/assets/icon-images/$CLAW-1.png"
                    className="w-40 lg:w-60 object-contain"
                    alt=""
                  />
                </a>
                <hr className="w-px h-10 bg-white -ml-10" />
                <a href="#" target="_blank">
                  <img
                    src="/assets/icon-images/solana-sol-logo.png"
                    className="w-14 lg:w-20 object-contain"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <footer className="w-full bg-[#050440] grid place-items-center py-5 text-white  text-center">
            <div className="space-y-2">
              <img src="/assets/icon-images/footer-logo.png" alt="" />

              <h2>All rights reserved</h2>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
