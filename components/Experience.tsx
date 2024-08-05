'use client';
import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

type WorkExperienceType = {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
};

const Experience: React.FC = () => {
  const handleCertificate = () => {
    window.open("/certificate.pdf", "_blank");
  };

  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading text-3xl font-bold text-center">
        My <span className="text-purple">Work Experience</span>
      </h1>

      <div
        className={`w-full mt-12 grid gap-10 ${
          workExperience.length === 1
            ? "grid-cols-1 place-items-center"
            : "lg:grid-cols-2 grid-cols-1"
        }`}
      >
        {workExperience.map((card: WorkExperienceType) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4 lg:gap-6">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="w-16 md:w-20 lg:w-32"
              />
              <div className="lg:ml-5">
                <h1 className="text-start text-xl md:text-2xl font-bold mb-4">
                  {card.title}
                </h1>
                <p
                  className="text-start"
                  dangerouslySetInnerHTML={{
                    __html: card.desc.replace(/\n/g, "<br>"),
                  }}
                />
                <p
                  onClick={handleCertificate}
                  className="mt-4 px-4 py-2 border border-purple  rounded-lg hover:bg-purple-700 transition-colors duration-300"
                >
                  View Certificate
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;