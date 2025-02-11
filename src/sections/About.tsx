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
import { ToolboxItems } from "@/components/ToolboxItems";

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
        <div className='mt-20 flex flex-col gap-8'>
          <Card className='h-[320px]'>
            <CardHeader
              title='My Reads'
              description='Explore the books shaping my perspective'
            />
            <div className='w-40 mx-auto mt-8'>
              <Image src={bookImage} alt='Book Cover' />
            </div>
          </Card>
          <Card className='h-[320px] p-0'>
            <CardHeader
              title='My Toolbox'
              description='Explore the technologies and tools I use to craft exceptional
                digital experiences.'
              className='px-6 pt-6'
            />
            <ToolboxItems items={toolboxItems} className='mt-6' />
            <ToolboxItems
              items={toolboxItems}
              className='mt-6 '
              itemsWrapperClassName='-translate-x-1/2'
            />
          </Card>
          <Card>
            <CardHeader
              title='Beyond the Code'
              description='Explore my interests and hobbies beyond the digital realm'
            />
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
