import memojiImage from "@/assets/images/memoji-me.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div
        className='absolute inset-0 
  [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10'>
        <div
          className='absolute inset-0 -z-30 opacity-5'
          style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>

        <HeroOrbit
          size={430}
          rotation={-15}
          shouldOrbit
          orbitDuration='30s'
          shouldSpin
          spinDuration='6s'>
          <SparkleIcon className='size-8 text-violet-300/20' />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration='32s'
          shouldSpin
          spinDuration='6s'>
          <SparkleIcon className='size-5 text-violet-300/20' />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit
          orbitDuration='34s'
          shouldSpin
          spinDuration='6s'>
          <div className='size-2 rounded-full bg-violet-300/20' />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration='36s'
          shouldSpin
          spinDuration='6s'>
          <SparkleIcon className='size-10 text-violet-300/20' />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration='38s'
          shouldSpin
          spinDuration='6s'>
          <StarIcon className='size-12 text-violet-300' />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration='40s'
          shouldSpin
          spinDuration='6s'>
          <StarIcon className='size-8 text-violet-300' />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit
          orbitDuration='42s'
          shouldSpin
          spinDuration='6s'>
          <div className='size-2 rounded-full bg-violet-300/20' />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration='44s'
          shouldSpin
          spinDuration='6s'>
          <SparkleIcon className='size-14 text-violet-300/20' />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit
          orbitDuration='46s'
          shouldSpin
          spinDuration='6s'>
          <div className='size-3 rounded-full bg-violet-300/20' />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-45}
          shouldOrbit
          orbitDuration='48s'
          shouldSpin
          spinDuration='6s'>
          <StarIcon className='size-28 text-violet-300' />
        </HeroOrbit>
      </div>
      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image
            src={memojiImage}
            alt='Memoji at computer'
            width={100}
            height={100}
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
            </div>
            <div className='text-sm font-medium'>Open to work</div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide display-inline-flex'>
            Full Stack
            <StarIcon className='size-14 text-cyan-300/80 inline-flex' />
            Web3
            <StarIcon className='size-14 text-cyan-300/80 inline-flex' /> DevOps
            Engineer
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            A passionate Full Stack and web3 Developer specializing in creating
            intuitive and engaging web applications. With expertise in React,
            TypeScript, and blockchain technologies, I transform complex web
            concepts into seamless user experiences.
          </p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <Link href='#projects'>
            <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
              <span className='font-semibold'>Explore Projects</span>
              <ArrowDown className='size-4' />
            </button>
          </Link>
          <Link href='https://www.instagram.com/decodedebangi/' target='_blank'>
            <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
              <span>✅</span>
              <span className='font-semibold '>Connect</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
