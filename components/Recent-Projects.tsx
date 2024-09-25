'use client'
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <section className="py-20" id="projects">
      <h1 className="heading mb-10">
        A small selection of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-8 mt-10">
        {projects.map(({ id, img, title, des, iconLists, link }) => (
          <div
            className="flex flex-col items-center justify-center min-h-[25rem] sm:min-h-[28rem] lg:min-h-[32.5rem] w-[80vw] sm:w-[500px] rounded-lg shadow-lg overflow-hidden"
            key={id}
          >
            <PinContainer
              title="Github"
              href="https://github.com/Kushhhhhhhh"
            >
              <div className="relative flex items-center justify-center w-[80vw] sm:w-[450px] h-[20vh] lg:h-[30vh] mb-10 ">
                <Image
                  src={img}
                  alt={`${title} cover`}
                  className="object-cover"
                  width={500}
                  height={300}
                  priority
                />
              </div>

              <h2 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1">
                {title}
              </h2>

              <p className="text-sm lg:text-xl font-light lg:font-normal line-clamp-2 my-[1vh] text-[#BEC1DD]">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className={`border border-white/[.2] rounded-full bg-black w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center -translate-x-[${5 * index + 2}px]`}
                    >
                      <Image src={icon} alt={`Technology ${index + 1}`} className="p-2" width={40} height={40} />
                    </div>
                  ))}
                </div>

                <div className="flex items-center">
                  <Link href={link} className="text-sm md:text-xs lg:text-xl text-purple" target="_blank" rel="noopener noreferrer">
                    Link
                  </Link>
                  <FaLocationArrow className="ms-3 text-[#CBACF9]" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentProjects;