import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavacriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ReactIcon from "@/assets/icons/react.svg";
import { TechIcon } from "@/components/TechIcon";
import MapImage from "@/assets/images/map.png";
import memojiImage from "@/assets/images/memoji-me.png";
import { CardHeader } from "@/components/CardHeader";

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
  },
  {
    title: "Fitness",
    emoji: "🤸‍♂️",
  },
  {
    title: "Sketching",
    emoji: "✍🏻",
  },
  {
    title: "Content Creation",
    emoji: "🎥",
  },
  {
    title: "Music",
    emoji: "🎶",
  },
];

export const AboutSection = () => {
  return (
    <div className='py-20'>
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='A Glimpse Into My World'
          description='Learn more about who I am, what I do, and what inspires me.'
        />
        <div className='mt-20'>
          <Card className='h-[320px]'>
            <CardHeader
              title='My Reads'
              description='Explore the books shaping my perspective'
            />
            <div className='w-40 mx-auto mt-8'>
              <Image src={bookImage} alt='Book Cover' />
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>My Toolbox</h3>
              <p>
                Explore the technologies and tools I use to craft exceptional
                digital experiences.
              </p>
            </div>
            <div>
              {toolboxItems.map((item) => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>Beyond the Code</h3>
              <p>Explore my interests and hobbies beyond the digital realm</p>
            </div>
            <div>
              {hobbies.map((item) => (
                <div key={item.title}>
                  <span>{item.title}</span>
                  <span>{item.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={MapImage} alt='Map' />
            <Image src={memojiImage} alt='Smiling Memoji' />
          </Card>
        </div>
      </div>
    </div>
  );
};
