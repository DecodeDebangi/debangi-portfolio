import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import antarWebsite from "@/assets/images/antar-website.png";
import aiCodeReviewer from "@/assets/images/ai-code-reviewer.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Antar",
    year: "2025",
    title: "Creative Full Stack Website",
    techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://www.antar.life",
    github: "",
    image: antarWebsite,
  },
  {
    company: "Side Project",
    year: "2025",
    title: "AI Code Reviewer",
    techStack: ["React","CSS", "Tailwind CSS", "Google Gemini API"],
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "",
    github: "https://github.com/DecodeDebangi/ai-code-reviewer",
    image: aiCodeReviewer
  },
];

export const ProjectsSection = () => {
  return (
    <section id='projects' className='pb-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='Real-world Results'
          title='Feature Projects'
          description='See how I transformed concepts into engaging digital experiences.'
        />
        <div className='flex flex-col mt-10 md:mt-20 gap-20'>
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className='px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky'
              style={{ top: `calc(64px + ${projectIndex * 200}px)` }}>
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='bg-gradient-to-r from-violet-300 to-cyan-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className='font-serif text-2xl mt-2 md:mt-5 md:text-4xl'>
                    {project.title}
                  </h3>
                  <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                  {/* <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className='flex gap-2 text-sm md:text-base text-white/50'>
                        <CheckCircleIcon className='size-5 md:size-6' />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul> */}
                  <ul className='flex flex-wrap gap-3 mt-4 md:mt-5'>
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className='flex items-center gap-2 text-sm md:text-base bg-white/10 px-3 py-1.5 rounded-full text-white'>
                        <CheckCircleIcon className='size-4 md:size-5 text-emerald-400' />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                  {project.link && (<a href={project.link} target='_blank'>
                    <button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
                      <span>View Live Site</span>
                      <ArrowUpRightIcon className='size-4' />
                    </button>
                  </a>)}
                  {project.github && (<a href={project.github} target='_blank'>
                    <button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
                      <span>View Github Repo</span>
                      <ArrowUpRightIcon className='size-4' />
                    </button>
                  </a>)}
                </div>
                <div className='relative'>
                  {project.image && (<Image
                    src={project.image}
                    alt={project.title}
                    className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                  />)}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
