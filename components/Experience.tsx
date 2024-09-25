'use client';
import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

type WorkExperienceType = {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
  link: string;
};

const Experience: React.FC = () => {
  return (
    <section className="py-20 w-full" id="experience">
      <h1 className="heading text-3xl font-bold text-center mb-12">
        My <span className="text-purple">Work Experience</span>
      </h1>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {workExperience.map((card: WorkExperienceType) => (
          <ExperienceCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

const ExperienceCard: React.FC<WorkExperienceType> = ({
  title,
  desc,
  thumbnail,
  link,
}) => {
  return (
    <Button
      duration={Math.floor(Math.random() * 10000) + 10000}
      borderRadius="1.75rem"
      className="flex flex-col h-full p-6 bg-gradient-to-r from-[#04071d] to-[#0c0e23] text-white border-neutral-200 dark:border-slate-800"
    >
      <div className="flex items-center mb-4">
        <Image
          src={thumbnail}
          alt={title}
          width={64}
          height={64}
          className="w-16 h-16 object-contain"
          priority
        />
        <h2 className="text-xl font-bold ml-4">{title}</h2>
      </div>
      <p
        className="flex-grow text-start text-md font-thin mb-4"
        dangerouslySetInnerHTML={{
          __html: desc.replace(/\n/g, "<br>"),
        }}
      />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 border border-purple rounded-lg hover:bg-purple-700 transition-colors duration-300 text-center"
      >
        View Certificate
      </a>
    </Button>
  );
};

export default Experience;