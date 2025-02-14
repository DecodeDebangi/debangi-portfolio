"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavacriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ReactIcon from "@/assets/icons/react.svg";
import MapImage from "@/assets/images/map.png";
import memojiImage from "@/assets/images/memoji-me.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavacriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "Solidity",
    iconType: JavacriptIcon,
  },
  {
    title: "Rust",
    iconType: JavacriptIcon,
  },
  {
    title: "Figma",
    iconType: JavacriptIcon,
  },
  {
    title: "Next.js",
    iconType: JavacriptIcon,
  },
  {
    title: "ReactJS",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Traveling",
    emoji: "✈️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Fitness",
    emoji: "🤸‍♂️",
    left: "50%",
    top: "5%",
  },
  {
    title: "Sketching",
    emoji: "✍🏻",
    left: "40%",
    top: "35%",
  },
  {
    title: "Content Creation",
    emoji: "🎥",
    left: "5%",
    top: "65%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "55%",
    top: "80%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className='py-20 lg:py-28'>
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='A Glimpse Into My World'
          description='Learn more about who I am, what I do, and what inspires me.'
        />
        <div className='mt-20 flex flex-col gap-8'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
            <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
              <CardHeader
                title='My Reads'
                description='Explore the books shaping my perspective'
              />
              <div className='w-40 mx-auto mt-2 md:mt-0'>
                <Image src={bookImage} alt='Book Cover' />
              </div>
            </Card>
            <Card className='h-[320px] md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='My Toolbox'
                description='Explore the technologies and tools I use to craft exceptional
                digital experiences.'
                className=''
              />
              <ToolboxItems
                items={toolboxItems}
                className=''
                itemsWrapperClassName='animate-move-left [animation-duration:15s]'
              />
              <ToolboxItems
                items={toolboxItems}
                className='mt-6'
                itemsWrapperClassName='animate-move-right [animation-duration:15s]'
              />
            </Card>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
            <Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='Beyond the Code'
                description='Explore my interests and hobbies beyond the digital realm'
                className='px-6 py-6'
              />
              <div className='relative flex-1' ref={constraintRef}>
                {hobbies.map((item) => (
                  <motion.div
                    key={item.title}
                    className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-grab active:cursor-grabbing'
                    style={{ left: item.left, top: item.top }}
                    drag
                    dragConstraints={constraintRef}>
                    <span className='font-medium text-gray-950'>
                      {item.title}
                    </span>
                    <span>{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
              <Image
                src={MapImage}
                alt='Map'
                className='h-full w-full object-cover object-left-top'
              />
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content[""] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30'>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>
                <Image
                  src={memojiImage}
                  alt='Smiling Memoji'
                  className='size-20'
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
